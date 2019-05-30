const reactDocgen = require('react-docgen')
const R = require('ramda')

const { borderRadiuses, shadows } = require('@qlean/york-web/lib/styles')

/*
  react-docgen does not follow imports, see https://github.com/reactjs/react-docgen/issues/185 and
  other similar issues. It's probably possible to hack a generic solution but for now hard patching
  seems enough.
*/

const formatEnumTypeValue = (type, values) => ({
  ...type,
  value: R.map(value => ({ value, computed: false }), values),
})

const formatEnumType = type => {
  switch (type.value) {
    case 'Object.keys(borderRadiuses)':
      return formatEnumTypeValue(type, R.keys(borderRadiuses))
    case 'Object.keys(shadows)':
      return formatEnumTypeValue(type, R.keys(shadows))
    default:
      return type
  }
}

const formatProp = prop => {
  const { type } = prop
  return type.name !== 'enum' ? prop : { ...prop, type: formatEnumType(type) }
}

module.exports = (filePath, source, resolver, handlers) =>
  reactDocgen.parse(source, resolver, handlers).map(({ props, ...rest }) => ({
    props: R.map(formatProp, props),
    ...rest,
  }))
