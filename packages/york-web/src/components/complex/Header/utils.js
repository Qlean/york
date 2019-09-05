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

export const headerPropTypes = {
  isProfileAvailable: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isPlusSubscriber: PropTypes.bool.isRequired,
  defaultTab: PropTypes.string.isRequired,
  selectedLevelOneItem: PropTypes.string,
  selectedLevelTwoItem: PropTypes.string,
  selectedProfileItem: PropTypes.string,
  selectedRegion: PropTypes.string,
  callbacks: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
  components: PropTypes.objectOf(PropTypes.elementType.isRequired).isRequired,
  content: PropTypes.shape({
    phone: PropTypes.string,
    ///// proper shape
    regions: PropTypes.array.isRequired,
    tabs: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
    profile: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
    menu: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
  }).isRequired,
}
