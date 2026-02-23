import "./widget.css";
import { resolveLocale, getStrings } from "./translations";

export function App() {
  const locale = resolveLocale();
  const strings = getStrings(locale);

  return (
    <div className="lw-root">
      <div className="lw-card">
        <div className="lw-header">
          <div className="lw-icon">🌐</div>
          <h2 className="lw-title">{strings.title}</h2>
          <span className="lw-badge">{locale}</span>
        </div>
        <p className="lw-body">{strings.body}</p>
        <ol className="lw-steps">
          {[strings.step1, strings.step2, strings.step3].map((text, i) => (
            <li key={i} className="lw-step">
              <span className="lw-step-num">{i + 1}</span>
              <span className="lw-step-text">{text}</span>
            </li>
          ))}
        </ol>
        <a href="#" className="lw-cta">{strings.cta}</a>
        <div className="lw-footer">{strings.footer}</div>
      </div>
    </div>
  );
}
