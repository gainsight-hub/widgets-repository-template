#!/bin/bash

# build-registry.sh
# Generates widget_registry.json by deep-merging the default widget template
# with each widgets/<name>/widget.json, resolving paths from widget-dir-relative
# to repository-root-relative. Each widget.json must include either a "source"
# block (repo-hosted) or a "content" block (external).
#
# Also scans each widget directory for connectors.json, validates connector
# definitions, and generates connectors_registry.json.

set -e

# -----------------------------------------------------------------------------
# Defaults (widget template + content-block). Edit here; no external config file.
# -----------------------------------------------------------------------------

DEFAULT_CONTAINERS='["Full width"]'
DEFAULT_WIDGETS_LIBRARY="true"
DEFAULT_SETTINGS='{"configurable":true,"editable":true,"removable":true,"shared":false,"movable":false}'

CONTENT_DEFAULT_METHOD="GET"
CONTENT_DEFAULT_REQUIRES_AUTH="false"
CONTENT_DEFAULT_CACHE_STRATEGY="no-cache"

STYLESHEET_DEFAULT_CONTENT_FILE="style.css"
STYLESHEET_DEFAULT_RULES='[{"field":"pageType","operator":"in","value":["global"]}]'

SCRIPT_DEFAULT_CONTENT_FILE="script.js"
SCRIPT_DEFAULT_RULES='[{"field":"pageType","operator":"in","value":["global"]}]'
SCRIPT_DEFAULT_PLACEMENT="head"

# -----------------------------------------------------------------------------

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

WIDGETS_DIR="widgets"
STYLESHEETS_DIR="stylesheets"
SCRIPTS_DIR="scripts"
OUTPUT_FILE="widget_registry.json"
CONNECTORS_OUTPUT_FILE="connectors_registry.json"

DRY_RUN=false
VALIDATE_ONLY=false

while [[ $# -gt 0 ]]; do
  case $1 in
    --dry-run)
      DRY_RUN=true
      shift
      ;;
    --validate)
      VALIDATE_ONLY=true
      shift
      ;;
    --help)
      echo "Usage: $0 [OPTIONS]"
      echo ""
      echo "Options:"
      echo "  --dry-run    Preview the output without writing to file"
      echo "  --validate   Validate existing widget_registry.json and connectors_registry.json"
      echo "  --help       Show this help message"
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      echo "Run '$0 --help' for usage information"
      exit 1
      ;;
  esac
done

error() {
  echo -e "${RED}ERROR:${NC} $1" >&2
}

success() {
  echo -e "${GREEN}SUCCESS:${NC} $1"
}

warning() {
  echo -e "${YELLOW}WARNING:${NC} $1"
}

if ! command -v jq &> /dev/null; then
  error "jq is required but not installed. Please install it:"
  echo "  macOS: brew install jq"
  echo "  Linux: apt-get install jq or yum install jq"
  exit 1
fi

