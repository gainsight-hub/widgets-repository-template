export interface WidgetProps {
  fallback_locale?: string;
  accent_color?: string;
  card_background?: string;
  text_color?: string;
  show_locale_badge?: string;
  [key: string]: unknown;
}

export interface WidgetSDK {
  whenReady(): Promise<void>;
  shadowRoot: ShadowRoot;
  getProps(): WidgetProps;
  on(event: string, callback: (data: WidgetProps) => void): () => void;
  emit(event: string, data?: unknown): void;
}

export type Locale = "en" | "es" | "fr" | "de" | "pt";

export type TranslationStrings = {
  title: string;
  body: string;
  step1: string;
  step2: string;
  step3: string;
  cta: string;
  footer: string;
};

export type Translations = Record<Locale, TranslationStrings>;
