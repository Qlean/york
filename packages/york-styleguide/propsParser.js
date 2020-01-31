const reactDocgen = require('react-docgen')
const reactDocgenTs = require('react-docgen-typescript')
const R = require('ramda')

const { colors } = require('@qlean/york-core/lib/styles/colors')
const { borderRadiuses, shadows } = require('@qlean/york-web/lib/utils')

/*
  react-docgen does not follow imports, see https://github.com/reactjs/react-docgen/issues/185 and
  other similar issues. It's probably possible to hack a generic solution but for now hard patching
  seems enough.
*/

const formatEnumTypeValues = R.map(value => ({ value, computed: false }))

const formatEnumTypeStringValue = string => {
  switch (string) {
    case 'Object.keys(borderRadiuses)':
      return formatEnumTypeValues(R.keys(borderRadiuses))
    case 'Object.keys(shadows)':
      return formatEnumTypeValues(R.keys(shadows))
    case 'Object.keys(colors)':
    case '...Object.keys(colors)':
      return formatEnumTypeValues(R.keys(colors))
    default:
      return string
  }
}

const formatEnumTypeArrayValue = R.pipe(
  R.map(value => {
    const formattedValue = formatEnumTypeStringValue(value.value)
    return typeof formattedValue === 'string' ? value : formattedValue
  }),
  R.flatten,
)

const formatEnumType = type => ({
  ...type,
  value: Array.isArray(type.value)
    ? formatEnumTypeArrayValue(type.value)
    : formatEnumTypeStringValue(type.value),
})

const formatProp = prop => {
  const { type } = prop
  return type.name !== 'enum' ? prop : { ...prop, type: formatEnumType(type) }
}

module.exports = (filePath, source, resolver, handlers) => {
  const fileExtension = R.last(filePath.split('.'))

  if (fileExtension === 'js') {
    return reactDocgen
      .parse(source, resolver, handlers)
      .map(({ props, ...rest }) => ({
        props: R.map(formatProp, props),
        ...rest,
      }))
  }

  if (fileExtension === 'ts' || fileExtension === 'tsx') {
    return reactDocgenTs
      .withDefaultConfig()
      .parse(filePath, source, resolver, handlers)
  }

  return null
}
