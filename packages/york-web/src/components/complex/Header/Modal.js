import React, { createRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Root = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export default function Modal({ children }) {
  const someRef = createRef()

  useEffect(() => {
    someRef.current = {}
    someRef.current.body = document.querySelector('body')
    someRef.current.marginTop = someRef.current.body.style.marginTop
    someRef.current.top = window.scrollY

    someRef.current.body.style.top = `-${someRef.current.top +
      someRef.current.marginTop}px`
    someRef.current.body.style.position = 'fixed'
    someRef.current.body.style.paddingRight = '15px'
    someRef.current.body.style.width = '100%'

    return () => {
      someRef.current.body.style.top = ''
      someRef.current.body.style.position = ''
      someRef.current.body.style.paddingRight = ''
      window.scrollTo(0, someRef.current.top + someRef.current.marginTop)
    }
  }, [])

  return ReactDOM.createPortal(
    <Root aria-modal aria-hidden tabIndex={-1} role="dialog">
      {children}
    </Root>,
    document.body,
  )
}
