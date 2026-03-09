import { readFileSync, existsSync } from 'fs'
import path from 'path'
import type { WidgetDefinition, WidgetRegistry, ConnectorsRegistry, PackageJson } from './types'

const REPO_ROOT = process.cwd()

export const readWidgetRegistry = (): WidgetRegistry => {
  const registryPath = path.join(REPO_ROOT, 'widget_registry.json')
  if (!existsSync(registryPath)) {
    throw new Error(`widget_registry.json not found in ${REPO_ROOT}. Run from the repo root.`)
  }
  return JSON.parse(readFileSync(registryPath, 'utf-8')) as WidgetRegistry
}

export const readConnectorsRegistry = (): ConnectorsRegistry | null => {
  const registryPath = path.join(REPO_ROOT, 'connectors_registry.json')
  if (!existsSync(registryPath)) return null
  return JSON.parse(readFileSync(registryPath, 'utf-8')) as ConnectorsRegistry
}

export const getWidgetSourceDir = (widget: WidgetDefinition): string | null => {
  if (!widget.source) return null
  return path.join(REPO_ROOT, widget.source.path)
}

export const findBuildToolDir = (widget: WidgetDefinition): string | null => {
  const sourceDir = getWidgetSourceDir(widget)
  if (!sourceDir) return null
  let dir = sourceDir
  while (dir.startsWith(REPO_ROOT) && dir !== REPO_ROOT) {
    if (existsSync(path.join(dir, 'package.json'))) return dir
    const parent = path.dirname(dir)
    if (parent === dir) break
    dir = parent
  }
  return null
}

export const hasBuildTool = (widget: WidgetDefinition): boolean =>
  findBuildToolDir(widget) !== null

export const readPackageJson = (dir: string): PackageJson | null => {
  const pkgPath = path.join(dir, 'package.json')
  if (!existsSync(pkgPath)) return null
  return JSON.parse(readFileSync(pkgPath, 'utf-8')) as PackageJson
}
