# Widgets Repository Template

A starter template for building widgets, connectors, global scripts, and global stylesheets for the widget-service platform. Clone this repo, add your widgets under `widgets/<name>/`, run the build script, and the platform picks up the two generated registry files on push.

## What's in the box

The template ships with working sample widgets and assets. Keep them as references, adapt them as a starting point for your own, or delete the ones you do not need.

- `widgets/countries-html/` — plain HTML widget
- `widgets/countries-vanilla/` — vanilla JS build
- `widgets/countries-react/` — React + Vite, with connectors
- `widgets/countries-angular/` — Angular build
- `widgets/countries-vue/` — Vue build
- `scripts/analytics/` — example global script
- `stylesheets/theme/` — example global stylesheet

## Prerequisites

- `jq` for JSON processing
  - macOS: `brew install jq`
  - Linux: `sudo apt-get install jq` or `sudo yum install jq`

## Quick start

1. **Clone the template** and (optionally) remove any samples you don't need.
2. **Create your widget** under `widgets/<name>/` with a `widget.json` and an entry file (convention: `dist/content.html`). Use the samples as a shape reference.
3. **Build the registries:**
   ```bash
   ./bin/build-registry.sh
   ```
4. **Commit** the source files together with the regenerated `widget_registry.json` and `connectors_registry.json`.
5. **Connect the repo to the widget-service platform** following the official docs linked below; the platform picks up the registries on each push.

## Platform documentation

This repo covers the local build tooling. The widget-service platform itself — the `widget.json` schema, the Widget SDK, connector authentication, the publishing pipeline, and everything else you need to actually build a widget — is documented at:

**https://developer-portal.gainsight.com/docs**

## Repository layout

- `bin/build-registry.sh` — builds the two registry files from the sources below
- `widget_registry.json` — **generated** widget registry (do not hand-edit)
- `connectors_registry.json` — **generated** connector registry (do not hand-edit)
- `widgets/<name>/` — one directory per widget: `widget.json`, optional `connectors.json`, and an entry file (`dist/content.html` by convention)
- `scripts/<name>/` — global script: `script.json` + `script.js`
- `stylesheets/<name>/` — global stylesheet: `stylesheet.json` + `style.css`

## Build script

```bash
./bin/build-registry.sh            # Build the registries
./bin/build-registry.sh --dry-run  # Preview without writing
./bin/build-registry.sh --validate # Validate the already-generated registry files
./bin/build-registry.sh --help
```

## For AI coding agents

If you use an AI coding agent (Claude Code, Cursor, etc.) to work on this repo, the agent-specific instructions live in [AGENTS.md](AGENTS.md).
