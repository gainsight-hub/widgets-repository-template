import { init } from "./main";
import type { WidgetSDK } from "./types";

const mockSDK: WidgetSDK = {
  whenReady: () => Promise.resolve(),
  shadowRoot: document.getElementById("widget-root")! as unknown as ShadowRoot,
  on: () => () => {},
};

init(mockSDK);
