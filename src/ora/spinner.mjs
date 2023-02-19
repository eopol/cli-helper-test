import ora from 'ora'

/**
 * @description 命令行加载动画
 * @param text 加载提示
 * @param interval 动画时常毫秒
 * @returns
 */
export function spinner(
  text = '正在执行，请稍等',
  interval = 80,
  frames = ['|', '/', '-', '\\']
) {
  const spinner = ora({
    text,
    spinner: {
      interval,
      frames,
    },
  })

  // start()
  // spinner.start()
  // await sleep()
  // spinner.succeed('成功') // 成功信息：前面带个✅的信息
  // spinner.fail('失败') // 错误信息：前面带个❌的信息
  // spinner.warn('警告') // 警告信息：前面带个⚠️的信息
  // spinner.info('提示') // 提示信息：前面带个i的信息
  // spinner.stop() // 停止，不会留下text
  // stop()

  return ora({
    text,
    spinner: {
      interval,
      frames,
    },
  })
}

/**
 * @description 手动休眠
 * @param timeout
 * @returns
 */
export function sleep(timeout = 1000) {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}
