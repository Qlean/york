const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: 'main',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this',
  },
  node: {
    fs: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: 'file-loader',
              name: '[name][md5:hash].[ext]',
              outputPath: 'assets/',
              publicPath: '/assets/',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|eot|ttf)$/i,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      utils: path.resolve(__dirname, 'src/utils/'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BROWSER': JSON.stringify(true),
      window: JSON.stringify(true),
    }),
  ],
  externals: {
    'styled-components': 'styled-components',
  },
}
