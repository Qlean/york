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

  resolve: {
    modules: ['node_modules', './src']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g)$/,
        loader: 'file-loader',
        options: {
          publicPath: resolve(__dirname, 'build/')
        }
      }
    ]
  }
}