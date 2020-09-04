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

export const componentsShape = PropTypes.objectOf(PropTypes.elementType.isRequired)

export const headerPropTypes = {
  isNavigationAvailable: PropTypes.bool.isRequired,
  isProfileAvailable: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isPlusSubscriber: PropTypes.bool.isRequired,
  defaultTab: PropTypes.string,
  selectedLevelOneItem: PropTypes.string,
  selectedLevelTwoItem: PropTypes.string,
  selectedProfileItem: PropTypes.string,
  selectedRegion: PropTypes.string,
  phone: PropTypes.string,
  callbacks: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
  components: PropTypes.objectOf(PropTypes.elementType.isRequired).isRequired,
  content: PropTypes.shape({
    regions: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
    tabs: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
    profile: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
  }).isRequired,
  hideTabs: PropTypes.bool,
}

/*
 * Отступ по умолчанию, нужен, чтобы меню скролилось не впритык, а было видно следующий элемент меню
 * давая понять пользователю, что можно и поскролить.
 */
const defaultOffset = 30

/*
 * Хелпер для подскроливания контейнера при клике на элемент, чтобы он попадал во вьюпорт
 */
export const scrollHelper = (containerNode, itemNode) => {
  const containerLeftPoint = containerNode.scrollLeft
  const containerRightPoint = containerLeftPoint + containerNode.clientWidth

  const itemLeftPoint = itemNode.offsetLeft
  const itemRightPoint = itemLeftPoint + itemNode.clientWidth

  const isLeftItemOverflow = containerLeftPoint > itemLeftPoint
  const isRightItemOverflow = containerRightPoint < itemRightPoint

  if (isLeftItemOverflow || isRightItemOverflow) {
    containerNode.scrollTo({
      left: itemLeftPoint - defaultOffset,
      behavior: 'smooth',
    })
  }
}
