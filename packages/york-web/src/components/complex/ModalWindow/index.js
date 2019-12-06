import React from 'react'
import PropTypes from 'prop-types'

import { Modal } from 'york-web/components/primitive'

import Window from './Window'

/**
 * Расширенная версия компонента `Modal`, включающая в себя готовое окно с заголовком и кнопкой
 * закрытия. Кроме указанных принимает все пропсы, которые принимает `Modal`.
 */
const ModalWindow = ({ title, children, ...rest }) => {
  return (
    <Modal {...rest}>
      <Window title={title} onRequestClose={rest.onRequestClose}>
        {children}
      </Window>
    </Modal>
  )
}

ModalWindow.defaultProps = {
  title: null,
}

ModalWindow.propTypes = {
  /** Заголовок окна. Если передан не элемент, то будет обернут в `<Text>` */
  title: PropTypes.node,
  /** Содержимое окна */
  children: PropTypes.node.isRequired,
}

export default ModalWindow
