import { useState, useEffect } from "preact/hooks";
import type { WidgetSDK, WidgetProps } from "./types";

export function App({ sdk }: { sdk: WidgetSDK }) {
  const [config, setConfig] = useState<WidgetProps>(sdk.getProps());

  useEffect(() => sdk.on("propsChanged", setConfig), [sdk]);

  return (
    <section class="preact-widget-section">
      <h3 class="preact-widget-title">{config.title}</h3>
      {config.description && (
        <p class="preact-widget-description">{config.description}</p>
      )}
    </section>
  );
}
