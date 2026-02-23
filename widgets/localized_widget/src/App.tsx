import { useWidgetProps, useLocale } from "./hooks";
import type { WidgetSDK, Locale } from "./types";

export function App({ sdk }: { sdk: WidgetSDK }) {
  const props = useWidgetProps(sdk);

  const fallback = (props.fallback_locale as Locale) || "en";
  const accentColor = props.accent_color || "#6366f1";
  const cardBackground = props.card_background || "#ffffff";
  const textColor = props.text_color || "#1e293b";
  const showBadge = props.show_locale_badge !== "no";

  const { locale, strings } = useLocale(fallback);

  const steps = [strings.step1, strings.step2, strings.step3];

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif", padding: 24, color: textColor }}>
      <div style={{ background: cardBackground, borderRadius: 12, boxShadow: "0 1px 3px rgba(0,0,0,.08), 0 4px 14px rgba(0,0,0,.04)", padding: 32, maxWidth: 640 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: accentColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
            🌐
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0, lineHeight: 1.3 }}>
            {strings.title}
          </h2>
          {showBadge && (
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", background: accentColor, color: "#fff", padding: "3px 8px", borderRadius: 6, marginLeft: "auto", whiteSpace: "nowrap" }}>
              {locale}
            </span>
          )}
        </div>

        <p style={{ fontSize: 15, lineHeight: 1.65, marginBottom: 24, opacity: 0.85, marginTop: 0 }}>
          {strings.body}
        </p>

        <ol style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 12 }}>
          {steps.map((text, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{ width: 28, height: 28, borderRadius: "50%", background: accentColor, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>
                {i + 1}
              </span>
              <span style={{ fontSize: 15, lineHeight: 1.55, paddingTop: 3 }}>{text}</span>
            </li>
          ))}
        </ol>

        <a
          href="#"
          style={{ display: "inline-flex", alignItems: "center", gap: 6, background: accentColor, color: "#fff", fontSize: 14, fontWeight: 600, padding: "10px 20px", borderRadius: 8, border: "none", cursor: "pointer", textDecoration: "none" }}
        >
          {strings.cta}
        </a>

        <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(0,0,0,.06)", fontSize: 12, opacity: 0.5 }}>
          {strings.footer}
        </div>
      </div>
    </div>
  );
}
