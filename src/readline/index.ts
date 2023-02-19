import * as readline from 'node:readline'
import { stdin as input, stdout as output } from 'node:process'

const rl = readline.createInterface({ input, output })

const rlo = rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`)
  rl.close()
})

console.log(rlo)

// rl.close()
