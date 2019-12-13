import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Modal } from 'york-web/components/primitive'
import { media } from 'york-web/utils'

import Window from './Window'

const StyledModal = styled(Modal)`
  display: flex;
  ${media.desktop(`
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  `)}
`

/**
 * Расширенная версия компонента `Modal`, включающая в себя готовое окно с заголовком и кнопкой
 * закрытия. Кроме указанных принимает все пропсы, которые принимает `Modal`.
 */
const ModalWindow = ({ title, size, children, ...rest }) => {
  return (
    <StyledModal {...rest}>
      <Window title={title} size={size} onRequestClose={rest.onRequestClose}>
        {children}
      </Window>
    </StyledModal>
  )
}

ModalWindow.defaultProps = {
  title: null,
  size: 'm',
}

ModalWindow.propTypes = {
  /** Заголовок окна. Если передан не элемент, то будет обернут в `<Text>` */
  title: PropTypes.node,
  /**
   * Размер окна: `m` равен 6 колонкам, а `l` — 8 колонкам. Не влияет на размер в мобильных
   * разрешениях.
   */
  size: PropTypes.oneOf(['m', 'l']),
  /** Содержимое окна */
  children: PropTypes.node.isRequired,
}

export default ModalWindow
