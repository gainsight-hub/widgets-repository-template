import { init } from "./main";
import type { WidgetProps } from "./types";

const MOCK_PROPS: WidgetProps = {
  title: "Preact Widget",
  description: "A widget built with Preact and esbuild.",
};

init({
  whenReady: () => Promise.resolve(),
  shadowRoot: document.getElementById("widget-root") as unknown as ShadowRoot,
  getProps: () => MOCK_PROPS,
  on: () => () => {},
  emit: () => {},
});
