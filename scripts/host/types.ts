import type { ChildProcess } from 'child_process'

export interface WidgetSource {
  path: string
  entry: string
}

export interface WidgetContent {
  endpoint: string
  method: string
  requiresAuthentication?: boolean
  cacheStrategy?: string
  cacheTtlSeconds?: number
}

export interface WidgetDefinition {
  type: string
  title?: string
  version?: string
  description?: string
  category?: string
  source?: WidgetSource
  content?: WidgetContent
  containers?: string[]
  settings?: Record<string, boolean>
  configuration?: unknown
  defaultConfig?: Record<string, unknown>
  widgetsLibrary?: boolean
  imageSrc?: string
  imageName?: string
}

export interface WidgetRegistry {
  widgets: WidgetDefinition[]
  stylesheets?: Array<{ name: string; path: string }>
}

export interface ConnectorDefinition {
  name: string
  url: string
  method?: string
  permalink?: string
}

export interface ConnectorsRegistry {
  connectors: ConnectorDefinition[]
}

export interface WidgetState {
  widget: WidgetDefinition
  isActive: boolean
  sourceDir: string
  hasBuildTool: boolean
  buildProcess?: ChildProcess
  buildWatching: boolean
  logs: string[]
  cdnEntryUrl?: string
}


export interface PackageJson {
  scripts?: Record<string, string>
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
}
