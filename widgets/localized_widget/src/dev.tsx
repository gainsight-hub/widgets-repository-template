import { init } from "./main";
import type { WidgetSDK } from "./types";

init({
  whenReady: () => Promise.resolve(),
  shadowRoot: document.getElementById("widget-root")! as unknown as ShadowRoot,
  on: () => () => {},
});
