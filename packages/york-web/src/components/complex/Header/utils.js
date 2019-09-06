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
    regions: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
    tabs: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
    profile: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
  }).isRequired,
}

// OFFSET нужен, чтобы меню скролилось не впритык, а было видно следующий элемент меню
// давая понять пользователю, что можно и поскролить
const OFFSET = 30

/**
 *
 * @param {*} containerNode DOM-нода со скролом, на ней и будет вызываться скролл
 * @param {*} itemNode DOM-нода, от которой и будет спроисходить вычисления
 * @param {*} options
 */
export const scrollHelper = (containerNode, itemNode, options = {}) => {
  const containerLeftPoint = containerNode.scrollLeft
  const containerRightPoint = containerLeftPoint + containerNode.clientWidth

  const itemLeftPoint = itemNode.offsetLeft
  const itemRightPoint = itemLeftPoint + itemNode.clientWidth

  const isLeftItemOverflow = containerLeftPoint > itemLeftPoint
  const isRightItemOverflow = containerRightPoint < itemRightPoint

  if (isLeftItemOverflow || isRightItemOverflow) {
    const offset = options.offset || OFFSET
    containerNode.scrollTo({ left: itemLeftPoint - offset, behavior: 'smooth' })
  }
}
