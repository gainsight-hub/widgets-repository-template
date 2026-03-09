import chalk from 'chalk'
import inquirer from 'inquirer'
import readline from 'readline'
import type { WidgetState } from './types'
import { getWidgetColor } from './ui'

const LINE_WIDTH = 58

const pad = (text: string, width: number): string =>
  text.length >= width ? text : text + ' '.repeat(width - text.length)

export const showStatus = (widgetStates: Map<string, WidgetState>): void => {
  console.log()
  console.log(chalk.bold.cyan('  ╭' + '─'.repeat(LINE_WIDTH) + '╮'))
  console.log(
    chalk.bold.cyan('  │') +
    chalk.bold(pad('  Widgets', LINE_WIDTH)) +
    chalk.bold.cyan('│')
  )

  for (const [type, state] of widgetStates) {
    const color = getWidgetColor(type)
    const statusDot = state.isActive ? chalk.green('●') : chalk.gray('○')
    const statusText = state.isActive ? chalk.green('active') : chalk.gray('paused')
    const watch = state.buildWatching ? chalk.dim(' · watching') : ''
    const nameCell = `  ${statusDot} ${color(type.padEnd(22))}${statusText}${watch}`
    console.log(chalk.bold.cyan('  │') + nameCell + chalk.bold.cyan('│'))
    if (state.isActive && state.cdnEntryUrl) {
      const url = `    ${chalk.dim(state.cdnEntryUrl)}`
      console.log(chalk.bold.cyan('  │') + url + chalk.bold.cyan('│'))
    }
  }

  console.log(chalk.bold.cyan('  ├' + '─'.repeat(LINE_WIDTH) + '┤'))
  const controls = chalk.dim('  [t] toggle   [r] refresh   [q] quit & cleanup')
  console.log(chalk.bold.cyan('  │') + controls + chalk.bold.cyan('│'))
  console.log(chalk.bold.cyan('  ╰' + '─'.repeat(LINE_WIDTH) + '╯'))
  console.log()
}

const handleToggle = async (
  widgetStates: Map<string, WidgetState>,
  onToggle: (states: Map<string, WidgetState>) => Promise<void>
): Promise<void> => {
  console.log()
  const { selected } = await inquirer.prompt<{ selected: string[] }>([
    {
      type: 'checkbox',
      name: 'selected',
      message: chalk.bold('Which widgets should be active?'),
      choices: Array.from(widgetStates.entries()).map(([type, state]) => ({
        name: `${chalk.bold(state.widget.title ?? type)}  ${chalk.dim(type)}`,
        value: type,
        checked: state.isActive,
      })),
    },
  ])
  for (const [type, state] of widgetStates) {
    state.isActive = selected.includes(type)
  }
  await onToggle(widgetStates)
}

export const startInteractive = (
  widgetStates: Map<string, WidgetState>,
  onToggle: (states: Map<string, WidgetState>) => Promise<void>,
  onQuit: () => Promise<void>
): void => {
  if (!process.stdin.isTTY) {
    process.on('SIGINT', onQuit)
    return
  }

  readline.emitKeypressEvents(process.stdin)
  process.stdin.setRawMode(true)
  process.stdin.resume()

  process.stdin.on('keypress', async (_, key) => {
    if (!key) return

    if (key.name === 'q' || (key.ctrl && key.name === 'c')) {
      await onQuit()
      return
    }

    if (key.name === 'r') {
      showStatus(widgetStates)
      return
    }

    if (key.name === 't') {
      process.stdin.setRawMode(false)
      try {
        await handleToggle(widgetStates, onToggle)
      } finally {
        process.stdin.setRawMode(true)
      }
      showStatus(widgetStates)
    }
  })
}
