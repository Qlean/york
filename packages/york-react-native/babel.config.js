module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          'york-web': '../york-web/src',
          'york-react-native': './src',
        },
      },
    ],
  ],
}
