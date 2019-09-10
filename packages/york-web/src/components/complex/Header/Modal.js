import React, { createRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import { getScrollbarWidth, zIndexes } from 'york-web/utils'

const StyledModal = styled.div`
  position: fixed;
  z-index: ${zIndexes.modal};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export default function Modal({ children }) {
  const bodyRef = createRef()
  const marginTopRef = createRef()
  const scrollYRef = createRef()

  useEffect(() => {
    /**
     * Чтобы модалка не дергалась на тачскинах мы вешаем `fixed` на `<body>`. Однако браузер при
     * этом отматывает всю страницу в самый верх, так что после закрытия попапа ее нужно возвращать
     * на место.
     */
    bodyRef.current = document.querySelector('body')

    // margin тоже желательно запомнить, так как по умолчанию он есть
    marginTopRef.current = bodyRef.current.style.marginTop
    scrollYRef.current = window.scrollY

    const offsetY = scrollYRef.current + marginTopRef.current

    bodyRef.current.style.top = `-${offsetY}px`
    bodyRef.current.style.position = 'fixed'
    bodyRef.current.style.paddingRight = `${getScrollbarWidth()}px`
    bodyRef.current.style.width = '100%'

    return () => {
      bodyRef.current.style.top = ''
      bodyRef.current.style.position = ''
      bodyRef.current.style.paddingRight = ''
      window.scrollTo(0, offsetY)
    }
  }, [])

  return ReactDOM.createPortal(
    <StyledModal>{children}</StyledModal>,
    document.body,
  )
}
