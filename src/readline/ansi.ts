// see https://handwiki.org/wiki/ANSI_escape_code

console.log('\x1B[31m\x1B[4m%s\x1B[0m', 'your name')

// \x 表示16进制
// 1B 为 ansi 固定标识
// m 是渲染标识符 see https://handwiki.org/wiki/ANSI_escape_code CSI (Control Sequence Introducer) sequences
// %s 表示占位符会被后续传入的数值替换掉
// \x1B[0m 表示恢复原始状态
// x1B[4m 表示下划线

console.log('\x1B[2B%s', 'your name2')
console.log('\x1B[2G%s', 'your name2')
