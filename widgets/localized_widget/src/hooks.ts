import { useState, useEffect } from "react";
import { SUPPORTED_LOCALES, TRANSLATIONS } from "./constants";
import type { Locale, TranslationStrings, WidgetSDK, WidgetProps } from "./types";

function normalize(raw: string | null | undefined): Locale | null {
  if (!raw) return null;
  const code = raw.trim().toLowerCase().replace(/_/g, "-").split("-")[0];
  return SUPPORTED_LOCALES.includes(code as Locale) ? (code as Locale) : null;
}

function detectLocale(): Locale | null {
  const htmlLang = document.documentElement?.getAttribute("lang");
  if (normalize(htmlLang)) return normalize(htmlLang);

  const meta =
    document.querySelector('meta[http-equiv="content-language"]') ??
    document.querySelector('meta[name="language"]') ??
    document.querySelector('meta[property="og:locale"]');
  if (meta && normalize(meta.getAttribute("content")))
    return normalize(meta.getAttribute("content"));

  const segs = window.location.pathname.split("/").filter(Boolean);
  for (let i = 0; i < Math.min(segs.length, 2); i++) {
    if (normalize(segs[i])) return normalize(segs[i]);
  }

  const params = new URLSearchParams(window.location.search);
  const qp =
    normalize(params.get("lang")) ??
    normalize(params.get("locale")) ??
    normalize(params.get("hl"));
  if (qp) return qp;

  const langs = navigator.languages ?? [navigator.language];
  for (const lang of langs) {
    if (normalize(lang)) return normalize(lang);
  }

  return null;
}

export function useLocale(fallback: Locale): {
  locale: Locale;
  strings: TranslationStrings;
} {
  const detected = detectLocale();
  const locale = detected ?? fallback;
  const strings = TRANSLATIONS[locale] ?? TRANSLATIONS[fallback] ?? TRANSLATIONS.en;
  return { locale, strings };
}

export function useWidgetProps(sdk: WidgetSDK): WidgetProps {
  const [props, setProps] = useState<WidgetProps>(sdk.getProps());
  useEffect(() => sdk.on("propsChanged", setProps), [sdk]);
  return props;
}
