import { spawn } from 'child_process'
import { watch } from 'fs'
import type { WidgetState } from './types'
import { readPackageJson } from './registry'

const spawnBuild = (
  widgetDir: string,
  args: string[],
  onLog: (line: string) => void
) => {
  const proc = spawn('yarn', args, {
    cwd: widgetDir,
    shell: true,
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  const handleData = (data: Buffer) =>
    data
      .toString()
      .split('\n')
      .filter(l => l.trim())
      .forEach(onLog)
  proc.stdout?.on('data', handleData)
  proc.stderr?.on('data', handleData)
  return proc
}

export const runBuildOnce = (
  widgetDir: string,
  onLog: (line: string) => void
): Promise<void> =>
  new Promise((resolve, reject) => {
    const pkg = readPackageJson(widgetDir)
    if (!pkg?.scripts?.['build']) {
      resolve()
      return
    }
    const proc = spawnBuild(widgetDir, ['build'], onLog)
    proc.on('exit', code => (code === 0 || code === null ? resolve() : reject(new Error(`Build exited ${code}`))))
    proc.on('error', reject)
  })

export const startBuildWatcher = (
  state: WidgetState,
  widgetDir: string,
  onLog: (line: string) => void
): void => {
  const pkg = readPackageJson(widgetDir)
  if (!pkg?.scripts) return
  const args = pkg.scripts['watch'] ? ['watch'] : ['build', '--watch']
  const proc = spawnBuild(widgetDir, args, onLog)
  proc.on('error', err => onLog(`Process error: ${err.message}`))
  proc.on('exit', code => {
    if (code !== null && code !== 0) onLog(`Watcher exited with code ${code}`)
  })
  state.buildProcess = proc
}

export const stopBuildWatcher = (state: WidgetState): void => {
  if (state.buildProcess && !state.buildProcess.killed) {
    state.buildProcess.kill('SIGTERM')
    state.buildProcess = undefined
  }
}

export const stopAllBuildWatchers = (widgetStates: Map<string, WidgetState>): void => {
  for (const state of widgetStates.values()) stopBuildWatcher(state)
}

export const watchDistDir = (
  dir: string,
  onChanged: () => void,
  debounceMs = 1000
): (() => void) => {
  let timer: ReturnType<typeof setTimeout> | undefined
  const watcher = watch(dir, { recursive: true }, () => {
    clearTimeout(timer)
    timer = setTimeout(onChanged, debounceMs)
  })
  return () => {
    clearTimeout(timer)
    watcher.close()
  }
}
