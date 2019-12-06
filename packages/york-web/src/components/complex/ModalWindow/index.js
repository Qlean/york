import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Modal } from 'york-web/components/primitive'
import { media, sizes } from 'york-web/utils'

import Window from './Window'

const StyledModal = styled(Modal)`
  display: flex;
  padding: ${sizes[20]}px 0;
  box-sizing: border-box;
  ${media.desktop(`
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  `)}
  ${media.mobile(`
    padding: 0;
  `)}
`

/**
 * Расширенная версия компонента `Modal`, включающая в себя готовое окно с заголовком и кнопкой
 * закрытия. Кроме указанных принимает все пропсы, которые принимает `Modal`.
 */
const ModalWindow = ({ title, children, ...rest }) => {
  return (
    <StyledModal {...rest}>
      <Window title={title} onRequestClose={rest.onRequestClose}>
        {children}
      </Window>
    </StyledModal>
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
