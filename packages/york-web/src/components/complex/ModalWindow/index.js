import React from 'react'
import PropTypes from 'prop-types'

import { Modal } from 'york-web/components/primitive'

import Window from './Window'

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
  title: PropTypes.node,
  children: PropTypes.node.isRequired,
}

export default ModalWindow
