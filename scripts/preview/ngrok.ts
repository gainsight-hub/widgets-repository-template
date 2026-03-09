import { spawnSync, spawn } from 'child_process'
import type { ChildProcess } from 'child_process'

export interface NgrokSession {
  process: ChildProcess
  tunnelUrl: string
}

interface NgrokTunnelsResponse {
  tunnels: Array<{ public_url: string; proto: string }>
}

const pollForTunnel = async (proc: ChildProcess, apiPort: number): Promise<string> => {
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
      proc.kill('SIGTERM')
      throw new Error(`ngrok exited early (code ${exitCode}). Check auth: ngrok config check`)
    }

    try {
      const res = await fetch(`http://localhost:${apiPort}/api/tunnels`)
      if (res.ok) {
        const data = (await res.json()) as NgrokTunnelsResponse
        const tunnel = data.tunnels.find(t => t.proto === 'https')
        if (tunnel) return tunnel.public_url.replace(/\/$/, '')
      }
    } catch {
    }
  }

  proc.kill('SIGTERM')
  throw new Error('ngrok tunnel did not start in time. Check auth: ngrok config check')
}

export const startNgrok = async (port: number, apiPort = 4040): Promise<NgrokSession> => {
  const check = spawnSync('ngrok', ['version'], { stdio: 'ignore' })
  if (check.error && 'code' in check.error && check.error.code === 'ENOENT') {
    throw new Error('ngrok not found. Install from https://ngrok.com/download')
  }

  const proc = spawn('ngrok', ['http', String(port), '--web-addr', `:${apiPort}`], { stdio: 'ignore' })
  const tunnelUrl = await pollForTunnel(proc, apiPort)
  return { process: proc, tunnelUrl }
}

export const stopNgrok = (session: NgrokSession): void => {
  if (!session.process.killed) session.process.kill('SIGTERM')
}
