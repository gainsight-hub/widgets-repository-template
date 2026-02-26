# Pokemon Connector + Widget Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add `connectors_registry.json` with a Pokemon API connector and a `pokemon_widget` that fetches from it using the Widget SDK.

**Architecture:** A static `connectors_registry.json` at the repo root defines the connector (no build step needed). The widget is a plain HTML fragment that loads the Widget SDK via CDN, calls the connector on mount, and renders a Pokemon card with sprite, type badges, and stat bars.

**Tech Stack:** Bash + jq (validation), Widget SDK UMD (`https://static.customer-hub.northpass.com/widget-sdk/latest/index.umd.js`), PokeAPI (`https://pokeapi.co/api/v2/pokemon/pikachu`), plain HTML/CSS/JS.

---

### Task 1: Create `connectors_registry.json`

**Files:**
- Create: `connectors_registry.json`

**Step 1: Create the file**

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

**Step 2: Validate JSON**

Run: `jq . connectors_registry.json`
Expected: pretty-printed JSON with no errors

**Step 3: Commit**

```bash
git add connectors_registry.json
git commit -m "feat: add Pokemon API connector registry

GE-242223"
```

---

### Task 2: Create widget scaffold

**Files:**
- Create: `widgets/pokemon_widget/widget.json`
- Create: `widgets/pokemon_widget/dist/content.html` (placeholder)

**Step 1: Create directories and `widget.json`**

```bash
mkdir -p widgets/pokemon_widget/dist
```

`widgets/pokemon_widget/widget.json`:

```json
{
  "version": "1.0.0",
  "title": "Pokemon Widget",
  "description": "Displays Pikachu data fetched via the Pokemon API connector",
  "category": "Demo",
  "source": {
    "path": "dist",
    "entry": "content.html"
  }
}
```

**Step 2: Create placeholder entry file**

`widgets/pokemon_widget/dist/content.html`:

```html
<p>Loading...</p>
```

**Step 3: Validate `widget.json`**

Run: `jq . widgets/pokemon_widget/widget.json`
Expected: pretty-printed JSON with no errors

**Step 4: Dry-run build to confirm widget is picked up**

Run: `./bin/build-registry.sh --dry-run`
Expected: output includes `Processing widget: pokemon_widget` and `SUCCESS: Processed: Pokemon Widget (v1.0.0)`

**Step 5: Commit**

```bash
git add widgets/pokemon_widget/widget.json widgets/pokemon_widget/dist/content.html
git commit -m "feat: scaffold pokemon_widget directory

GE-242223"
```

---

### Task 3: Implement `dist/content.html`

**Files:**
- Modify: `widgets/pokemon_widget/dist/content.html`

Replace the placeholder with the full widget. The PokeAPI response for `/pokemon/pikachu` includes:
- `name`: `"pikachu"`
- `sprites.other['official-artwork'].front_default`: hi-res artwork URL
- `sprites.front_default`: fallback sprite URL
- `types`: array of `{ type: { name } }` (e.g. `"electric"`)
- `stats`: array of `{ base_stat: number, stat: { name: string } }` (max possible stat is 255)

**Step 1: Write the full content.html**

