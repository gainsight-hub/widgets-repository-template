# Pokemon Connector + Widget Design

## Summary

Add a `connectors_registry.json` at the repo root with a Pokemon API connector, and a `pokemon_widget` that fetches from it using the Widget SDK.

## Connector

File: `connectors_registry.json` (repo root, alongside `widget_registry.json`)

```json
{
  "connectors": [
    {
      "name": "Pokemon API",
      "permalink": "pokemon-api",
      "url": "https://pokeapi.co/api/v2/pokemon/pikachu",
      "method": "GET"
    }
  ]
}
```

No authentication needed (PokeAPI is public). No query parameters needed. The Pokemon identifier is a path segment, so the URL is fixed to Pikachu for this demo.

## Widget

Directory: `widgets/pokemon_widget/`

### `widget.json`

Minimal config — no user-configurable properties. Category: Demo. Version: 1.0.0.

### `dist/content.html`

Self-contained HTML fragment that:

1. Loads Widget SDK via CDN script tag
2. On load, calls `sdk.connectors.execute({ permalink: "pokemon-api", method: "GET" })`
3. Renders a Pokemon card with:
   - Sprite image (official artwork or default front sprite)
   - Name (capitalized)
   - Type badges (color-coded per type)
   - Base stats as labeled progress bars
4. Shows loading skeleton while fetching
5. Shows error message if connector call fails

No `<html>`, `<head>`, or `<body>` tags. All CSS and JS inlined.

## What is not in scope

- Build script changes (connector file is maintained manually)
- Multiple connectors
- Configurable Pokemon (path param limitation of PokeAPI)
- Authentication / secrets
