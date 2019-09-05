import PropTypes from 'prop-types'

export const menuItemShape = PropTypes.exact({
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  callback: PropTypes.string,
  component: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object.isRequired),
})

export const callbacksShape = PropTypes.objectOf(PropTypes.func.isRequired)

export const componentsShape = PropTypes.objectOf(
  PropTypes.elementType.isRequired,
)
