const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'react-native': 'react-native-web',
      'york-web': path.resolve(__dirname, '../york-web/src'),
      'york-analytics': path.resolve(__dirname, '../york-analytics/src'),
      'york-react-native': path.resolve(__dirname, '../york-react-native/src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-typescript',
                {
                  allExtensions: true,
                  isTSX: true,
                },
              ],
              '@babel/preset-react',
              '@babel/preset-env',
            ],
            plugins: [
              'inline-react-svg',
              '@babel/plugin-proposal-class-properties',
              [
                'babel-plugin-styled-components',
                {
                  uglifyPure: false,
                  ssr: true,
                },
              ],
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: [
              'inline-react-svg',
              '@babel/plugin-proposal-class-properties',
              [
                'babel-plugin-styled-components',
                {
                  uglifyPure: false,
                  ssr: true,
                },
              ],
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/,
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
        test: /\.(svg|woff|woff2|eot|ttf)$/i,
        use: 'file-loader',
      },
    ],
  },
}
