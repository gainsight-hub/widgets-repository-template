import { useState, useEffect } from "react";
import type { WidgetSDK, WidgetProps, Country } from "./types";
import { CountryCard } from "./CountryCard";

const TOP_COUNTRIES = 5;
const SKELETON_KEYS = Array.from({ length: TOP_COUNTRIES }, (_, i) => i);

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
            .slice(0, TOP_COUNTRIES)
            .map((c) => ({
              name: c.name.common,
              capital: c.capital?.[0] ?? "N/A",
              population: c.population,
              flag: c.flags.png,
              region: c.region,
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
      <p className="widget-framework-header">{props.title ?? ""}</p>
      {loading && (
        <div role="status" aria-label="Loading country data">
          <ul className="country-list">
            {SKELETON_KEYS.map((i) => (
              <li key={i} aria-hidden="true" className="country-item country-item--skeleton">
                <div className="country-flag country-flag--skeleton" />
                <div className="country-details">
                  <div className="country-skeleton-line country-skeleton-line--name" />
                  <div className="country-skeleton-line country-skeleton-line--meta" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {!loading && error && (
        <div role="alert" className="country-error">
          <p>{error}</p>
        </div>
      )}
      {!loading && !error && (
        <ul className="country-list">
          {countries.map((c) => (
            <CountryCard key={c.name} country={c} />
          ))}
        </ul>
      )}
    </section>
  );
}