if [ "$VALIDATE_ONLY" = true ]; then
  if [ ! -f "$OUTPUT_FILE" ]; then
    error "File $OUTPUT_FILE does not exist"
    exit 1
  fi
  if ! jq empty "$OUTPUT_FILE" 2>/dev/null; then
    error "Invalid JSON in $OUTPUT_FILE"
    exit 1
  fi
  widget_count=$(jq '.widgets | length' "$OUTPUT_FILE")
  bad=0
  for i in $(seq 0 $((widget_count - 1))); do
    w=$(jq -c ".widgets[$i]" "$OUTPUT_FILE")
    has_source=$(echo "$w" | jq 'has("source")')
    has_content=$(echo "$w" | jq 'has("content")')
    if [ "$has_source" = "true" ] && [ "$has_content" = "true" ]; then
      error "Widget at index $i has both source and content"
      bad=1
    elif [ "$has_source" != "true" ] && [ "$has_content" != "true" ]; then
      error "Widget at index $i has neither source nor content"
      bad=1
    fi
    if [ "$has_source" = "true" ]; then
      sp=$(echo "$w" | jq -r '.source.path')
      if [ "$sp" != "null" ] && [ -n "$sp" ]; then
        if [[ "$sp" == *".."* ]] || [[ "$sp" == /* ]]; then
          error "Widget at index $i has invalid source.path: $sp"
          bad=1
        fi
      fi
    fi
  done
  if [ $bad -eq 1 ]; then
    exit 1
  fi
  stylesheet_count=$(jq '.stylesheets // [] | length' "$OUTPUT_FILE")
  script_count=$(jq '.scripts // [] | length' "$OUTPUT_FILE")
  success "Valid JSON in $OUTPUT_FILE"
  success "Found $widget_count widgets, $stylesheet_count stylesheets, and $script_count scripts in registry"

  # -------------------------------------------------------------------------
  # Validate connectors_registry.json (if it exists)
  # -------------------------------------------------------------------------
  if [ -f "$CONNECTORS_OUTPUT_FILE" ]; then
    if ! jq empty "$CONNECTORS_OUTPUT_FILE" 2>/dev/null; then
      error "Invalid JSON in $CONNECTORS_OUTPUT_FILE"
      exit 1
    fi
    if ! jq -e '.connectors | type == "array"' "$CONNECTORS_OUTPUT_FILE" > /dev/null 2>&1; then
      error "$CONNECTORS_OUTPUT_FILE missing top-level connectors array"
      exit 1
    fi
    connector_count=$(jq '.connectors | length' "$CONNECTORS_OUTPUT_FILE")
    connector_bad=0
    for i in $(seq 0 $((connector_count - 1))); do
      c=$(jq -c ".connectors[$i]" "$CONNECTORS_OUTPUT_FILE")
      c_name=$(echo "$c" | jq -r '.name // empty')
      c_url=$(echo "$c" | jq -r '.url // empty')
      if [ -z "$c_name" ]; then
        error "Connector at index $i missing required field: name"
        connector_bad=1
      fi
      if [ -z "$c_url" ]; then
        error "Connector at index $i missing required field: url"
        connector_bad=1
      fi
    done
    # Check for duplicate permalinks
    dup_permalinks=$(jq -r '.connectors[].permalink // empty' "$CONNECTORS_OUTPUT_FILE" | sort | uniq -d)
    if [ -n "$dup_permalinks" ]; then
      for dup in $dup_permalinks; do
        error "Duplicate connector permalink: $dup"
      done
      connector_bad=1
    fi
    if [ $connector_bad -eq 1 ]; then
      exit 1
    fi
    success "Valid JSON in $CONNECTORS_OUTPUT_FILE"
    success "Found $connector_count connectors in registry"
  fi

  exit 0
fi

if [ ! -d "$WIDGETS_DIR" ]; then
  error "Widgets directory $WIDGETS_DIR not found"
  exit 1
fi

DEFAULT_BASE=$(jq -n -c \
  --argjson containers "$DEFAULT_CONTAINERS" \
  --argjson widgetsLibrary "$DEFAULT_WIDGETS_LIBRARY" \
  --argjson settings "$DEFAULT_SETTINGS" \
  '{containers: $containers, widgetsLibrary: $widgetsLibrary, settings: $settings}')
success "Using built-in defaults"

normalize_widget_path() {
  local raw="$1"
  local name="$2"
  if [[ "$raw" == *".."* ]] || [[ "$raw" == /* ]]; then
    echo ""
    return 1
  fi
  raw="${raw#/}"
  raw="${raw%/}"
  if [ -z "$raw" ] || [ "$raw" = "." ]; then
    echo "${WIDGETS_DIR}/${name}"
  else
    echo "${WIDGETS_DIR}/${name}/${raw}"
  fi
}

# -----------------------------------------------------------------------------
# Generate permalink from connector name
# Lowercase, replace spaces/special chars with dashes, collapse multiple dashes
# -----------------------------------------------------------------------------
generate_permalink() {
  local name="$1"
  echo "$name" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-//' | sed 's/-$//'
}

WIDGETS_JSON="[]"
widget_count=0
error_count=0

for widget_dir in "$WIDGETS_DIR"/*; do
  [ -d "$widget_dir" ] || continue
  widget_name=$(basename "$widget_dir")
  widget_config="$widget_dir/widget.json"

  echo ""
  echo "Processing widget: $widget_name"

  if [ ! -f "$widget_config" ]; then
    error "  Missing widget.json in $widget_dir"
    ((error_count++))
    continue
  fi

  if ! jq empty "$widget_config" 2>/dev/null; then
    error "  Invalid JSON in $widget_config"
    ((error_count++))
    continue
  fi

  version=$(jq -r '.version // empty' "$widget_config")
  title=$(jq -r '.title // empty' "$widget_config")
  description=$(jq -r '.description // empty' "$widget_config")

  if [ -z "$version" ]; then
    error "  Missing required field: version"
    ((error_count++))
    continue
  fi
  if [ -z "$title" ]; then
    error "  Missing required field: title"
    ((error_count++))
    continue
  fi
  if [ -z "$description" ]; then
    error "  Missing required field: description"
    ((error_count++))
    continue
  fi

  has_source=$(jq 'if .source != null then true else false end' "$widget_config")
  has_content=$(jq 'if .content != null and (.content.endpoint | type == "string") and (.content.endpoint | startswith("http")) then true else false end' "$widget_config")

  if [ "$has_source" = "true" ] && [ "$has_content" = "true" ]; then
    error "  widget.json must not have both source and content"
    ((error_count++))
    continue
  fi

  if [ "$has_source" != "true" ] && [ "$has_content" != "true" ]; then
    error "  widget.json must include either source or content"
    ((error_count++))
    continue
  fi

  image_src=$(jq -r '.imageSrc // empty' "$widget_config")
  image_name=$(jq -r '.imageName // empty' "$widget_config")
  [ "$image_src" = "null" ] && image_src=""
  [ "$image_name" = "null" ] && image_name=""
  if [ -n "$image_src" ] && [ -n "$image_name" ]; then
    error "  Widget has both imageSrc and imageName; only one is allowed"
    ((error_count++))
    continue
  fi

  image_src_resolved=""
  if [ -n "$image_src" ]; then
    if [[ "$image_src" == http://* ]] || [[ "$image_src" == https://* ]]; then
      image_src_resolved="$image_src"
    else
      if [[ "$image_src" == *".."* ]] || [[ "$image_src" == /* ]]; then
        error "  Invalid imageSrc (no .. or leading /): $image_src"
        ((error_count++))
        continue
      fi
      image_src_normalized="${image_src#./}"
      image_src_resolved="${WIDGETS_DIR}/${widget_name}/${image_src_normalized}"
      if [ ! -f "$image_src_resolved" ]; then
        error "  Thumbnail file not found: $image_src_resolved"
        ((error_count++))
        continue
      fi
      size_bytes=$(stat -f%z "$image_src_resolved" 2>/dev/null || stat -c%s "$image_src_resolved" 2>/dev/null)
      if [ -n "$size_bytes" ] && [ "$size_bytes" -gt 524288 ]; then
        error "  Thumbnail exceeds 512 KB: $image_src_resolved"
        ((error_count++))
        continue
      fi
    fi
  fi

  if [ "$has_source" = "true" ]; then
    src_path=$(jq -r '.source.path // "."' "$widget_config")
    src_entry=$(jq -r '.source.entry // empty' "$widget_config")
    if [ -z "$src_entry" ] || [ "$src_entry" = "null" ]; then
      error "  source.entry is required when source block is present"
      ((error_count++))
      continue
    fi

    repo_path=$(normalize_widget_path "$src_path" "$widget_name") || true
    if [ -z "$repo_path" ]; then
      error "  Invalid source.path (no .. or leading /): $src_path"
      ((error_count++))
      continue
    fi

    if [ "$src_path" = "." ] || [ -z "$src_path" ] || [ "$src_path" = "./" ]; then
      check_dir="$widget_dir"
      entry_file="$widget_dir/$src_entry"
    else
      check_dir="$widget_dir/$src_path"
      entry_file="$widget_dir/$src_path/$src_entry"
    fi

    if [ ! -d "$check_dir" ]; then
      error "  Source directory does not exist: $check_dir"
      ((error_count++))
      continue
    fi
    if [ ! -f "$entry_file" ]; then
      error "  Entry file does not exist: $entry_file"
      ((error_count++))
      continue
    fi

    widget=$(jq -n \
      --argjson default_base "$DEFAULT_BASE" \
      --slurpfile widget "$widget_config" \
      --arg type "$widget_name" \
      --arg repo_path "$repo_path" \
      --arg entry "$src_entry" \
      --arg image_src_resolved "$image_src_resolved" \
      '
      def deep_merge(a; b):
        if b == null then a
        elif (a | type) != "object" or (b | type) != "object" then b
        else (a | keys) + (b | keys) | unique
        | map(. as $k | { ($k): (deep_merge(a[$k]; b[$k])) })
        | add
        end;
      ($widget[0] | del(.source, .content, .imageSrc)) as $w
      | deep_merge($default_base; $w)
      | . + { "type": $type, "source": { "path": $repo_path, "entry": $entry } }
      | if $image_src_resolved != "" then . + {"imageSrc": $image_src_resolved} | del(.imageName) else . end
      | del(.configuration | nulls) | del(.defaultConfig | nulls)
      ')
  else
    content_endpoint=$(jq -r '.content.endpoint' "$widget_config")
    content_method=$(jq -r '.content.method // empty' "$widget_config")
    [ -z "$content_method" ] || [ "$content_method" = "null" ] && content_method="$CONTENT_DEFAULT_METHOD"
    content_auth=$(jq -c '.content.requiresAuthentication // empty' "$widget_config")
    [ -z "$content_auth" ] || [ "$content_auth" = "null" ] && content_auth="$CONTENT_DEFAULT_REQUIRES_AUTH"
    content_cache=$(jq -r '.content.cacheStrategy // empty' "$widget_config")
    [ -z "$content_cache" ] || [ "$content_cache" = "null" ] && content_cache="$CONTENT_DEFAULT_CACHE_STRATEGY"

    requires_auth_json="$content_auth"
    widget=$(jq -n \
      --argjson default_base "$DEFAULT_BASE" \
      --slurpfile widget "$widget_config" \
      --arg type "$widget_name" \
      --arg endpoint "$content_endpoint" \
      --arg method "$content_method" \
      --arg requires_auth_str "$requires_auth_json" \
      --arg cacheStrategy "$content_cache" \
      --arg image_src_resolved "$image_src_resolved" \
      '
      def deep_merge(a; b):
        if b == null then a
        elif (a | type) != "object" or (b | type) != "object" then b
        else (a | keys) + (b | keys) | unique
        | map(. as $k | { ($k): (deep_merge(a[$k]; b[$k])) })
        | add
        end;
      ($widget[0] | del(.source, .content, .imageSrc)) as $w
      | deep_merge($default_base; $w)
      | . + {
          "type": $type,
          "content": {
            "endpoint": $endpoint,
            "method": $method,
            "requiresAuthentication": ($requires_auth_str | fromjson),
            "cacheStrategy": $cacheStrategy
          }
        }
      | if $image_src_resolved != "" then . + {"imageSrc": $image_src_resolved} | del(.imageName) else . end
      | del(.configuration | nulls) | del(.defaultConfig | nulls)
      ')
  fi

  WIDGETS_JSON=$(echo "$WIDGETS_JSON" | jq --argjson widget "$widget" '. + [$widget]')
  success "  Processed: $title (v$version)"
  ((widget_count++))
done

echo ""
echo "================================"

if [ $error_count -gt 0 ]; then
  error "Failed to process $error_count widget(s)"
  exit 1
fi

if [ $widget_count -eq 0 ]; then
  error "No widgets found to process"
  exit 1
fi

success "Successfully processed $widget_count widget(s)"

# ---- Process stylesheets ----
STYLESHEETS_JSON="[]"
stylesheet_count=0

if [ -d "$STYLESHEETS_DIR" ]; then
  for stylesheet_dir in "$STYLESHEETS_DIR"/*; do
    [ -d "$stylesheet_dir" ] || continue
    stylesheet_name=$(basename "$stylesheet_dir")
    stylesheet_config="$stylesheet_dir/stylesheet.json"

    echo ""
    echo "Processing stylesheet: $stylesheet_name"

    if [ ! -f "$stylesheet_config" ]; then
      error "  Missing stylesheet.json in $stylesheet_dir"
      ((error_count++))
      continue
    fi

    if ! jq empty "$stylesheet_config" 2>/dev/null; then
      error "  Invalid JSON in $stylesheet_config"
      ((error_count++))
      continue
    fi

    ss_name=$(jq -r '.name // empty' "$stylesheet_config")
    if [ -z "$ss_name" ]; then
      error "  Missing required field: name"
      ((error_count++))
      continue
    fi

    ss_content_file=$(jq -r '.contentFile // empty' "$stylesheet_config")
    if [ -n "$ss_content_file" ] && [ "$ss_content_file" != "null" ]; then
      ss_file_name="$ss_content_file"
    else
      ss_file_name="$STYLESHEET_DEFAULT_CONTENT_FILE"
    fi

    if [ ! -f "$stylesheet_dir/$ss_file_name" ]; then
      error "  Missing $ss_file_name in $stylesheet_dir"
      ((error_count++))
      continue
    fi

    ss_path="./${STYLESHEETS_DIR}/${stylesheet_name}/${ss_file_name}"

    stylesheet=$(jq -n \
      --argjson default_rules "$STYLESHEET_DEFAULT_RULES" \
      --slurpfile ss "$stylesheet_config" \
      --arg path "$ss_path" \
      '{"rules": $default_rules} * $ss[0] * {"path": $path} | del(.contentFile)')

    STYLESHEETS_JSON=$(echo "$STYLESHEETS_JSON" | jq --argjson ss "$stylesheet" '. + [$ss]')
    success "  Processed: $ss_name"
    ((stylesheet_count++))
  done

  if [ $error_count -gt 0 ]; then
    error "Failed to process some stylesheet(s)"
    exit 1
  fi

  if [ $stylesheet_count -gt 0 ]; then
    echo ""
    success "Successfully processed $stylesheet_count stylesheet(s)"
  fi
fi

# ---- Process scripts ----
SCRIPTS_JSON="[]"
script_count=0

if [ -d "$SCRIPTS_DIR" ]; then
  for script_dir in "$SCRIPTS_DIR"/*; do
    [ -d "$script_dir" ] || continue
    script_name=$(basename "$script_dir")
    script_config="$script_dir/script.json"

    echo ""
    echo "Processing script: $script_name"

    if [ ! -f "$script_config" ]; then
      error "  Missing script.json in $script_dir"
      ((error_count++))
      continue
    fi

    if ! jq empty "$script_config" 2>/dev/null; then
      error "  Invalid JSON in $script_config"
      ((error_count++))
      continue
    fi

    sc_name=$(jq -r '.name // empty' "$script_config")
    if [ -z "$sc_name" ]; then
      error "  Missing required field: name"
      ((error_count++))
      continue
    fi

    sc_content_file=$(jq -r '.contentFile // empty' "$script_config")
    if [ -n "$sc_content_file" ] && [ "$sc_content_file" != "null" ]; then
      sc_file_name="$sc_content_file"
    else
      sc_file_name="$SCRIPT_DEFAULT_CONTENT_FILE"
    fi

    if [ ! -f "$script_dir/$sc_file_name" ]; then
      error "  Missing $sc_file_name in $script_dir"
      ((error_count++))
      continue
    fi

    sc_path="./${SCRIPTS_DIR}/${script_name}/${sc_file_name}"

    script=$(jq -n \
      --argjson default_rules "$SCRIPT_DEFAULT_RULES" \
      --arg default_placement "$SCRIPT_DEFAULT_PLACEMENT" \
      --slurpfile sc "$script_config" \
      --arg path "$sc_path" \
      '{"rules": $default_rules, "placement": $default_placement} * $sc[0] * {"path": $path} | del(.contentFile)')

    SCRIPTS_JSON=$(echo "$SCRIPTS_JSON" | jq --argjson sc "$script" '. + [$sc]')
    success "  Processed: $sc_name"
    ((script_count++))
  done

  if [ $error_count -gt 0 ]; then
    error "Failed to process some script(s)"
    exit 1
  fi

  if [ $script_count -gt 0 ]; then
    echo ""
    success "Successfully processed $script_count script(s)"
  fi
fi

# ---- Assemble widget registry ----
REGISTRY_JSON=$(jq -n --argjson widgets "$WIDGETS_JSON" '{widgets: $widgets}')
if [ $stylesheet_count -gt 0 ]; then
  REGISTRY_JSON=$(echo "$REGISTRY_JSON" | jq --argjson stylesheets "$STYLESHEETS_JSON" '. + {stylesheets: $stylesheets}')
fi
if [ $script_count -gt 0 ]; then
  REGISTRY_JSON=$(echo "$REGISTRY_JSON" | jq --argjson scripts "$SCRIPTS_JSON" '. + {scripts: $scripts}')
fi

# -----------------------------------------------------------------------------
# Connector processing
# -----------------------------------------------------------------------------

echo ""
echo "================================"
echo ""
echo "Processing connectors..."

CONNECTORS_JSON="[]"
connector_count=0
connector_error_count=0
ALL_PERMALINKS=""

for widget_dir in "$WIDGETS_DIR"/*; do
  [ -d "$widget_dir" ] || continue
  widget_name=$(basename "$widget_dir")
  connectors_config="$widget_dir/connectors.json"

  [ -f "$connectors_config" ] || continue

  echo ""
  echo "Processing connectors: $widget_name"

  if ! jq empty "$connectors_config" 2>/dev/null; then
    error "  Invalid JSON in $connectors_config"
    ((connector_error_count++))
    continue
  fi

  if ! jq -e '.connectors | type == "array"' "$connectors_config" > /dev/null 2>&1; then
    error "  $connectors_config missing top-level connectors array"
    ((connector_error_count++))
    continue
  fi

  num_connectors=$(jq '.connectors | length' "$connectors_config")

  for i in $(seq 0 $((num_connectors - 1))); do
    c=$(jq -c ".connectors[$i]" "$connectors_config")
    c_name=$(echo "$c" | jq -r '.name // empty')
    c_url=$(echo "$c" | jq -r '.url // empty')
    c_method=$(echo "$c" | jq -r '.method // empty')
    c_permalink=$(echo "$c" | jq -r '.permalink // empty')

    # Validate name (required, non-empty string, max 255 chars)
    if [ -z "$c_name" ]; then
      error "  Connector at index $i missing required field: name"
      ((connector_error_count++))
      continue
    fi
    name_length=${#c_name}
    if [ "$name_length" -gt 255 ]; then
      error "  Connector '$c_name' name exceeds 255 characters"
      ((connector_error_count++))
      continue
    fi

    # Validate url (required, non-empty string)
    if [ -z "$c_url" ]; then
      error "  Connector '$c_name' missing required field: url"
      ((connector_error_count++))
      continue
    fi

    # Validate method if present (must be GET/POST/PUT/DELETE/PATCH/OPTIONS/HEAD)
    if [ -n "$c_method" ]; then
      case "$c_method" in
        GET|POST|PUT|DELETE|PATCH|OPTIONS|HEAD) ;;
        *)
          error "  Connector '$c_name' has invalid method: $c_method (must be GET/POST/PUT/DELETE/PATCH/OPTIONS/HEAD)"
          ((connector_error_count++))
          continue
          ;;
      esac
    fi

    # Generate permalink from name if not provided
    if [ -z "$c_permalink" ]; then
      c_permalink=$(generate_permalink "$c_name")
      warning "  Connector '$c_name' missing permalink, auto-generated: $c_permalink"
      c=$(echo "$c" | jq --arg permalink "$c_permalink" '. + {permalink: $permalink}')
    fi

    # Validate permalink format (must match ^[a-z0-9]+(-[a-z0-9]+)*$)
    if ! echo "$c_permalink" | grep -qE '^[a-z0-9]+(-[a-z0-9]+)*$'; then
      error "  Connector '$c_name' has invalid permalink format: $c_permalink (must match ^[a-z0-9]+(-[a-z0-9]+)*\$)"
      ((connector_error_count++))
      continue
    fi

    ALL_PERMALINKS="$ALL_PERMALINKS $c_permalink"

    CONNECTORS_JSON=$(echo "$CONNECTORS_JSON" | jq --argjson connector "$c" '. + [$connector]')
    success "  Processed connector: $c_name ($c_permalink)"
    ((connector_count++))
  done
done

# Check permalink uniqueness across ALL connectors
if [ -n "$ALL_PERMALINKS" ]; then
  dup_permalinks=$(echo "$ALL_PERMALINKS" | tr ' ' '\n' | sort | uniq -d)
  if [ -n "$dup_permalinks" ]; then
    for dup in $dup_permalinks; do
      error "Duplicate connector permalink: $dup"
    done
    ((connector_error_count++))
  fi
fi

echo ""
echo "================================"

if [ $connector_error_count -gt 0 ]; then
  error "Failed to process connector(s) with $connector_error_count error(s)"
  exit 1
fi

if [ $connector_count -gt 0 ]; then
  success "Successfully processed $connector_count connector(s)"
  CONNECTORS_REGISTRY_JSON=$(jq -n --argjson connectors "$CONNECTORS_JSON" '{connectors: $connectors}')
else
  warning "No connectors found to process"
  CONNECTORS_REGISTRY_JSON='{"connectors":[]}'
fi

# -----------------------------------------------------------------------------
# Write output files (both at once, after all validation passes)
# -----------------------------------------------------------------------------

if [ "$DRY_RUN" = true ]; then
  echo ""
  warning "DRY RUN MODE - No files will be written"
  echo ""
  echo "$REGISTRY_JSON" | jq .
  echo ""
  echo "$CONNECTORS_REGISTRY_JSON" | jq .
else
  echo "$REGISTRY_JSON" | jq . > "$OUTPUT_FILE"
  success "Written to $OUTPUT_FILE"
  echo "$CONNECTORS_REGISTRY_JSON" | jq . > "$CONNECTORS_OUTPUT_FILE"
  success "Written to $CONNECTORS_OUTPUT_FILE"
fi

echo ""
success "Build complete!"
