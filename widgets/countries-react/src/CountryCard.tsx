import type { CountryCardProps } from "./types";

const onFlagError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.opacity = "0";
};

export const CountryCard = ({ country }: CountryCardProps) => (
  <li className="country-item">
    <img
      className="country-flag"
      src={country.flag}
      alt={`Flag of ${country.name}`}
      onError={onFlagError}
    />
    <div className="country-details">
      <span className="country-name">{country.name}</span>
      <span className="country-meta">{country.capital} · {country.population.toLocaleString("en-US")} · {country.region}</span>
    </div>
  </li>
);
