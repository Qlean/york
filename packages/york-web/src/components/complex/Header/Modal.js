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
  const bodyRef = createRef()
  const marginTopRef = createRef()
  const topRef = createRef()

  useEffect(() => {
    bodyRef.current = document.querySelector('body')
    marginTopRef.current = bodyRef.current.style.marginTop
    topRef.current = window.scrollY

    bodyRef.current.style.top = `-${topRef.current + marginTopRef.current}px`
    bodyRef.current.style.position = 'fixed'
    bodyRef.current.style.paddingRight = '15px'
    bodyRef.current.style.width = '100%'

    return () => {
      bodyRef.current.style.top = ''
      bodyRef.current.style.position = ''
      bodyRef.current.style.paddingRight = ''
      window.scrollTo(0, topRef.current + marginTopRef.current)
    }
  }, [])

  return ReactDOM.createPortal(
    <Root aria-modal aria-hidden tabIndex={-1} role="dialog">
      {children}
    </Root>,
    document.body,
  )
}
