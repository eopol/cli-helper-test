import { fork } from 'node:child_process'
import { resolve } from 'node:path'

// fork: Node(主进程) -> Node(子进程，独立的v8环境)
const child = fork(resolve(__dirname, './fork-child.ts'))
// 因为 fork 是异步的所以，在加载 fork-child 过程中先将 child 实例返回然后执行 log，fork-child 加载完毕后先执行 log 后打印消息
child.send('hello fork-child!', () => {
  child.disconnect() // why?
})
console.log('fork pid: ', process.pid)
