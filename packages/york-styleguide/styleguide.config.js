const path = require('path')

const propsParser = require('./propsParser')

const lernaConfig = require('../../lerna.json')
const yorkCorePackage = require('../york-core/package.json')
const yorkWebPackage = require('../york-web/package.json')
const yorkReactNativePackage = require('../york-react-native/package.json')

const getComponentPathLine = originalPath => {
  const pathSections = originalPath.split('/')
  const lib = pathSections[1]
  const component = pathSections[4]
  return `import { ${component} } from '@qlean/${lib}'`
}

module.exports = {
  title: 'Qlean Design System',
  version: lernaConfig.version,
  webpackConfig: require('./webpack.config.js'),
  styleguideDir: 'lib',
  exampleMode: 'collapse',
  skipComponentsWithoutExample: true,
  pagePerSection: true,
  getComponentPathLine,
  sections: [
    {
      name: 'york',
      description: `Версия ${lernaConfig.version}`,
      content: './README.md',
    },
    {
      name: 'york-core',
      description: `Версия ${yorkCorePackage.version}`,
      content: '../york-core/README.md',
      sections: [
        {
          name: 'colors',
          content: '../york-core/docs/colors.md',
        },
        {
          name: 'sizes',
          content: '../york-core/docs/sizes.md',
        },
      ],
    },
    {
      name: 'york-web',
      description: `Версия ${yorkWebPackage.version}`,
      content: '../york-web/README.md',
      sections: [
        {
          name: 'primitive',
          description:
            'Примитивные компоненты, самые базовые строительные блоки интерфейса',
          components: '../york-web/src/components/primitive/**/*.js',
        },
        {
          name: 'simple',
          description: 'Простые компоненты, собираются из примитивов',
          components: '../york-web/src/components/simple/**/*.js',
        },
        {
          name: 'inputs',
          content: '../york-web/docs/inputs.md',
          components: '../york-web/src/components/inputs/**/*.js',
        },
        {
          name: 'utils',
          description: 'Утилиты и константы',
          sections: [
            {
              name: 'borderRadiuses',
              content: '../york-web/docs/borderRadiuses.md',
            },
            {
              name: 'media',
              content: '../york-web/docs/media.md',
            },
            {
              name: 'shadows',
              content: '../york-web/docs/shadows.md',
            },
            {
              name: 'sizes',
              content: '../york-web/docs/sizes.md',
            },
            {
              name: 'transitions',
              content: '../york-web/docs/transitions.md',
            },
            {
              name: 'zIndexes',
              content: '../york-web/docs/zIndexes.md',
            },
          ],
        },
      ],
    },
    {
      name: 'york-react-native',
      description: `Версия ${yorkReactNativePackage.version}`,
      content: '../york-react-native/README.md',
      components: '../york-react-native/src/components/**/*.js',
      sections: [
        {
          name: 'hooks',
          content: '../york-react-native/docs/hooks.md',
        },
      ],
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
    ReactComponent: {
      tabs: {
        marginBottom: 0,
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
