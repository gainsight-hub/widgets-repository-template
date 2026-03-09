import { createRoot } from "react-dom/client";
import { App } from "./App";
import type { WidgetSDK, WidgetProps } from "./types";

const MOCK_PROPS: WidgetProps = {
  title: "React Widget",
  description: "A widget built with React and the Widget SDK.",
};

const mockSDK: WidgetSDK = {
  whenReady: () => Promise.resolve(),
  shadowRoot: document.getElementById("widget-root") as unknown as ShadowRoot,
  getProps: () => MOCK_PROPS,
  on: () => () => {},
  emit: () => {},
};

const sdk: WidgetSDK =
  (window as unknown as { WidgetServiceSDK?: WidgetSDK }).WidgetServiceSDK ??
  mockSDK;

sdk.whenReady().then(() => {
  const root = createRoot(sdk.shadowRoot as unknown as Element);
  root.render(<App sdk={sdk} />);
  sdk.on("destroy", () => root.unmount());
});
