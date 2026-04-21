# Connector Setup

> **Platform rules live online, not here.** This file covers only the local build tooling in this repository. For the connector schema, authentication types, Jinja2 template variables, response transformation, SDK usage, and security rules — always consult the authoritative docs:
>
> - **LLM-optimized full text**: https://developer-portal.gainsight.com/docs/llms-full.txt
> - **Human-readable**: https://developer-portal.gainsight.com/docs

---

## What this repo does

Each widget may optionally include a `connectors.json` file alongside its `widget.json`:

```
widgets/<widget_name>/
├── widget.json
├── connectors.json      # Optional — connector definitions for this widget
└── dist/
    └── content.html
```

`bin/build-registry.sh` scans every widget directory for `connectors.json`, validates each entry, and merges all connectors into a single `connectors_registry.json` at the repository root.

> **Note:** The per-widget split is a local build-script convention for organizing source. The platform itself reads only the generated root-level `connectors_registry.json`. Either layout works upstream; this repo uses the per-widget layout so connector definitions sit next to the widget code that calls them.

## Prerequisites

- `jq` installed
  - macOS: `brew install jq`
  - Linux: `sudo apt-get install jq` or `sudo yum install jq`

## Build commands

```bash
./bin/build-registry.sh            # Regenerate connectors_registry.json (and widget_registry.json)
./bin/build-registry.sh --dry-run  # Preview without writing
./bin/build-registry.sh --validate # Validate the already-generated registry files
```

## Creating / modifying a connector (local-tooling steps only)

1. Create or edit `widgets/<name>/connectors.json`.
   - **Fetch the online docs first** for the current connector schema: authentication types, required/optional fields, supported algorithms, template variables, filters, and response transformation.
2. Run `./bin/build-registry.sh` to validate and regenerate the root registry.
3. Call the connector from widget code using the Widget SDK. **The SDK API (including the canonical script URL, `WidgetServiceSDK` constructor, and `connectors.execute()` options) is documented online** — cross-check with the online docs rather than assuming the shape.
4. Commit the per-widget `connectors.json` and the regenerated `connectors_registry.json`.

## Local-only validation performed by `bin/build-registry.sh`

The build script does **not** re-implement the platform's validation. It checks only what is needed to produce a well-formed registry:

- `connectors.json` is valid JSON and has a top-level `connectors` array.
- Each connector has a non-empty `name` (≤ 255 chars) and non-empty `url`.
- `method`, if present, is one of `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `OPTIONS`, `HEAD`.
- `permalink`, if present, matches `^[a-z0-9]+(-[a-z0-9]+)*$`. If omitted, the build script auto-generates one from `name`.
- Permalinks are unique across **all** connectors in the repository, not just within a single widget.

Everything else — auth field names, template variable semantics, supported algorithms, request/response transformation behavior, rate limits, secrets handling — is enforced by the platform and documented online.

## Sample

- `widgets/countries-react/connectors.json` — a working connector that calls the public REST Countries API. Adapt it or delete it once the project has its own connectors.

## Troubleshooting

### Build fails with "missing top-level connectors array"
The file must be `{ "connectors": [ ... ] }`, even for a single connector.

### Build fails with "invalid permalink format"
Lowercase letters, numbers, and single dashes only; no leading/trailing dashes; no consecutive dashes.

### Build fails with "Duplicate connector permalink"
Permalinks must be unique repo-wide. Rename one of the conflicting entries.

### Connector call fails at runtime (wrong auth, bad template, missing secret, upstream error, etc.)
**Fetch the online docs** — the authentication types, `get_secret()` behavior, Jinja2 functions/filters, and error responses are all documented there.
