import { exec, spawn } from 'node:child_process'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const child = spawn(resolve(__dirname, 'spawn.shell'), ['l1', 'l2'], {
  cwd: resolve('..'),
})

child.stdout.on('data', (chunk) => {
  // console.log(chunk)
  console.log('stdout', chunk.toString())
})

child.stderr.on('data', (chunk) => {
  console.log('stderr', chunk.toString())
})

const child1 = spawn('yarn', ['install'], {
  cwd: resolve(
    '/Users/i7eo/Documents/Company/XA-Castianta/starlight-tech-web-pc'
  ),
})

child1.stdout.on('data', (chunk) => {
  // console.log(chunk)
  console.log('child1 stdout', chunk.toString())
})

child1.stderr.on('data', (chunk) => {
  console.log('child1 stderr', chunk.toString())
})

exec(
  'yarn install',
  {
    cwd: resolve(
      '/Users/i7eo/Documents/Company/XA-Castianta/starlight-tech-web-pc'
    ),
  },
  (err, stdout, stderr) => {
    if (err) {
      console.error('useExecInstall err: ', err)
      return
    }
    console.log('useExecInstall stdout: ', stdout)
    console.error('useExecInstall stderr: ', stderr)
  }
)
