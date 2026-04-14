import { useState, useEffect } from "react";
import type { WidgetSDK, WidgetProps, Country } from "./types";

export function App({ sdk }: { sdk: WidgetSDK }) {
  const [props, setProps] = useState<WidgetProps>(sdk.getProps());
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => sdk.on("propsChanged", setProps), [sdk]);

  useEffect(() => {
    let cancelled = false;
    new window.WidgetServiceSDK().connectors
      .execute({ permalink: "rest-countries", method: "GET" })
      .then((raw) => {
        if (cancelled) return;
        setCountries(
          [...raw]
            .sort((a, b) => b.population - a.population)
            .slice(0, 5)
            .map((c) => ({
              name: c.name.common,
              capital: c.capital?.[0] ?? "N/A",
              population: c.population,
              flag: c.flags.png,
            }))
        );
        setLoading(false);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : "Failed to load");
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="react-widget-section">
      <h3 className="react-widget-title">{props.title}</h3>
      {loading && <p className="country-status">Loading…</p>}
      {error && <p className="country-status country-error">{error}</p>}
      {!loading && !error && (
        <ul className="country-list">
          {countries.map((c) => (
            <li key={c.name} className="country-item">
              <img
                src={c.flag}
                alt=""
                className="country-flag"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className="country-name">{c.name}</span>
              <span className="country-capital">{c.capital}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
