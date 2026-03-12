export interface WidgetProps {
  title?: string;
  description?: string;
  [key: string]: unknown;
}

export interface WidgetSDK {
  whenReady(): Promise<void>;
  shadowRoot: ShadowRoot;
  getProps(): WidgetProps;
  on(event: string, callback: (data: any) => void): () => void;
  emit(event: string, data?: unknown): void;
}
