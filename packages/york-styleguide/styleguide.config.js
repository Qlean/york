const path = require('path')

const yorkWebPath = path.resolve(__dirname, '../york-web/src')
const yorkCorePath = path.resolve(__dirname, '../york-core/src')

module.exports = {
  title: 'Qlean Design System',
  components: ['../york-web/src/components/**/*.js'],
  webpackConfig: require('./webpack.config.js'),
  exampleMode: 'collapse',
  skipComponentsWithoutExample: true,
  pagePerSection: true,
  moduleAliases: {
    '@qlean/york-web': yorkWebPath,
    '@qlean/york-core': yorkCorePath,
  },
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
