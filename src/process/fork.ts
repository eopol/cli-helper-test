import { fork } from 'node:child_process'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

console.log(resolve(__dirname, './fork-child.ts'))

// fork: Node(主进程) -> Node(子进程，独立的v8环境)
const child = fork(resolve(__dirname, './fork-child.ts'))
// 因为 fork 是异步的所以，在加载 fork-child 过程中先将 child 实例返回然后执行 log，fork-child 加载完毕后先执行 log 后打印消息
child.send({ msg: 'hello child!', pid: process.pid }, () => {
  // 回调在child接受前执行
  console.log(`[parent:${process.pid}] send success`)
})

child.on('message', (message: any) => {
  const { msg } = message
  msg && console.log(`[parent:${process.pid}]`, msg)
})

console.log(`[parent:${process.pid}]`)
