console.log(`[child:${process.pid}]`)

process.on('message', (message: any) => {
  const { msg, pid } = message
  console.log(`[child:${process.pid}]`, msg)
  // process.kill(process.pid)
})

if (process && process.send) {
  process.send({
    msg: 'hello parent!',
    pid: process.pid,
  })
}
