const merge = require('webpack-merge')
const webpack = require('webpack')
const config = require('./webpack.config')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge.strategy({ entry: 'prepend' })(config, {
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://127.0.0.1:${process.env.PORT || 6000}`,
    'webpack/hot/only-dev-server',
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.(svg|jpe?g|woff)$/,
        loader: 'file',
      },
      {
        test: /\.css$/,
        use: ['style', 'css'],
      },
      {
        test: /\.scss$/,
        use: [
          'style',
          {
            loader: 'css',
            options: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
              sourceMap: true,
            },
          },
          {
            loader: 'sass',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    compress: false,
    historyApiFallback: true,
    port: process.env.PORT || 6000,
    lazy: false,
    stats: { colors: true, children: false, timings: true },
    hot: true,
    host: '0.0.0.0',
  },

  devtool: 'inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/supports/index.html'),
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true),
      __PROD__: JSON.stringify(false)
    }),
  ],

});
