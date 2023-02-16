import { exec, execFile } from 'node:child_process'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const child = exec('ls -al | grep node_modules', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`)
    return
  }
  console.log(`exec stdout: ${stdout}`)
  console.error(`exec stderr: ${stderr}`)
})

// // 打印出 child process 实例，实例中拿不到执行结果，只能从回调中获取
// console.log(child)

// execFile('ls', ['-al'], (err, stdout, stderr) => {
//   if (err) {
//     console.error(`exec error: ${err}`)
//     return
//   }
//   console.log(`execFile stdout: ${stdout}`)
//   console.error(`execFile stderr: ${stderr}`)
// })

// // //error ls: invalid option -- |
// // execFile('ls', ['-al|grep node_modules'], (err, stdout, stderr) => {
// //   if (err) {
// //     console.error(`exec error: ${err}`)
// //     return
// //   }
// //   console.log(`execFile stdout: ${stdout}`)
// //   console.error(`execFile stderr: ${stderr}`)
// // })

// // spawn ./exec.shell ENOENT 指的是直接通过 ./exec.shell 相对路径的方式执行文件导致，具体原因请查看 https://segmentfault.com/q/1010000012829558 https://github.com/imsobear/blog/issues/48
// // execFile('./exec.shell', (err, stdout, stderr) => {
// // spawn /Users/i7eo/Documents/Workspace/GitHub/eopol/cli-helper-test/src/process/exec.shell EACCES 无可执行权限，需要执行 chmod +x src/process/exec.shell
// execFile(
//   resolve(__dirname, './exec.shell'),
//   ['-l1', '-l2'],
//   (err, stdout, stderr) => {
//     if (err) {
//       console.error(`exec error: ${err}`)
//       return
//     }
//     console.log(`execFile stdout: ${stdout}`)
//     console.error(`execFile stderr: ${stderr}`)
//   }
// )

// async function test() {
//   const { stdout, stderr } = await execFile(
//     resolve(__dirname, './exec.shell'),
//     ['-l1', '-l2']
//   )

//   console.log(`execFile stdout: ${stdout}`)
//   console.error(`execFile stderr: ${stderr}`)
// }
// test()
