import fg from 'fast-glob'

fg('**/*.ts', {
  ignore: ['node_modules'],
  dot: true,
}).then((result) => {
  console.log(result)
})
