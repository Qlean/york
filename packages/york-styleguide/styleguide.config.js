const path = require('path')

const propsParser = require('./propsParser')

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
      name: 'york-core',
      description: 'Стили и утилиты для всех приложений',
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
      name: 'york-web',
      description: 'Компоненты и утилиты для веб-приложений',
      content: '../york-web/README.md',
      components: '../york-web/src/components/**/*.js',
    },
  ],
  propsParser,
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
    StyleGuide: {
      footer: {
        display: 'none',
      },
    },
    Table: {
      cell: {
        lineHeight: '20px',
      },
    },
    Code: {
      code: {
        color: '#767676',
      },
    },
  },
  require: [path.join(__dirname, 'assets/fonts/index.css')],
}
