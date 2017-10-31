const { resolve } = require('path')

module.exports = {
  context: resolve(__dirname, 'src'),

  entry: './index.js',

  output: {
    path: resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'york',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}