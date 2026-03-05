import { join } from 'path';
import { writeFileSync, readFileSync, unlinkSync, mkdirSync } from 'fs';
import { execa } from 'execa';
import type { WidgetEntry } from './types.js';
import { logWidget } from './ui.js';
import chalk from 'chalk';

const ROOT = process.cwd();

const killPort = async (port: number) => {
  try {
    const { stdout } = await execa('lsof', ['-ti', `:${port}`]);
    const pids = stdout.trim().split('\n').filter(Boolean);
    if (pids.length) await execa('kill', ['-9', ...pids]);
  } catch {}
};

const buildPreviewHtml = (widgetDir: string, tunnelUrl: string): string => {
  const pkg = JSON.parse(readFileSync(join(widgetDir, 'package.json'), 'utf-8'));
  const deps = { ...pkg.dependencies, ...pkg.devDependencies };
  const preamble = '@vitejs/plugin-react-swc' in deps
    ? `  <script type="module">
import { injectIntoGlobalHook } from "/@react-refresh";
injectIntoGlobalHook(window);
window.$RefreshReg$ = () => {};
window.$RefreshSig$ = () => (type) => type;
window.__vite_plugin_react_preamble_installed__ = true;
</script>`
    : '';

  const html = readFileSync(join(widgetDir, 'index.html'), 'utf-8');
  const rewritten = html.replace(/(href|src)="\/([^"]+)"/g, `$1="${tunnelUrl}/$2"`);
  return preamble ? rewritten.replace('</head>', `${preamble}\n  </head>`) : rewritten;
};

export const startWidgetServer = async (
  widget: WidgetEntry,
  port: number,
  colorIndex: number,
  tunnelUrl: string,
): Promise<() => void> => {
  const widgetDir = join(ROOT, 'widgets', widget.type);
  const publicDir = join(widgetDir, 'public');
  const previewPath = join(publicDir, 'index.html');

  await killPort(port);

  mkdirSync(publicDir, { recursive: true });
  writeFileSync(previewPath, buildPreviewHtml(widgetDir, tunnelUrl));

  const proc = execa('yarn', ['dev'], {
    cwd: widgetDir,
    env: { ...process.env, PORT: String(port) },
  });

  proc.stdout?.on('data', (chunk: Buffer) => {
    for (const line of chunk.toString().split('\n').filter(Boolean)) {
      logWidget(widget.type, colorIndex, line);
    }
  });

  proc.stderr?.on('data', (chunk: Buffer) => {
    for (const line of chunk.toString().split('\n').filter(Boolean)) {
      logWidget(widget.type, colorIndex, chalk.red(line));
    }
  });

  proc.catch(() => {});
  await new Promise<void>((resolve) => setTimeout(resolve, 1500));

  return () => {
    proc.kill();
    unlinkSync(previewPath);
  };
};
