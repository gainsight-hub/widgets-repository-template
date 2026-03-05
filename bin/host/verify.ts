import { chromium } from "playwright";
import { execa } from "execa";

const REACT_SECTION_SELECTOR = ".react-widget-section";
const REACT_TITLE_SELECTOR = ".react-widget-title";
const TIMEOUT_MS = 20000;

export async function verifyWidgetRenders(url: string): Promise<boolean> {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: TIMEOUT_MS });
    await page.waitForSelector(REACT_SECTION_SELECTOR, { timeout: TIMEOUT_MS });
    const title = await page.locator(REACT_TITLE_SELECTOR).textContent();
    return title?.includes("React Widget") ?? false;
  } finally {
    await browser.close();
  }
}

export async function openInCursorBrowser(url: string): Promise<void> {
  const encoded = encodeURIComponent(url);
  const vscodeUri = `vscode://vscode.simple-browser/api/open?url=${encoded}`;
  await execa("open", ["-a", "Cursor", vscodeUri], { reject: false });
  await execa("pbcopy", [], { input: url, reject: false });
}
