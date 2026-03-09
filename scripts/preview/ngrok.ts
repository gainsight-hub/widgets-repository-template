import { spawnSync, spawn } from 'child_process'
import type { ChildProcess } from 'child_process'
import { writeFileSync, unlinkSync } from 'fs'
import { tmpdir } from 'os'
import path from 'path'

export interface NgrokTunnels {
  process: ChildProcess
  urls: Map<number, string>
}

interface NgrokTunnelsResponse {
  tunnels: Array<{
    public_url: string
    proto: string
    config: { addr: string }
  }>
}

const getDefaultConfigPath = (): string | null => {
  const result = spawnSync('ngrok', ['config', 'check'], { encoding: 'utf-8' })
  const output = (result.stdout ?? '') + (result.stderr ?? '')
  const match = output.match(/at (.+)$/)
  return match ? match[1].trim() : null
}

const writeTunnelConfig = (ports: number[]): string => {
  const tunnels = ports
    .map(port => `  port_${port}:\n    proto: http\n    addr: ${port}`)
    .join('\n')
  const content = `version: "2"\ntunnels:\n${tunnels}\n`
  const configPath = path.join(tmpdir(), `ngrok-preview-${Date.now()}.yml`)
  writeFileSync(configPath, content, 'utf-8')
  return configPath
}

const parsePort = (addr: string): number | null => {
  if (/^\d+$/.test(addr)) return parseInt(addr, 10)
  const match = /:(\d+)$/.exec(addr)
  return match ? parseInt(match[1], 10) : null
}

const pollForTunnels = async (proc: ChildProcess, ports: number[]): Promise<Map<number, string>> => {
  let exited = false
  let exitCode: number | null = null
  proc.once('exit', code => {
    exited = true
    exitCode = code
  })

  let delay = 250
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, delay))
    delay = Math.min(Math.round(delay * 1.5), 2000)

    if (exited) {
      throw new Error(`ngrok exited early (code ${exitCode}). Check auth: ngrok config check`)
    }

    try {
      const res = await fetch('http://localhost:4040/api/tunnels')
      if (res.ok) {
        const data = (await res.json()) as NgrokTunnelsResponse
        const urls = new Map<number, string>()
        for (const t of data.tunnels) {
          if (t.proto !== 'https') continue
          const port = parsePort(t.config.addr)
          if (port !== null && ports.includes(port)) {
            urls.set(port, t.public_url.replace(/\/$/, ''))
          }
        }
        if (urls.size === ports.length) return urls
      }
    } catch {
    }
  }

  proc.kill('SIGTERM')
  throw new Error('ngrok tunnels did not start in time. Check auth: ngrok config check')
}

export const startNgrok = async (ports: number[]): Promise<NgrokTunnels> => {
  const check = spawnSync('ngrok', ['version'], { stdio: 'ignore' })
  if (check.error && 'code' in check.error && check.error.code === 'ENOENT') {
    throw new Error('ngrok not found. Install from https://ngrok.com/download')
  }

  const defaultConfig = getDefaultConfigPath()
  const tunnelConfig = writeTunnelConfig(ports)
  const configArgs = [
    ...(defaultConfig ? ['--config', defaultConfig] : []),
    '--config', tunnelConfig,
  ]

  const proc = spawn('ngrok', ['start', '--all', ...configArgs], { stdio: 'ignore' })

  try {
    const urls = await pollForTunnels(proc, ports)
    unlinkSync(tunnelConfig)
    return { process: proc, urls }
  } catch (e) {
    try { unlinkSync(tunnelConfig) } catch {}
    throw e
  }
}

export const stopNgrok = (tunnels: NgrokTunnels): void => {
  if (!tunnels.process.killed) tunnels.process.kill('SIGTERM')
}
