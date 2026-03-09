import { readdirSync, readFileSync } from 'fs'
import path from 'path'
import type { WidgetDefinition, ConnectorsRegistry } from './types'
import { MOCK_UPLOAD_ENDPOINT } from './constants'

const collectFiles = (dir: string, base = dir): Array<{ relativePath: string; fullPath: string }> => {
  const entries = readdirSync(dir, { withFileTypes: true })
  return entries.flatMap(entry => {
    const fullPath = path.join(dir, entry.name)
    return entry.isDirectory()
      ? collectFiles(fullPath, base)
      : [{ relativePath: path.relative(base, fullPath), fullPath }]
  })
}

export const uploadWidgetDist = async (
  widgetType: string,
  sourceDir: string,
  entryFile: string,
  widgetDef: Omit<WidgetDefinition, 'source'>,
  connectorsRegistry: ConnectorsRegistry | null
): Promise<string> => {
  const files = collectFiles(sourceDir)
  const formData = new FormData()
  formData.append('widget_type', widgetType)
  formData.append('entry', entryFile)
  formData.append('widget_definition', JSON.stringify(widgetDef))
  if (connectorsRegistry) {
    formData.append('connectors_registry', JSON.stringify(connectorsRegistry))
  }
  for (const { relativePath, fullPath } of files) {
    formData.append('file', new Blob([readFileSync(fullPath)]), relativePath)
  }
  const response = await fetch(MOCK_UPLOAD_ENDPOINT, { method: 'POST', body: formData })
  if (!response.ok) throw new Error(`Upload failed: ${response.status}`)
  const { entry_url } = await response.json() as { entry_url: string }
  return entry_url
}

export const deletePreview = async (): Promise<void> => {
  const response = await fetch(MOCK_UPLOAD_ENDPOINT, { method: 'DELETE' })
  if (!response.ok && response.status !== 404) throw new Error(`API responded with ${response.status}`)
}
