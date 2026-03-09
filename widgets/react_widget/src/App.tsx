import { useState, useEffect } from "react";
import type { WidgetSDK, WidgetProps } from "./types";

const styles = {
  section: {
    padding: "2rem",
    fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
    borderRadius: "12px",
    background: "blue",
    color: "#ffffff",
    minHeight: "120px",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
  },
  title: {
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: 700,
    letterSpacing: "-0.025em",
  },
  description: {
    margin: "0.75rem 0 0",
    fontSize: "1rem",
    opacity: 0.85,
    lineHeight: 1.6,
  },
};

export function App({ sdk }: { sdk: WidgetSDK }) {
  const [props, setProps] = useState<WidgetProps>(sdk.getProps());

  useEffect(() => sdk.on("propsChanged", setProps), [sdk]);

  return (
    <section style={styles.section}>
      <h3 style={styles.title}>{props.title}</h3>
      {props.description && (
        <p style={styles.description}>{props.description}</p>
      )}
    </section>
  );
}
