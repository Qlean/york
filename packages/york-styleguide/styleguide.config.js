const path = require('path');

module.exports = {
  title: 'QLEAN STYLE',
  components: '../york-web/src/components/**/*.js',
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js')
    const dir = path.basename(path.dirname(componentPath))
    return `import { ${dir} } from '@qlean/york-react-native';`
  },
  template: {
    favicon: 'https://assets-cdn.github.com/favicon.ico',
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto'
        }
      ]
    }
  },
  theme: {
    color: {
      linkHover: '#20A052'
    },
    fontFamily: {
      base: 'Museo Sans'
    }
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
