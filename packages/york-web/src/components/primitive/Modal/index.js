import React, { useRef, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as R from 'ramda'

import { rgbaColors } from '@qlean/york-core'

import { useKeyUp } from 'york-web/utils'

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(
    ${rgbaColors.black.r},
    ${rgbaColors.black.g},
    ${rgbaColors.black.b},
    0.5
  );
`

let mountedNodes = []
let isBodyLocked = false
const bodyStyles = {}

const addStylesToNode = (styles, node) =>
  R.forEachObjIndexed((value, key) => {
    // eslint-disable-next-line no-param-reassign
    node.style[key] = value
  }, styles)

const mountNode = node => {
  document.body.appendChild(node)
  mountedNodes.push(node)
}

const unmountNode = node => {
  if (node.parentNode === document.body) {
    document.body.removeChild(node)
    mountedNodes = mountedNodes.filter(mountedNode => mountedNode !== node)
  }
}

const cancelBodyScroll = () => {
  document.body.scrollTop = 0
}

const getPortal = selector => {
  if (typeof document === 'undefined') {
    return null
  }

  if (selector === undefined) {
    return document.createElement('div')
  }

  return document.querySelector(selector)
}

/**
 * Модальное окно. Включает в себя оверлей на весь экран. Блокирует скроллинг на `<body>`,
 * закрывается по нажатию на Esc. Не стилизует контент и не вмешивается в его позиционирование.
 */
const Modal = ({
  isOpen,
  children,
  onRequestClose,
  portalSelector,
  ...rest
}) => {
  const bodyRef = useRef()
  const scrollYRef = useRef()

  const overlayRef = useRef()
  const nodeRef = useRef(getPortal(portalSelector))
  const shouldCloseRef = useRef(true)

  const [isMounted, setIsMounted] = useState(false)

  /**
   * Чтобы модалка не дергалась на тачскинах мы вешаем fixed на <body>. Однако браузер при этом
   * отматывает всю страницу в самый верх, так что после закрытия попапа ее нужно возвращать
   * на место. Иногда в подобных решения используется overflow:hidden, но я не нашел причин его
   * применять.
   *
   * cancelBodyScroll это дополнительный костыль для iOS, где body все еще может перехватывать
   * события скролла, даже с position: fixed. Например, если открыть модалку, и сразу же
   * проскроллить вверх, то некоторое время скроллинг будет недоступен. Функция cancelBodyScroll
   * решает эту проблему.
   *
   * Источник решения: https://stackoverflow.com/questions/48873171
   */
  const lockBodyScroll = () => {
    scrollYRef.current = window.scrollY

    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth

    const lockStyles = {
      top: `-${scrollYRef.current}px`,
      position: 'fixed',
      width: '100%',
      boxSizing: 'border-box',
      paddingRight: `${scrollBarWidth}px`,
    }

    R.pipe(
      R.keys,
      R.forEach(key => {
        bodyStyles[key] = bodyRef.current.style[key] || ''
      }),
    )(lockStyles)

    addStylesToNode(lockStyles, bodyRef.current)

    document.addEventListener('touchmove', cancelBodyScroll)

    isBodyLocked = true
  }

  const unlockBodyScroll = () => {
    if (isBodyLocked) {
      addStylesToNode(bodyStyles, bodyRef.current)

      window.scrollTo(0, scrollYRef.current)

      document.removeEventListener('touchmove', cancelBodyScroll)

      isBodyLocked = false
    }
  }

  useKeyUp('Escape', onRequestClose)

  useEffect(() => {
    bodyRef.current = document.querySelector('body')
  }, [])

  useEffect(() => {
    const node = nodeRef.current

    if (isOpen) {
      mountNode(node)
      setIsMounted(true)
    } else {
      unmountNode(node)
      setIsMounted(false)
    }

    /**
     * Логика блока скролла связана не с конкретным модальным окном, а с тем открыты ли вообще
     * какие-то модальные окна. Если этого не делать, то при множественных модальных окнах скролл
     * будет некорректно разблокирован при закрытии одного из них.
     */
    if (mountedNodes.length) {
      lockBodyScroll()
    } else {
      unlockBodyScroll()
    }

    return () => {
      unmountNode(node)
      if (!mountedNodes.length) {
        unlockBodyScroll()
      }
    }
  }, [isOpen])

  /**
   * В этих коллбэках мы проверяем где находится мышь на начало и на конец клика. Если это
   * не оверлей, то закрывать модалку не нужно. Они всегда срабатывает перед onClick.
   */
  const onMouseDown = e => {
    shouldCloseRef.current = e.target === overlayRef.current
  }

  const onMouseUp = e => {
    if (shouldCloseRef.current) {
      shouldCloseRef.current = e.target === overlayRef.current
    }
  }

  const onClick = () => {
    if (shouldCloseRef.current) onRequestClose()
  }

  /**
   * Фрагмент нужен чтобы react-docgen распознал компонент.
   *
   * Дополнительная проверка на isMounted требуется чтобы не рендерить ничего в портал, которого нет
   * в DOM. Это не вызовет ошибок, но, например, getBoundingClientRect у детей перестанет работать.
   */
  return (
    <>
      {isOpen && isMounted
        ? ReactDOM.createPortal(
            <StyledModal
              ref={overlayRef}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
              onClick={onClick}
              {...rest}
            >
              {children}
            </StyledModal>,
            nodeRef.current,
          )
        : null}
    </>
  )
}

Modal.propTypes = {
  /** Имя окна. Используется для аналитики */
  name: PropTypes.string.isRequired,
  /** Открыто ли окно */
  isOpen: PropTypes.bool.isRequired,
  /** Содержимое окна */
  children: PropTypes.node.isRequired,
  /** Коллбэк для закрытия окна */
  onRequestClose: PropTypes.func.isRequired,
  /** QuerySelector портала, если не указан, создаст div сам */
  portalSelector: PropTypes.string,
}

Modal.defaultProps = {
  portalSelector: undefined,
}

export default Modal
