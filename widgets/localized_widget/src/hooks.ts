import { SUPPORTED_LOCALES, TRANSLATIONS } from "./constants";
import type { Locale, TranslationStrings } from "./types";

function normalize(raw: string | null | undefined): Locale | null {
  if (!raw) return null;
  const code = raw.trim().toLowerCase().split(/[-_]/)[0];
  return SUPPORTED_LOCALES.includes(code as Locale) ? (code as Locale) : null;
}

function detectLocale(): Locale {
  return (
    normalize(document.documentElement.lang) ??
    normalize(new URLSearchParams(window.location.search).get("lang")) ??
    "en"
  );
}

export function useLocale(): { locale: Locale; strings: TranslationStrings } {
  const locale = detectLocale();
  const strings = TRANSLATIONS[locale] ?? TRANSLATIONS.en;
  return { locale, strings };
}
