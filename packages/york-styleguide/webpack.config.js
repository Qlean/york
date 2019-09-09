const path = require('path')

module.exports = {
  resolve: {
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
}
