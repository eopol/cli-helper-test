function* g() {
  console.log('read')
  //@ts-ignore
  const ch = yield
  console.log(ch)
}

const f = g()
console.log(f) // 此时 f 为 g 执行后返回的 generator 函数，需要调用 next 才能执行
f.next()
f.next('a') // 会将值传递给 ch
