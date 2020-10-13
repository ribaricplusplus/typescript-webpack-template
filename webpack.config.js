const { join } = require('path')

module.exports = {
    target: 'web',
    mode: 'production',
    entry: join(__dirname, 'transpiled', 'index.js'),
    output:{
        path: join(__dirname, 'dist'),
        filename: '[name].js'
    }
}
