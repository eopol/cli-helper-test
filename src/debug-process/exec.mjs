import { exec } from 'node:child_process'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

// const __dirname = dirname(fileURLToPath(import.meta.url))

// exec('ls -al | grep node_modules', (err, stdout, stderr) => {
//   if (err) {
//     console.error(`exec error: ${err}`)
//     return
//   }
//   console.log(`exec stdout: ${stdout}`)
//   console.error(`exec stderr: ${stderr}`)
// })

const child = exec('ls -al | grep node_modules', (err, stdout, stderr) => {
  console.log(
    '//:============================== exec callback ==============================://'
  )
  console.log(err)
  console.log(stdout)
  console.error(stderr)
  console.log(
    '//:============================== exec callback ==============================://'
  )
})

child.stdout?.on('data', (chunk) => {
  console.log('stdout data', chunk)
})

child.stdout?.on('close', () => {
  console.log('stdout close')
})

child.stderr?.on('data', (chunk) => {
  console.log('stderr data', chunk)
})

child.stderr?.on('close', () => {
  console.log('stderr close')
})

// exit 指程序执行完毕，会调用 maybeclose 执行上面的 callback ，此后向 socket 广播 close 事件，（如下 console.log('close!', code)）先接受到，随后 stdout也接受到
child.on('exit', (code) => {
  console.log('exit!', code)
})

// close 指程序执行完毕后，socket 通道关闭
child.on('close', (code) => {
  console.log('close!', code)
})
