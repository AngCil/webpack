const path = require('path')

module.exports = {
    entry: './index.js',
    output: {
        //path: path.resolve(__dirname, 'dist'),//directorio
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    }
}