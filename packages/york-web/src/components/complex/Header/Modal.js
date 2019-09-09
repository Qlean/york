import React, { createRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Root = styled.div`
  position: fixed;
  z-index: ${({ zIndex }) => zIndex || 9999};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

/**
 * Если вешать fixed на body, то браузер отматывает всю страницу в самый верх, и не возвращаем после
 * закрытия попапа.
 * Нужно запоминать текущую позицию скролла перед открытием, и возвращать после закрытия
 */
export default function Modal({ children, zIndex }) {
  const bodyRef = createRef()
  const marginTopRef = createRef()
  const topRef = createRef()

  useEffect(() => {
    // запоминаем body
    bodyRef.current = document.querySelector('body')

    // запоминаем его margin (по умолчанию 5 от браузера, и его обычно убирают нормолайзером)
    marginTopRef.current = bodyRef.current.style.marginTop

    // запоминаем текущий скролл страницы
    topRef.current = window.scrollY

    // фиксируем body, с запомненным скролом
    bodyRef.current.style.top = `-${topRef.current + marginTopRef.current}px`
    bodyRef.current.style.position = 'fixed'
    bodyRef.current.style.paddingRight = '15px' // под скролл (можно и его тоже каклькулировать)
    bodyRef.current.style.width = '100%'

    // сбрасываем стили, и отматываем страницу к исходному состоянию
    return () => {
      bodyRef.current.style.top = ''
      bodyRef.current.style.position = ''
      bodyRef.current.style.paddingRight = ''
      window.scrollTo(0, topRef.current + marginTopRef.current)
    }
  }, [])

  return ReactDOM.createPortal(
    <Root aria-modal aria-hidden tabIndex={-1} role="dialog" zIndex={zIndex}>
      {children}
    </Root>,
    document.body,
  )
}
