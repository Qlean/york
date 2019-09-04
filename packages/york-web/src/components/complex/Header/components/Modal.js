import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Root = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const Modal = ({ children }) =>
  ReactDOM.createPortal(
    <Root aria-modal aria-hidden tabIndex={-1} role="dialog">
      {children}
    </Root>,
    document.body,
  )

export default Modal
