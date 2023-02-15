import { exec, spawn } from 'node:child_process'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

const __dirname = dirname(fileURLToPath(import.meta.url))

// spawn stdio pipe(default) demo
// const child1 = spawn('yarn', ['install'], {
//   cwd: resolve(
//     '/Users/i7eo/Documents/Company/XA-Castianta/starlight-tech-web-pc'
//   ),
// })
// child1.stdout.on('data', (chunk) => {
//   // console.log(chunk)
//   console.log('child1 stdout', chunk.toString())
// })

// child1.stderr.on('data', (chunk) => {
//   console.log('child1 stderr', chunk.toString())
// })

// spawn stdio inherit demo，改为 inherit 后，数据流回父进程，不需要通过 on data 的形式接受数据
// const child2 = spawn('yarn', ['install'], {
//   cwd: resolve(
//     '/Users/i7eo/Documents/Company/XA-Castianta/starlight-tech-web-pc'
//   ),
//   stdio: 'inherit',
// })
// child2.stdout.on('data', (chunk) => {
//   // console.log(chunk)
//   console.log('child2 stdout', chunk.toString())
// })

// child2.stderr.on('data', (chunk) => {
//   console.log('child2 stderr', chunk.toString())
// })

// 正常情况的写法
// const code = await import(resolve(dir, 'package.json'), {
//   assert: {
//     type: 'json',
//   },
// })
// const child = spawn('node', ['-e', code], {
//   cwd: process.cwd()
// })

// child.stdout.on('data', (chunk) => {
//   // console.log(chunk)
//   console.log('stdout', chunk.toString())
// })

// child.stderr.on('data', (chunk) => {
//   console.log('stderr', chunk.toString())
// })

// 更好的写法，使用 spawn stdio inherit
// console.log((await import(resolve(__dirname, './demo.ts'))).default)
// console.log(
//   require(resolve(__dirname, './demo.ts')).default.call(null, [1, 2, 3])
// )
const filePath = resolve(__dirname, './demo.mjs')
const file = (await import(resolve(__dirname, './demo.mjs'))).default
// console.log(eval(file).call(null, [1,2,3]))
const code = `eval(${file}).call(null, ${JSON.stringify([1, 2, 3])})`
// console.log(code)
// node -e => node eval eval not support import...
const child4 = spawn('node', ['-e', code], {
  cwd: process.cwd(),
  stdio: 'inherit',
})

child4.on('error', (error) => {
  console.log(error.message)
  process.exit(1) // 1 表示返回错误, 0 表示成功
})

child4.on('exit', (e) => {
  console.log('finish, exit', e) // e => 0
  e && process.exit(e)
})
