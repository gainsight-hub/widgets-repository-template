import { init } from "./main";
import type { WidgetSDK, WidgetProps } from "./types";

const MOCK_PROPS: WidgetProps = {
  fallback_locale: "en",
  accent_color: "#6366f1",
  card_background: "#ffffff",
  text_color: "#1e293b",
  show_locale_badge: "yes",
};

const mockSDK: WidgetSDK = {
  whenReady: () => Promise.resolve(),
  shadowRoot: document.getElementById("widget-root")!,
  getProps: () => MOCK_PROPS,
  on: () => () => {},
  emit: () => {},
};

init(mockSDK);
