import { createRoot } from "react-dom/client";
import { App } from "./App";
import type { WidgetSDK } from "./types";

export async function init(sdk: WidgetSDK) {
  await sdk.whenReady();

  const root = createRoot(sdk.shadowRoot);
  root.render(<App sdk={sdk} />);
  sdk.on("destroy", () => root.unmount());
}
