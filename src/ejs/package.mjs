import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import ejs from 'ejs'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function main() {
  const renderedFile = await ejs.renderFile(
    resolve(__dirname, './package.json'),
    {
      projectName: 'adsa',
      projectVersion: '1.1.1',
      projectTemplate: '@eo-cli/simple-template',
      ejsProjectName: 'adsa',
      ejsProjectVersion: '1.1.1',
    }
    // options
  )
  console.log(`${renderedFile}\n` + `123`)
}

main()
