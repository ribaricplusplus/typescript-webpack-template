const { join } = require('path')
const { rmdirSync } = require('fs')

const root = join(__dirname, '..')
rmdirSync(join(root, 'transpiled'), {recursive: true})
