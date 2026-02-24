# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Official Documentation

**Always fetch the official docs before working on anything beyond basic widget scaffolding** (connectors, secrets, SDK, caching, publishing workflows):

- Human-readable: https://widget-service.insided.com/docs
- LLM-optimized: https://widget-service.insided.com/docs/llms-full.txt

For comprehensive AI agent guidelines and widget creation patterns, see `AGENTS.md`.

## Setup

Requires `jq`:
```bash
brew install jq          # macOS
sudo apt-get install jq  # Linux
```

## Commands

```bash
# Registry management
./bin/build-registry.sh             # Build widget_registry.json
./bin/build-registry.sh --dry-run   # Preview without writing
./bin/build-registry.sh --validate  # Validate existing registry

# Validate a widget's JSON syntax
jq . widgets/<widget_name>/widget.json

# React widget development (run inside widget directory)
yarn dev    # Vite dev server
yarn build  # Build to dist/
```

## Architecture

This is a **widget catalog system** — not a monorepo. Each widget is an independent directory under `widgets/`. A bash script (`bin/build-registry.sh`) aggregates all `widget.json` files into a single `widget_registry.json` manifest.

```
widgets-repository-template/
├── bin/build-registry.sh    # Aggregator script; defaults are at the top of this file
├── widget_registry.json     # Auto-generated; never edit manually
└── widgets/
    ├── WIDGET_SETUP.md
    └── <widget_name>/
        ├── widget.json      # Widget config (required)
        └── dist/
            └── content.html # Widget entry file (required HTML fragment)
```

The build script:
1. Scans `widgets/` and deep-merges each `widget.json` with defaults
2. Resolves relative paths (widget-dir-relative → repo-root-relative)
3. Validates required fields and mutual exclusivity (`imageSrc` XOR `imageName`)
4. Writes `widget_registry.json`

## Widget Types

**Simple HTML** (`widgets/demo_widget/`) — plain HTML/CSS/JS, no build step.

**Configurable HTML** (`widgets/card_grid/`) — uses `{{ variable_name }}` template variables injected from `configuration.properties`.

**React/Vite** (`widgets/react_hello_world/`) — uses `vite-plugin-singlefile` plus a custom plugin to produce a single HTML fragment in `dist/content.html`. React/React-DOM are externalized to CDN via import map.

## Key Rules

- `widget_registry.json` must never be edited manually.
- The widget `type` is derived from the directory name (use lowercase underscores).
- `dist/content.html` must be a self-contained **HTML fragment**: no `<html>`, `<head>`, or `<body>` tags; all CSS/JS inlined; no relative file references.
- `configuration.properties` must be an **array** (not an object).
- Use only one of `imageSrc` or `imageName` per widget (mutually exclusive).
- Bump `version` (semver) on any widget change.
- Pushing to the watched GitHub branch auto-publishes; `widget_registry.json` must be committed.
