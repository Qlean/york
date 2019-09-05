// OFFSET нужен, чтобы меню скролилось не впритык, а было видно следующий элемент меню
// давая понять пользователю, что можно и поскролить
const OFFSET = 30

/**
 *
 * @param {*} containerNode DOM-нода со скролом, на ней и будет вызываться скролл
 * @param {*} itemNode DOM-нода, от которой и будет спроисходить вычисления
 * @param {*} options
 */
export default function scrollHelper(containerNode, itemNode, options = {}) {
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
