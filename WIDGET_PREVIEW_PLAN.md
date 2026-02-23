# Widget Dev Preview Plan

## Problem

Developers need to preview widgets in a live CC instance (for design token and style fidelity), but the widget-service sits between the developer and CC — you can't just point CC to localhost.

## Architecture

```
Production:  CC (SSR + Shadow DOM) → widget-service (render_widget_view) → CDN/S3
Dev preview: CC (SSR + Shadow DOM) → widget-service (render_widget_view) → Cloudflare Tunnel → developer's machine
```

Same pipeline, same template injection, same SDK, same connectors — just a different content source.

## How CC Renders Widgets

1. CC fetches the widget registry from widget-service Admin API
2. CC server-side fetches widget HTML from widget-service's `render_widget_view` endpoint
3. CC embeds the HTML inline into the page using SSR with declarative Shadow DOM (`<template shadowrootmode="open">`)
4. The browser only fetches subresources (JS, CSS, images) from widget-service's render endpoint

All content flows through `render_widget_view` — both HTML and subresources. This is the single interception point.

## How `render_widget_view` Works Today

1. Receives `widget_path` from URL routing (e.g., `w/<hash>/index.html`)
2. Calls `get_cdn_storage().read(widget_path)` to fetch from S3
3. If HTML → runs Jinja2 template injection via `CustomizationService`
4. If static file → serves raw bytes with correct MIME type
5. Attaches security headers (CSP, X-Frame-Options, etc.)

## Existing Infrastructure to Leverage

Widget-service already has a **Developer Mode** module:

- Per-tenant, toggled via API
- `POST /api/admin/v1/developer_mode/enable` → returns a `DeveloperApiKey`
- `POST /api/admin/v1/developer_mode/disable`
- Auth via `X-Developer-Mode-Api-Key` header
- Forbidden in production; reverse proxies strip dev headers
- Already used for stubbing user identity in testing

## Changes Required

### Widget-service (small)

1. **New endpoint**: `POST /api/admin/v1/developer_mode/widget_override`
   - Auth: existing `X-Developer-Mode-Api-Key` header
   - Body: `{ "widgetType": "card_grid", "devUrl": "https://<tunnel>.trycloudflare.com", "ttl": "4h" }`
   - Stores override in memory (or Redis) with TTL auto-expiry

2. **New endpoint**: `DELETE /api/admin/v1/developer_mode/widget_override`
   - Removes the override, falls back to CDN

3. **Intercept in `render_widget_view`**: right before `cdn_storage.read(widget_path)`, check if the current tenant has an active dev override for this widget. If yes, HTTP fetch from `devUrl` instead of reading from CDN. The rest of the pipeline (Jinja2, CSP headers) runs unchanged.

### CLI tool (new, lives in this repo)

A `bin/preview` script (or `yarn preview`) that automates the full workflow:

1. Starts the local dev server (Vite for React widgets, simple HTTP server for plain HTML widgets) serving the widget's `dist/` directory
2. Starts a Cloudflare Tunnel pointing to the local dev server → obtains public HTTPS URL
3. Calls `POST /api/admin/v1/developer_mode/widget_override` with the tunnel URL, authenticated via `X-Developer-Mode-Api-Key`
4. Prints the CC preview URL
5. On `Ctrl+C`: calls `DELETE /api/admin/v1/developer_mode/widget_override`, kills tunnel + dev server

## Developer Workflow

### One-time setup

- Install `cloudflared` (`brew install cloudflared`)
- Enable developer mode on the preview tenant → save the API key locally

### Daily workflow

```bash
yarn preview --widget card_grid
```

Then open the preview CC community. The widget loads live from the developer's machine. Edit code → refresh CC page → see changes. No git, no commits, no waiting for pipelines.

`Ctrl+C` to tear everything down.

## What Lives Where

| Concern | Owner |
|---|---|
| Start/stop dev server | CLI |
| Start/stop tunnel | CLI |
| Register/remove dev override | CLI → widget-service API |
| Serve content from tunnel instead of CDN | widget-service (`render_widget_view`) |
| Template injection, SDK, connectors | widget-service (unchanged) |
| Rendering the widget in Shadow DOM | CC (unchanged) |

## Why This Approach

- **Zero new auth** — piggybacks on existing Developer Mode + DeveloperApiKey
- **Full pipeline fidelity** — Jinja2 injection, CSP, Shadow DOM, SDK, connectors all work
- **No git interaction** during development
- **Minimal widget-service change** — one conditional in `render_widget_view`, two endpoints under existing `developer_mode` module
- **Production-safe** — Developer Mode is already blocked in production environments
- **Auto-cleanup** — TTL on overrides prevents stale dev URLs from persisting

## Prerequisites

- A preview/dev CC community connected to widget-service
- Developer Mode enabled on that tenant
- `cloudflared` installed on developer's machine
