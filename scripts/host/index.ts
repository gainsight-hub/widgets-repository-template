import { outro, multiselect, spinner, text, isCancel } from '@clack/prompts';
import chalk from 'chalk';
import { readRegistry, buildPreviewRegistry, isDevWidget } from './registry.js';
import { startWidgetServer } from './servers.js';
import { createTunnel, closeTunnels } from './tunnel.js';
import { postRegistry, deleteRegistry } from './api.js';
import { printHeader, printLiveStatus } from './ui.js';
import type { WidgetEntry } from './types.js';

const BASE_PORT = 3000;

const run = async () => {
  printHeader();

  const registry = readRegistry();
  const allWidgets = registry.widgets;
  const devWidgets = allWidgets.filter(isDevWidget);

  const selectedTypes = await multiselect({
    message: 'Which widgets do you want to preview?',
    options: devWidgets.map((w) => ({ value: w.type, label: `${w.title} (${w.type})` })),
  });

  if (isCancel(selectedTypes)) process.exit(0);

  let activeWidgets = devWidgets.filter((w) => (selectedTypes as string[]).includes(w.type));

  const colorMap = new Map<string, number>();
  allWidgets.forEach((w, i) => colorMap.set(w.type, i));

  let authtoken = process.env.NGROK_AUTHTOKEN;
  if (!authtoken) {
    const input = await text({
      message: 'Enter your ngrok authtoken (get one at ngrok.com/signup):',
      placeholder: '2abc...',
    });
    if (isCancel(input)) process.exit(0);
    authtoken = input as string;
  }

  const stopFns: (() => void)[] = [];
  const tunnelMap = new Map<string, string>();

  let port = BASE_PORT;
  for (const widget of activeWidgets) {
    const s = spinner();
    s.start(`Creating tunnel for ${widget.type}...`);
    const url = await createTunnel(port, authtoken);
    tunnelMap.set(widget.type, url);

    s.message(`Starting ${widget.type}...`);
    const stop = await startWidgetServer(widget, port, colorMap.get(widget.type) ?? 0, url);
    stopFns.push(stop);
    s.stop(chalk.green('✓') + ` ${widget.type} → ${url}`);

    port++;
  }

  const s = spinner();
  s.start('Registering with widget service...');
  await postRegistry(await buildPreviewRegistry(tunnelMap, allWidgets));
  s.stop(chalk.green('✓') + ` Registry posted (${activeWidgets.length} widgets active)`);

  const showStatus = (widgets: WidgetEntry[]) => {
    printLiveStatus(
      widgets.map((w) => ({
        type: w.type,
        endpoint: `${tunnelMap.get(w.type)}/${w.source.entry}`,
        colorIndex: colorMap.get(w.type) ?? 0,
      })),
    );
  };

  showStatus(activeWidgets);

  const cleanup = async () => {
    process.stdin.setRawMode(false);
    const cs = spinner();
    cs.start('Removing overrides...');
    await deleteRegistry();
    stopFns.forEach((stop) => stop());
    await closeTunnels();
    cs.stop('Done');
    outro('Goodbye!');
    process.exit(0);
  };

  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.setEncoding('utf-8');

  process.stdin.on('data', async (key: string) => {
    if (key === 'q' || key === '\x03') {
      await cleanup();
      return;
    }

    if (key === 't') {
      process.stdin.setRawMode(false);

      const newSelected = await multiselect({
        message: 'Which widgets do you want to preview?',
        options: devWidgets.map((w) => ({ value: w.type, label: `${w.title} (${w.type})` })),
        initialValues: activeWidgets.map((w) => w.type),
      });

      if (!isCancel(newSelected)) {
        activeWidgets = devWidgets.filter((w) => (newSelected as string[]).includes(w.type));
        for (const w of activeWidgets) {
          if (!tunnelMap.has(w.type)) {
            const ts = spinner();
            ts.start(`Creating tunnel for ${w.type}...`);
            const url = await createTunnel(port, authtoken as string);
            tunnelMap.set(w.type, url);
            ts.message(`Starting ${w.type}...`);
            const stop = await startWidgetServer(w, port, colorMap.get(w.type) ?? 0, url);
            stopFns.push(stop);
            ts.stop(chalk.green('✓') + ` ${w.type} → ${url}`);
            port++;
          }
        }
        await postRegistry(await buildPreviewRegistry(tunnelMap, allWidgets));
        console.log(chalk.green(`✓ Registry updated (${activeWidgets.length} widgets active)`));
        showStatus(activeWidgets);
      }

      process.stdin.setRawMode(true);
    }
  });

  process.on('SIGTERM', cleanup);
};

run().catch((err) => {
  console.error(chalk.red('Error:'), err);
  process.exit(1);
});
