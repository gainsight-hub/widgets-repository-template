import chalk from 'chalk'
import { existsSync } from 'fs'
import type { WidgetDefinition, WidgetState, ConnectorsRegistry } from './types'
import * as registry from './registry'
import * as api from './api'
import * as processes from './processes'
import * as ui from './ui'
import * as dashboard from './dashboard'

const buildWidgetState = (widget: WidgetDefinition): WidgetState | null => {
  const sourceDir = registry.getWidgetSourceDir(widget)
  if (!sourceDir) return null
  return {
    widget,
    isActive: true,
    sourceDir,
    hasBuildTool: registry.hasBuildTool(widget),
    buildWatching: false,
    logs: [],
  }
}

const uploadWidget = async (
  state: WidgetState,
  connectorsRegistry: ConnectorsRegistry | null
): Promise<void> => {
  const { source, ...widgetDef } = state.widget
  if (!source) return
  state.cdnEntryUrl = await api.uploadWidgetDist(state.widget.type, state.sourceDir, source.entry, widgetDef, connectorsRegistry)
}

let cleaningUp = false
const distWatcherCleanups: Array<() => void> = []

const cleanup = async (widgetStates: Map<string, WidgetState>): Promise<void> => {
  if (cleaningUp) return
  cleaningUp = true
  console.log()
  ui.info(chalk.yellow('Shutting down...'))
  console.log()

  for (const stop of distWatcherCleanups) stop()
  processes.stopAllBuildWatchers(widgetStates)

  const deleteSpinner = ui.spinner('Removing widget overrides...')
  try {
    await api.deletePreview()
    deleteSpinner.succeed('Widget overrides removed')
  } catch {
    deleteSpinner.warn('Backend unreachable — overrides may persist until server restart')
  }

  console.log()
  console.log(chalk.bold.cyan('  Goodbye!'))
  console.log()
}

const main = async (): Promise<void> => {
  ui.showBanner()

  let widgetRegistry
  try {
    widgetRegistry = registry.readWidgetRegistry()
  } catch (e: unknown) {
    ui.error(e instanceof Error ? e.message : String(e))
    process.exit(1)
  }

  const sourceWidgets = widgetRegistry.widgets.filter(w => !!w.source)
  if (sourceWidgets.length === 0) {
    ui.error('No source-based widgets found in widget_registry.json')
    process.exit(1)
  }

  const connectorsRegistry = registry.readConnectorsRegistry()
  if (connectorsRegistry) {
    ui.info(`Found ${connectorsRegistry.connectors.length} connector(s) in connectors_registry.json`)
  }

  console.log()

  const selectedWidgets = await ui.promptWidgetSelection(sourceWidgets)
  if (selectedWidgets.length === 0) {
    ui.info('No widgets selected. Exiting.')
    process.exit(0)
  }

  console.log()

  const widgetStates = new Map<string, WidgetState>()

  for (const widget of selectedWidgets) {
    const state = buildWidgetState(widget)
    if (!state) continue

    if (!existsSync(state.sourceDir)) {
      ui.warn(`${chalk.bold(widget.type)}: dist not found at ${state.sourceDir}`)
      if (state.hasBuildTool) {
        ui.info(`Run ${chalk.cyan('yarn build')} inside ${chalk.dim('widgets/' + widget.type)} first`)
      }
      continue
    }

    widgetStates.set(widget.type, state)

    if (state.hasBuildTool) {
      state.buildWatching = await ui.promptWatchMode(widget.title ?? widget.type)
    }
  }

  if (widgetStates.size === 0) {
    ui.error('No valid widgets to preview. Build your widgets first.')
    process.exit(1)
  }

  console.log()
  ui.divider()
  console.log()

  for (const [, state] of widgetStates) {
    const buildDir = registry.findBuildToolDir(state.widget)
    if (!buildDir) continue

    if (state.buildWatching) {
      ui.info(`Starting watch mode for ${chalk.bold(state.widget.title ?? state.widget.type)}...`)
      processes.startBuildWatcher(
        state,
        buildDir,
        line => ui.widgetLog(state.widget.type, line)
      )
    } else {
      const buildSpinner = ui.spinner(`Building ${chalk.bold(state.widget.title ?? state.widget.type)}...`)
      try {
        await processes.runBuildOnce(buildDir, line => {
          buildSpinner.stop()
          ui.widgetLog(state.widget.type, line)
        })
        buildSpinner.succeed(`Build complete: ${chalk.bold(state.widget.title ?? state.widget.type)}`)
      } catch {
        buildSpinner.warn(`Build had issues for ${state.widget.type} — check logs above`)
      }
    }
  }

  console.log()

  for (const [, state] of widgetStates) {
    const uploadSpinner = ui.spinner(`Uploading ${chalk.bold(state.widget.title ?? state.widget.type)}...`)
    try {
      await uploadWidget(state, connectorsRegistry)
      uploadSpinner.succeed(`Uploaded: ${chalk.bold(state.widget.title ?? state.widget.type)}`)
    } catch (e: unknown) {
      uploadSpinner.warn(`Upload failed for ${state.widget.type} (backend not yet available): ${e instanceof Error ? e.message : String(e)}`)
    }
  }

  console.log()
  ui.divider()

  for (const [, state] of widgetStates) {
    if (!state.buildWatching) continue
    const stopWatcher = processes.watchDistDir(state.sourceDir, async () => {
      const uploadSpinner = ui.spinner(`Re-uploading ${chalk.bold(state.widget.title ?? state.widget.type)}...`)
      try {
        await uploadWidget(state, connectorsRegistry)
        uploadSpinner.succeed(`Re-uploaded: ${chalk.bold(state.widget.title ?? state.widget.type)}`)
      } catch (e: unknown) {
        uploadSpinner.warn(`Re-upload failed: ${e instanceof Error ? e.message : String(e)}`)
      }
      dashboard.showStatus(widgetStates)
    })
    distWatcherCleanups.push(stopWatcher)
  }

  dashboard.showStatus(widgetStates)

  const handleToggleUpdate = async (states: Map<string, WidgetState>): Promise<void> => {
    const updateSpinner = ui.spinner('Updating widget overrides...')
    try {
      await api.deletePreview()
      for (const [, state] of states) {
        if (state.isActive) await uploadWidget(state, connectorsRegistry)
      }
      updateSpinner.succeed('Override updated')
    } catch {
      updateSpinner.warn('Backend unreachable — local state updated only')
    }
    console.log()
    dashboard.showStatus(states)
  }

  process.on('SIGTERM', async () => {
    await cleanup(widgetStates)
    process.exit(0)
  })

  dashboard.startInteractive(
    widgetStates,
    handleToggleUpdate,
    async () => {
      await cleanup(widgetStates)
      process.exit(0)
    }
  )
}

main().catch((e: unknown) => {
  ui.error(e instanceof Error ? e.message : String(e))
  process.exit(1)
})
