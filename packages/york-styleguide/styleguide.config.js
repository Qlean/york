const path = require('path')

const propsParser = require('./propsParser')

const lernaConfig = require('../../lerna.json')
const yorkAnalyticsPackage = require('../york-analytics/package.json')
const yorkCorePackage = require('../york-core/package.json')
const yorkWebPackage = require('../york-web/package.json')
const yorkReactNativePackage = require('../york-react-native/package.json')

const getComponentPathLine = originalPath => {
  const pathSections = originalPath.split('/')
  const lib = pathSections[1]
  const component = pathSections[pathSections.length - 2]
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
  ignore: ['**/*/locales.js'],
  context: {
    Example: path.resolve(__dirname, 'components/Example'),
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'components/Wrapper'),
  },
  sections: [
    {
      name: 'york',
      description: `Версия ${lernaConfig.version}`,
      content: './README.md',
    },
    {
      name: 'york-analytics',
      description: `Версия ${yorkAnalyticsPackage.version}`,
      content: '../york-analytics/README.MD',
      sections: [
        {
          name: 'AnalyticsContext',
          content: '../york-analytics/docs/context.md',
        },
        {
          name: 'components',
          components: '../york-analytics/src/components/**/*.tsx',
        },
        {
          name: 'eventActionTypes',
          content: '../york-analytics/docs/eventActionTypes.md',
        },
        {
          name: 'hooks',
          content: '../york-analytics/docs/hooks.md',
        },
      ],
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
          name: 'fetcher',
          content: '../york-core/docs/fetcher.md',
        },
        {
          name: 'sizes',
          content: '../york-core/docs/sizes.md',
        },
        {
          name: 'utils',
          sections: [
            {
              name: 'formatters',
              sections: [
                {
                  name: 'capitalize',
                  content: '../york-core/docs/formatters/capitalize.md',
                },
                {
                  name: 'formatMoney',
                  content: '../york-core/docs/formatters/formatMoney.md',
                },
                {
                  name: 'formatPhone',
                  content: '../york-core/docs/formatters/formatPhone.md',
                },
                {
                  name: 'formatPhoneHref',
                  content: '../york-core/docs/formatters/formatPhoneHref.md',
                },
              ],
            },
            {
              name: 'validators',
              sections: [
                {
                  name: 'validateCardNumber',
                  content: '../york-core/docs/validators/validateCardNumber.md',
                },
                {
                  name: 'validateCardExpiry',
                  content: '../york-core/docs/validators/validateCardExpiry.md',
                },
                {
                  name: 'validateCardSecureCode',
                  content:
                    '../york-core/docs/validators/validateCardSecureCode.md',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'york-web',
      description: `Версия ${yorkWebPackage.version}`,
      content: '../york-web/README.md',
      sections: [
        {
          name: 'fonts',
          content: '../york-web/docs/fonts.md',
        },
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
          name: 'complex',
          components: '../york-web/src/components/complex/**/index.js',
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
              name: 'fontFamily',
              content: '../york-web/docs/fontFamily.md',
            },
            {
              name: 'media',
              content: '../york-web/docs/media.md',
            },
            {
              name: 'minScreenWidth',
              content: '../york-web/docs/minScreenWidth.md',
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
      sections: [
        {
          name: 'components',
          components: '../york-react-native/src/components/**/*.js',
        },
        {
          name: 'utils',
          description: 'Утилиты и константы',
          sections: [
            {
              name: 'borderRadiuses',
              content: '../york-react-native/docs/borderRadiuses.md',
            },
            {
              name: 'fontFamily',
              content: '../york-react-native/docs/fontFamily.md',
            },
            {
              name: 'hooks',
              content: '../york-react-native/docs/hooks.md',
            },
            {
              name: 'safeArea',
              content: '../york-react-native/docs/safeArea.md',
            },
            {
              name: 'sizes',
              content: '../york-react-native/docs/sizes.md',
            },
          ],
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
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://storage.googleapis.com/pltf-prod-plus-static-bucket/platform-libraries-shared-static/master/fonts/fonts.css',
        },
      ],
    },
  },
  require: ['core-js'],
}
