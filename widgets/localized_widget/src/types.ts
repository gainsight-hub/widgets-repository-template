export interface WidgetSDK {
  whenReady(): Promise<void>;
  shadowRoot: ShadowRoot;
  on(event: string, callback: () => void): () => void;
}

export type Locale = "en" | "es" | "fr" | "de" | "pt";
