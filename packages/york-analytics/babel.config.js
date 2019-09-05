module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-env'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          'york-analytics': './src',
        },
      },
    ],
  ],
}
