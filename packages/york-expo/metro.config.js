const path = require('path')
const R = require('ramda')

/**
 * Для простоты Экспо использует свои версии react, react-native и прочего. Модули не резолвятся из
 * корневой папки, поэтому все зависимости york-core и york-react-native нужно разруливать вручную.
 */

/**
 * Пакеты собираются из исходников, это упрощает отладку, дает бесплатный live reload и позволяет
 * запускать Экспо не стартуя бабель и пересборку.
 */
const yorkCoreSrc = path.resolve(__dirname, '../york-core/src')
const yorkReactNativeSrc = path.resolve(__dirname, '../york-react-native/src')

/**
 * Зависимости york-core и york-react-native. К сожалению, нельзя резолвить всю внешнюю node_modules
 * целиком, это приводит к ошибкам с дублирование пакетов и даже прямое указание пути
 * в extraNodeModules не спасает. Что грустно, нужно прописывать не только прямые зависимости, но и
 * зависимости зависимостей. В принципе, можно продублировать эти пакеты в york-expo, но пока
 * в этом нет необходимости.
 */
const externalModuleFolders = [
  'ramda',
  'prop-types',
  'react-is',
  'object-assign',
].map(name => path.resolve(__dirname, `../../node_modules/${name}`))

const getLocalDependencies = R.pipe(
  R.map(name => [name, path.resolve(__dirname, `node_modules/${name}`)]),
  R.fromPairs,
)

const getExternalDependencies = R.pipe(
  R.map(name => [name, path.resolve(__dirname, `../../node_modules/${name}`)]),
  R.fromPairs,
)

module.exports = {
  projectRoot: __dirname,
  resolver: {
    extraNodeModules: {
      '@qlean/york-core': yorkCoreSrc,
      '@qlean/york-react-native': yorkReactNativeSrc,
      'york-react-native': yorkReactNativeSrc,

      // Зависимости york-core и york-react-native которые следует брать из корневой директории
      ...getLocalDependencies(['react', 'react-native', '@babel/runtime']),

      // Зависимости york-core и york-react-native которые следует брать из этой директории
      ...getExternalDependencies(['ramda', 'prop-types']),
    },
  },

  // Неудачное название параметра, на самом деле это директории из которых резолвятся зависимости
  watchFolders: [yorkCoreSrc, yorkReactNativeSrc, ...externalModuleFolders],
}
