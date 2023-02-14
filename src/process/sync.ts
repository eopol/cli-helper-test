import { execFileSync, execSync, spawnSync } from 'node:child_process'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const execSyncResult = execSync('ls -al|grep node_modules')
// 同步方法不用写回调了，注意返回值为 buffer
console.log(execSyncResult.toString())

const execFileSyncResult = execFileSync('ls', ['-al'])
console.log(execFileSyncResult.toString())

const spawnSyncResult = spawnSync('ls', ['-al'])
console.log(spawnSyncResult.stdout.toString())

// 常用的是 execsync 但是需要注意，execsync 不会对 shell 命令做校验，例如 ls -al|grep node_modules && rm -rf
// 因为 execFileSyncResult 不能直接执行 shell 命令所以相对安全
