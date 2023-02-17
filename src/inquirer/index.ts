import inquirer from 'inquirer'

inquirer
  .prompt([
    {
      type: 'input',
      name: 'yourName',
      message: 'your name:',
      default: 'noname',
      validate(input) {
        // if (input === 'i7eo') return true
        return typeof input === 'string'
      },
      transformer(input) {
        // 只转换显示（input），不会影响结果
        return `name[${input}]`
      },
      filter(input) {
        // 转换结果
        return `name ${input}`
      },
    },
    {
      type: 'number',
      name: 'yourAge',
      message: 'your age:',
    },
    {
      type: 'confirm',
      name: 'yourChoice',
      message: 'your choice:',
      // 默认值false n字符大写
      default: false,
    },
    {
      type: 'list',
      name: 'yourListChoice',
      message: 'your list choice:',
      // 默认值是choices的索引
      default: 0,
      choices: [
        { value: 1, name: 'i7eo' },
        { value: 2, name: 'eva' },
      ],
    },
  ])
  .then((answers) => {
    /* 这里处理用户的回答操作 */
    console.log(answers)
  })
  .catch((error) => {
    /* 处理异常 */
    console.log(error)
  })
