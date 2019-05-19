const path = require('path')

const getComponentPathLine = originalPath => {
  const pathSections = originalPath.split('/')
  const lib = pathSections[1]
  const component = pathSections[4]
  return `import { ${component} } from '@qlean/${lib}'`
}

module.exports = {
  title: 'Qlean Design System',
  webpackConfig: require('./webpack.config.js'),
  styleguideDir: 'lib',
  exampleMode: 'collapse',
  skipComponentsWithoutExample: true,
  pagePerSection: true,
  getComponentPathLine,
  sections: [
    {
      name: 'Core',
      sections: [
        {
          name: 'colors',
          content: './core/colors.md',
        },
        {
          name: 'sizes',
          content: './core/sizes.md',
        },
      ],
    },
    {
      name: 'Web',
      components: '../york-web/src/components/**/*.js',
    },
    {
      name: 'Native',
      components: '../york-react-native/src/components/**/*.js',
      pagePerSection: true,
    },
  ],
  theme: {
    color: {
      link: '#222222',
      linkHover: '#20A052',
      sidebarBackground: '#F8F8F8',
      border: '#D9D9D9',
    },
    fontFamily: {
      base: 'Museo Sans',
    },
    borderRadius: 5,
    sidebarWidth: 250,
  },
  styles: {
    Logo: {
      logo: {
        color: '#222222',
        fontSize: '20px',
      },
    },
  },
  require: [path.join(__dirname, 'assets/fonts/index.css')],
}
