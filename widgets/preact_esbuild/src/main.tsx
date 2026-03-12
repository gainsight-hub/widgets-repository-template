import { render } from "preact";
import { App } from "./App";
import type { WidgetSDK } from "./types";

export async function init(sdk: WidgetSDK) {
  await sdk.whenReady();
  const container = document.createElement("div");
  (sdk.shadowRoot as unknown as Element).appendChild(container);
  render(<App sdk={sdk} />, container);
  sdk.on("destroy", () => render(null, container));
}
