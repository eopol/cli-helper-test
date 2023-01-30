const fs = require('node:fs')
const path = require('node:path')

const scopes = [...fs.readdirSync(path.resolve(__dirname, './src'))]

module.exports = {
  extends: ['@unconfig/commitlint-config/base.js'],
  rules: {
    'scope-enum': [2, 'always', scopes],
  },
  prompt: {
    scopes: [...scopes],
  },
}
