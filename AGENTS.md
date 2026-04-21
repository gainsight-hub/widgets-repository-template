# AGENTS.md

## Project overview

This is a **starter template**. A customer clones it, adds their own widgets/connectors/scripts/stylesheets under `widgets/`, `scripts/`, and `stylesheets/`, and connects the repo to the widget-service platform. The sample `countries-*` widgets and the `analytics` / `theme` assets ship as reference; they can be kept as references or removed once the customer's own widgets exist.

The build script merges the per-widget source files into two root-level registry files the platform consumes:

- `widget_registry.json` — widgets, scripts, stylesheets
- `connectors_registry.json` — connectors

Both are generated. Do not hand-edit them.

## Platform documentation

Before writing or modifying any widget, connector, script, or stylesheet, fetch the current platform docs. This repo documents only the local build tooling; the platform's schemas, SDK, and rules live online.

- LLM-optimized full text (start here): https://developer-portal.gainsight.com/docs/llms-full.txt
- Human docs: https://developer-portal.gainsight.com/docs

Topics that are intentionally **not** covered in this repo and must be read online: `widget.json` schema, `content.html` rules, Shadow DOM behavior, the Widget SDK (`sdk.getProps()`, `sdk.on('propsChanged')`, `sdk.$()`, `init(sdk)`, the canonical SDK script URL), configuration property types, connector authentication types, Jinja2 template variables, CSP restrictions, file and size limits, error codes, and the publishing pipeline. Do not answer from training data.

## Setup

- Install `jq` (required by the build script)
  - macOS: `brew install jq`
  - Linux: `sudo apt-get install jq` or `sudo yum install jq`

## Common commands

- Build registries: `./bin/build-registry.sh`
- Dry run (no file write): `./bin/build-registry.sh --dry-run`
- Validate generated registries: `./bin/build-registry.sh --validate`
- Validate a single source file: `jq . widgets/<name>/widget.json`

## Repository layout

```
bin/build-registry.sh         # Build tool
widget_registry.json          # Generated — do not edit
connectors_registry.json      # Generated — do not edit
widgets/<name>/
  widget.json                 # Widget config (schema: online docs)
  connectors.json             # Optional — merged into connectors_registry.json
  dist/content.html           # Entry file (convention: source.path = "dist")
scripts/<name>/
  script.json                 # Metadata
  script.js                   # Default file name; override with contentFile
stylesheets/<name>/
  stylesheet.json             # Metadata
  style.css                   # Default file name; override with contentFile
```

Per-widget `connectors.json` and per-asset `script.json` / `stylesheet.json` are local build-script conventions. The platform itself reads only the two generated root-level registries.

## Sample widgets included with the template

The template ships with working examples. Treat them as reference or adapt them; delete the ones that are not useful for the project.

- `widgets/countries-html/` — plain HTML
- `widgets/countries-vanilla/` — vanilla JS build
- `widgets/countries-react/` — React + Vite, includes `connectors.json`
- `widgets/countries-angular/` — Angular build
- `widgets/countries-vue/` — Vue build
- `scripts/analytics/` — global script
- `stylesheets/theme/` — global stylesheet

Fetch the online docs before copying one of these as a starting point — they are the authoritative reference for current platform behavior.

## Code style

- Keep `widget.json` minimal. Fields the platform defaults (for example `version`, `containers`, `widgetsLibrary`, `settings.*`, `content.method`) can be omitted; set them only when overriding. The build script does not fill defaults — the service does.
- Use `dist/` as `source.path` so only the built directory is shipped.
- Widget directory names become the registry `type`. Use lowercase with hyphens or underscores.
- `widget.json` must declare exactly one of `source` or `content`.
- At most one of `imageSrc` or `imageName` may be set.

## Validation performed locally

`./bin/build-registry.sh` only checks what is needed to produce a well-formed registry. It does not re-implement platform validation. Locally enforced rules:

- Valid JSON in all `widget.json` / `connectors.json` / `script.json` / `stylesheet.json` files.
- `source.path` and `imageSrc` contain no `..` and do not start with `/`.
- For `source` widgets, the file at `source.path`/`source.entry` exists on disk.
- For relative `imageSrc`, the thumbnail exists and is ≤ 512 KB.
- Connector `method` (if present) is one of `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `OPTIONS`, `HEAD`.
- Connector `permalink` (if present) matches `^[a-z0-9]+(-[a-z0-9]+)*$`; otherwise auto-generated from `name`.
- Connector permalinks are unique across the whole repo.

Everything else is the platform's responsibility — consult the online docs.

## Commit workflow

1. Edit source files under `widgets/`, `scripts/`, or `stylesheets/`.
2. Run `./bin/build-registry.sh` to regenerate the root registries.
3. Commit both the source files and the regenerated `widget_registry.json` / `connectors_registry.json` in the same commit.

## Nested AGENTS.md

A widget directory may contain its own `AGENTS.md` for framework-specific conventions (for example a React or Angular build with its own lint/test commands). The closest `AGENTS.md` to the file being edited takes precedence.
