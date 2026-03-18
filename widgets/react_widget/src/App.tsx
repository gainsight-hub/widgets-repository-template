import { useState, useEffect } from "react";
import type { WidgetSDK, WidgetProps } from "./types";

export function App({ sdk }: { sdk: WidgetSDK }) {
  const [props, setProps] = useState<WidgetProps>(sdk.getProps());

  console.log("---------------APP ----------------");

  useEffect(() => sdk.on("propsChanged", setProps), [sdk]);

  return (
    <section className="react-widget-section">
      <h1>eloo</h1>
      <h3 className="react-widget-title">{props.title}</h3>
      {props.description && (
        <p className="react-widget-description">{props.description}</p>
      )}
    </section>
  );
}
