import chalk from "chalk";
import ora from "ora";
import { startTunnel } from "./tunnel.js";
import { startReactWidgetDev } from "./dev-servers.js";
import { verifyWidgetRenders, openInCursorBrowser } from "./verify.js";

const VITE_READY_DELAY_MS = 4000;
const TUNNEL_PROPAGATION_DELAY_MS = 8000;
const VERIFY_RETRIES = 6;
const VERIFY_RETRY_DELAY_MS = 4000;

async function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

async function verifyWithRetry(url: string): Promise<boolean> {
  for (let i = 0; i < VERIFY_RETRIES; i++) {
    try {
      const ok = await verifyWidgetRenders(url);
      if (ok) return true;
    } catch {
      await sleep(VERIFY_RETRY_DELAY_MS);
    }
  }
  return false;
}

async function main() {
  const devSpinner = ora("Starting react_widget dev server...").start();
  const viteProcess = startReactWidgetDev();
  await sleep(VITE_READY_DELAY_MS);
  devSpinner.succeed("Dev server running");

  const tunnelSpinner = ora("Starting tunnel...").start();
  let tunnelUrl: string;
  let tunnelProcess: Awaited<ReturnType<typeof startTunnel>>["process"];

  try {
    const tunnel = await startTunnel();
    tunnelUrl = tunnel.url;
    tunnelProcess = tunnel.process;
    tunnelSpinner.succeed(`Tunnel ready: ${chalk.cyan(tunnelUrl)}`);
  } catch (err) {
    tunnelSpinner.fail("Tunnel failed");
    viteProcess.kill();
    console.error(err instanceof Error ? err.message : err);
    process.exit(1);
  }

  await sleep(TUNNEL_PROPAGATION_DELAY_MS);

  const verifySpinner = ora("Verifying widget renders...").start();
  const verified = await verifyWithRetry(tunnelUrl);
  openInCursorBrowser(tunnelUrl);

  if (verified) {
    verifySpinner.succeed("Widget renders correctly");
  } else {
    verifySpinner.fail("Verification failed");
  }

  console.log(chalk.green("\nWidget: ") + chalk.cyan(tunnelUrl));
  console.log(chalk.dim("URL copied to clipboard. To view in Cursor: Cmd+Shift+P → \"Simple Browser: Show\" → Cmd+V → Enter\n"));

  const cleanup = () => {
    tunnelProcess.kill();
    viteProcess.kill();
    process.exit(0);
  };

  process.on("SIGINT", cleanup);
  process.on("SIGTERM", cleanup);

  viteProcess.catch(() => {});
  tunnelProcess.catch(() => {});
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
