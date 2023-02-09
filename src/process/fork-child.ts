console.log('fork-child pid: ', process.pid)
process.on('message', (msg) => {
  console.log(msg)
})
