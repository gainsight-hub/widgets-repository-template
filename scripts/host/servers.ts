import { join } from 'path';
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

export const startWidgetServer = async (
  widget: WidgetEntry,
  port: number,
  colorIndex: number,
): Promise<() => void> => {
  const widgetDir = join(ROOT, 'widgets', widget.type);

  await killPort(port);

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

  return () => proc.kill();
};