```html
<script src="https://static.customer-hub.northpass.com/widget-sdk/latest/index.umd.js"></script>
<style>
  .pk-card {
    font-family: system-ui, sans-serif;
    max-width: 320px;
    margin: 0 auto;
    border-radius: 16px;
    background: #f8f9fa;
    box-shadow: 0 4px 20px rgba(0,0,0,0.12);
    overflow: hidden;
    text-align: center;
  }
  .pk-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 24px 16px 40px;
  }
  .pk-sprite {
    width: 140px;
    height: 140px;
    object-fit: contain;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
  }
  .pk-body {
    padding: 16px;
    margin-top: -20px;
  }
  .pk-name {
    font-size: 24px;
    font-weight: 700;
    text-transform: capitalize;
    color: #1a1a2e;
    margin: 0 0 8px;
  }
  .pk-types {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-bottom: 20px;
  }
  .pk-type {
    padding: 4px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    color: white;
    text-transform: capitalize;
  }
  .pk-stats { text-align: left; }
  .pk-stat {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }
  .pk-stat-name {
    font-size: 11px;
    color: #666;
    text-transform: capitalize;
    width: 100px;
    flex-shrink: 0;
  }
  .pk-stat-bar-bg {
    flex: 1;
    height: 8px;
    background: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
  }
  .pk-stat-bar {
    height: 100%;
    border-radius: 4px;
    background: #667eea;
  }
  .pk-stat-val {
    font-size: 12px;
    font-weight: 600;
    color: #333;
    width: 28px;
    text-align: right;
    flex-shrink: 0;
  }
  .pk-loading, .pk-error {
    font-family: system-ui, sans-serif;
    text-align: center;
    padding: 40px 16px;
    color: #666;
  }
  .pk-error { color: #e53e3e; }
</style>
<div id="pk-root">
  <div class="pk-loading">Loading...</div>
</div>
<script>
  (async () => {
    const root = document.getElementById('pk-root');
    const TYPE_COLORS = {
      normal: '#A8A878', fire: '#F08030', water: '#6890F0',
      electric: '#F8D030', grass: '#78C850', ice: '#98D8D8',
      fighting: '#C03028', poison: '#A040A0', ground: '#E0C068',
      flying: '#A890F0', psychic: '#F85888', bug: '#A8B820',
      rock: '#B8A038', ghost: '#705898', dragon: '#7038F8',
      dark: '#705848', steel: '#B8B8D0', fairy: '#EE99AC',
    };

    const render = (data) => {
      const sprite = data.sprites?.other?.['official-artwork']?.front_default
        ?? data.sprites?.front_default;
      const types = data.types.map(t => t.type.name);
      const stats = data.stats.map(s => ({
        name: s.stat.name.replace('-', ' '),
        value: s.base_stat,
      }));

      root.innerHTML = `
        <div class="pk-card">
          <div class="pk-header">
            ${sprite ? `<img class="pk-sprite" src="${sprite}" alt="${data.name}">` : ''}
          </div>
          <div class="pk-body">
            <h2 class="pk-name">${data.name}</h2>
            <div class="pk-types">
              ${types.map(t => `<span class="pk-type" style="background:${TYPE_COLORS[t] ?? '#777'}">${t}</span>`).join('')}
            </div>
            <div class="pk-stats">
              ${stats.map(s => `
                <div class="pk-stat">
                  <span class="pk-stat-name">${s.name}</span>
                  <div class="pk-stat-bar-bg">
                    <div class="pk-stat-bar" style="width:${Math.round(s.value / 255 * 100)}%"></div>
                  </div>
                  <span class="pk-stat-val">${s.value}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    };

    try {
      const sdk = new window.WidgetServiceSDK();
      const data = await sdk.connectors.execute({
        permalink: 'pokemon-api',
        method: 'GET',
      });
      render(data);
    } catch (err) {
      root.innerHTML = '<div class="pk-error">Failed to load Pokemon data.</div>';
    }
  })();
</script>
```

**Step 2: Commit**

```bash
git add widgets/pokemon_widget/dist/content.html
git commit -m "feat: implement pokemon_widget HTML with SDK connector call

GE-242223"
```

---

### Task 4: Build registry and validate

**Step 1: Run full build**

Run: `./bin/build-registry.sh`
Expected: `SUCCESS: Processed: Pokemon Widget (v1.0.0)` and `SUCCESS: Written to widget_registry.json`

**Step 2: Validate registry**

Run: `./bin/build-registry.sh --validate`
Expected: `SUCCESS: Valid JSON in widget_registry.json` and widget count includes the new widget

**Step 3: Confirm entry in registry**

Run: `jq '.widgets[] | select(.type == "pokemon_widget")' widget_registry.json`
Expected: JSON object with `type: "pokemon_widget"`, correct `source.path` and `source.entry`

**Step 4: Commit**

```bash
git add widget_registry.json
git commit -m "chore: rebuild registry with pokemon_widget

GE-242223"
```
