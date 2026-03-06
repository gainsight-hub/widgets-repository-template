import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import type { Registry, WidgetEntry } from './types.js';

const ROOT = process.cwd();

export const readRegistry = (): Registry => {
  const raw = readFileSync(join(ROOT, 'widget_registry.json'), 'utf-8');
  return JSON.parse(raw) as Registry;
};

const readConnectorsRegistry = (): { connectors: unknown[] } | null => {
  const path = join(ROOT, 'connectors_registry.json');
  if (!existsSync(path)) return null;
  return JSON.parse(readFileSync(path, 'utf-8')) as { connectors: unknown[] };
};

export const isDevWidget = (widget: WidgetEntry): boolean =>
  existsSync(join(ROOT, 'widgets', widget.type, 'package.json'));

const readBuiltHtml = (widget: WidgetEntry): string =>
  readFileSync(join(ROOT, widget.source.path, widget.source.entry), 'utf-8');

const fetchDevHtml = async (widget: WidgetEntry, tunnelUrl: string): Promise<string> => {
  const response = await fetch(`${tunnelUrl}/content.html`);
  if (!response.ok) {
    throw new Error(`Failed to fetch dev HTML for ${widget.type}: ${response.status} ${response.statusText}`);
  }

  return response.text();
};

export const buildPreviewRegistry = async (
  tunnelMap: Map<string, string>,
  allWidgets: WidgetEntry[],
): Promise<object> => {
  const widgets = await Promise.all([...tunnelMap.entries()].map(async ([type, tunnelUrl]) => {
    const widget = allWidgets.find((w) => w.type === type)!;
    const { source, ...rest } = widget;
    const html = isDevWidget(widget) ? await fetchDevHtml(widget, tunnelUrl) : readBuiltHtml(widget);
    return {
      ...rest,
      content: {
        html,
        method: 'GET',
        requiresAuthentication: false,
        cacheStrategy: 'no-cache',
      },
    };
  }));
  const connectors = readConnectorsRegistry();
  if (connectors) return { widgets, connectors: connectors.connectors };
  return { widgets };
};
