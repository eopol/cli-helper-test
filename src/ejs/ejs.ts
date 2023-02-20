import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import ejs from 'ejs'

const __dirname = dirname(fileURLToPath(import.meta.url))

const html = '<div><%= user.name %></div>'
const options = {}
const data = {
  user: {
    name: 'i7eo',
  },
}
const data2 = {
  user: {
    name: 'eva',
  },
}

// 第一种，反复使用
const template = ejs.compile(html, options)
const compiledTemplate = template(data)
const compiledTemplate2 = template(data2)

console.log(compiledTemplate)
console.log(compiledTemplate2)

// 第二种，一次性使用
const renderedTemplate = ejs.render(html, data, options)
console.log(renderedTemplate)

// // 第三种，编译文件
// const renderedFile = await ejs.renderFile(
//   resolve(__dirname, './index.html'),
//   data,
//   options
// )
// console.log(renderedFile)
