import ora from 'ora'

const spinner = ora({
  text: '正在执行，请稍等',
  spinner: {
    interval: 80,
    frames: ['|', '/', '-', '\\'],
  },
})

spinner.start()
spinner.succeed('成功') // 成功信息：前面带个✅的信息
spinner.fail('失败') // 错误信息：前面带个❌的信息
spinner.warn('警告') // 警告信息：前面带个⚠️的信息
spinner.info('提示') // 提示信息：前面带个i的信息
spinner.stop() // 停止，不会留下text
