export interface WidgetProps {
  title?: string;
  description?: string;
  [key: string]: unknown;
}

export interface WidgetSDK {
  whenReady(): Promise<void>;
  shadowRoot: ShadowRoot;
  getContainer(): Element;
  getProps(): WidgetProps;
  on(event: string, callback: (data: any) => void): () => void;
  emit(event: string, data?: unknown): void;
}

export interface RawCountry {
  name: { common: string };
  capital?: string[];
  population: number;
  flags: { png: string };
  region: string;
}

export interface Country {
  name: string;
  capital: string;
  population: number;
  flag: string;
  region: string;
}

declare global {
  interface Window {
    WidgetServiceSDK: new () => {
      connectors: {
        execute(opts: { permalink: string; method: string }): Promise<RawCountry[]>;
      };
    };
  }
}
