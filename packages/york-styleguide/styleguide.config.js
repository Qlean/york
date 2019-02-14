const path = require('path');

module.exports = {
  components: '../york-web/src/components/**/*.js',
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js')
    const dir = path.basename(path.dirname(componentPath))
    return `import { ${dir} } from '@qlean/york-react-native';`
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
      ]
    },
  },
};
