module.exports = {
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
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          'york-web': './src',
        },
      },
    ],
  ],
}
