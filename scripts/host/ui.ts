import chalk from 'chalk'
import inquirer from 'inquirer'
import ora from 'ora'
import type { WidgetDefinition } from './types'

const CHALK_COLORS = [
  chalk.red,
  chalk.green,
  chalk.yellow,
  chalk.blue,
  chalk.magenta,
  chalk.cyan,
]

const colorMap = new Map<string, (typeof CHALK_COLORS)[number]>()

export const getWidgetColor = (widgetType: string) => {
  if (!colorMap.has(widgetType)) {
    colorMap.set(widgetType, CHALK_COLORS[colorMap.size % CHALK_COLORS.length])
  }
  return colorMap.get(widgetType)!
}

export const showBanner = (): void => {
  console.log()
  console.log(chalk.bold.cyan('  ╭──────────────────────────────────────────╮'))
  console.log(chalk.bold.cyan('  │') + chalk.bold('  Widget Preview Host                     ') + chalk.bold.cyan('│'))
  console.log(chalk.bold.cyan('  │') + chalk.dim('  Upload local widgets to preview on CC   ') + chalk.bold.cyan('│'))
  console.log(chalk.bold.cyan('  ╰──────────────────────────────────────────╯'))
  console.log()
}

export const spinner = (text: string) => ora({ text, color: 'cyan' }).start()

export const promptWidgetSelection = async (
  widgets: WidgetDefinition[]
): Promise<WidgetDefinition[]> => {
  const { selected } = await inquirer.prompt<{ selected: WidgetDefinition[] }>([
    {
      type: 'checkbox',
      name: 'selected',
      message: chalk.bold('Which widgets do you want to preview?'),
      choices: widgets
        .filter(w => !!w.source)
        .map(w => ({
          name: `${chalk.bold(w.title ?? w.type)}  ${chalk.dim(w.type)}`,
          value: w,
          checked: true,
        })),
      validate: choices => (choices.length > 0 ? true : 'Select at least one widget'),
    },
  ])
  return selected
}

export const promptWatchMode = async (widgetTitle: string): Promise<boolean> => {
  const { watch } = await inquirer.prompt<{ watch: boolean }>([
    {
      type: 'confirm',
      name: 'watch',
      message: `Enable watch mode for ${chalk.bold(widgetTitle)}? ${chalk.dim('(auto-rebuild on file changes)')}`,
      default: true,
    },
  ])
  return watch
}

export const widgetLog = (widgetType: string, line: string): void => {
  const color = getWidgetColor(widgetType)
  console.log(`  ${color(`[${widgetType}]`)} ${chalk.dim(line)}`)
}

export const info = (msg: string): void =>
  console.log(`  ${chalk.cyan('ℹ')}  ${msg}`)

export const success = (msg: string): void =>
  console.log(`  ${chalk.green('✓')}  ${msg}`)

export const warn = (msg: string): void =>
  console.log(`  ${chalk.yellow('⚠')}  ${msg}`)

export const error = (msg: string): void =>
  console.error(`  ${chalk.red('✗')}  ${msg}`)

export const divider = (): void =>
  console.log(chalk.dim('  ' + '─'.repeat(56)))
