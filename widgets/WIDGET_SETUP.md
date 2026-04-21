# Widget Setup

> **Platform rules live online, not here.** This file covers only the local build tooling in this repository. For the `widget.json` schema, `content.html` rules, Shadow DOM behavior, the Widget SDK, configuration properties, template/variable handling, file limits, CSP, and publishing — always consult the authoritative docs:
>
> - **LLM-optimized full text**: https://developer-portal.gainsight.com/docs/llms-full.txt
> - **Human-readable**: https://developer-portal.gainsight.com/docs

---

## What this repo does

This is a starter template. Each widget lives in its own directory under `widgets/<widget_name>/` and declares itself in a `widget.json` file. The build script scans all widgets, validates the per-widget files, and emits a single `widget_registry.json` at the repo root that the widget-service platform consumes.

```
widgets/<widget_name>/
├── widget.json          # Widget config — schema defined online
├── connectors.json      # Optional — see CONNECTOR_SETUP.md
└── dist/
    └── content.html     # Entry file; source.path points at dist/ so only that is shipped
```

`dist/content.html` is a **repo convention**, not a platform requirement. The platform reads whatever `source.path` / `source.entry` in `widget.json` point to. Using `dist/` keeps source code out of what the service pulls.

## Prerequisites

- `jq` installed
  - macOS: `brew install jq`
  - Linux: `sudo apt-get install jq` or `sudo yum install jq`

## Build commands

```bash
./bin/build-registry.sh            # Generate widget_registry.json + connectors_registry.json
./bin/build-registry.sh --dry-run  # Preview without writing
./bin/build-registry.sh --validate # Validate the already-generated registry files
./bin/build-registry.sh --help
```

## Creating a new widget (local-tooling steps only)

1. `mkdir -p widgets/<name>/dist`
2. Write `widgets/<name>/widget.json` — **fetch the online docs first for the current schema**.
3. Write `widgets/<name>/dist/content.html` — **fetch the online docs first** for current content rules (HTML fragment, Shadow DOM, SDK usage, CSP, asset handling).
4. Optionally add `widgets/<name>/connectors.json` — see [CONNECTOR_SETUP.md](CONNECTOR_SETUP.md).
5. `./bin/build-registry.sh` — validates and regenerates the root registries.
6. Commit the source files **and** the regenerated `widget_registry.json` / `connectors_registry.json`.

## Local-only validation performed by `bin/build-registry.sh`

The build script does **not** duplicate the platform's validation. It only enforces what is needed to produce a well-formed registry:

- `widget.json` is valid JSON.
- Exactly one of `source` or `content` is present.
- For `source` widgets, the entry file resolved from `source.path` / `source.entry` exists on disk.
- `source.path` and `imageSrc` do not contain `..` and do not start with `/`.
- At most one of `imageSrc` / `imageName` is set.
- For relative `imageSrc`, the thumbnail file exists and is **≤ 512 KB**.
- Permalink uniqueness and format for any connectors (see CONNECTOR_SETUP.md).

Everything else — required fields, type regex, value limits, supported configuration types, etc. — is the platform's responsibility and is documented online.

## Defaults applied by the platform

The build script does not fill in defaults. The widget-service platform applies defaults for fields omitted from `widget.json` (for example `version`, `containers`, `widgetsLibrary`, `settings.*`, `content.method`). Keep `widget.json` minimal and rely on platform defaults; set a field only when overriding the default. Consult the online docs for the current default values.

## Sample widgets shipped with the template

The template ships with ready-made examples. Adapt them or delete the ones that are not useful for the project:

- `widgets/countries-html/` — plain HTML
- `widgets/countries-vanilla/` — vanilla JS build
- `widgets/countries-react/` — React + Vite, includes connectors
- `widgets/countries-angular/` — Angular build
- `widgets/countries-vue/` — Vue build

The online docs are the authoritative source for platform behavior; defer to them over the samples.

## Troubleshooting

### `jq: command not found`
Install `jq` (see Prerequisites above).

### Widget missing from `widget_registry.json`
1. `widget.json` exists and is valid JSON — check with `jq . widgets/<name>/widget.json`.
2. The entry file exists at `source.path`/`source.entry`.
3. Run `./bin/build-registry.sh --dry-run` for detailed error output.

### Any platform-level error (publishing failures, runtime errors, rejected content)
**Fetch the online docs** — the error codes, security scanning rules, CSP policies, and publishing pipeline are all documented there.
