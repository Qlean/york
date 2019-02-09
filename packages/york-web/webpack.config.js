const path = require('path');
const webpack = require('webpack');

const rootPath = path.resolve(__dirname, './');

module.exports = {
  mode: 'production',
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'main.js',
    library: 'main',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this',
  },
  node: {
    fs: 'empty',
  },
  // context: rootPath,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      // {
      //   test: /\.svg$/,
      //   use: [
      //     { loader: 'file-loader' },
      //     {
      //       loader: 'svgo-loader',
      //       options: {
      //         plugins: [
      //           { removeTitle: true },
      //           { removeViewBox: false },
      //         ],
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(jpe?g|png|gif)$/i,
      //   use: 'file-loader',
      // },
      // {
      //   test: /\.(woff|eot|ttf)$/i,
      //   use: 'file-loader',
      // },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: 'file-loader',
              name: '[name][md5:hash].[ext',
              outputPath: 'qassets/',
              publicPath: '/qassets/',
            },
          },
        ],
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
};
