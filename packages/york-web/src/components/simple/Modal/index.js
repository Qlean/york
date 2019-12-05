import React, { useRef, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import { rgbaColors } from '@qlean/york-core'

import { uiPoint, media, useKeyUp } from 'york-web/utils'

import Window from './Window'

const StyledModal = styled.div`
  position: fixed;
  top: 0px;
  left: 500px;
  right: 0px;
  bottom: 0px;
  background-color: rgba(
    ${rgbaColors.black.r},
    ${rgbaColors.black.g},
    ${rgbaColors.black.b},
    0.5
  );
  padding: ${uiPoint * 20}px 0;
  overflow-y: auto;
  box-sizing: border-box;
  display: flex;
`

let mountedNodes = []

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

const Modal = ({ isOpen, className, children, onRequestClose, ...rest }) => {
  const overlayRef = useRef(null)
  const nodeRef = useRef(document.createElement('div'))
  const shouldCloseRef = useRef(true)

  const [isMounted, setIsMounted] = useState(false)

  useKeyUp('Escape', onRequestClose)

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
      /////
      console.log(mountedNodes, 'lock body!')
    } else {
      console.log(mountedNodes, 'unlock body!')
    }

    return () => {
      unmountNode(node)
      if (!mountedNodes.length) {
        console.log(mountedNodes, 'unlock body!!!')
      }
    }
  }, [isOpen])

  /**
   * Этот коллбэк проверяет где находится курсор на тот момент когда пользователь отпускает мышь.
   * Если это не оверлей, то закрывать модалку не нужно. Оно всегда срабатывает перед onClick.
   */
  const onMouseUp = e => {
    shouldCloseRef.current = e.target === overlayRef.current
  }

  const onClick = e => {
    if (e.target === overlayRef.current && shouldCloseRef.current)
      onRequestClose()
  }

  /**
   * Дополнительная проверка на isMounted нужна чтобы не рендерить ничего в портал, которого нет
   * в DOM. Это не вызовет ошибок, но, например, getBoundingClientRect перестанет работать.
   */
  return isOpen && isMounted
    ? ReactDOM.createPortal(
        <StyledModal
          ref={overlayRef}
          onMouseUp={onMouseUp}
          onClick={onClick}
          {...rest}
        >
          {children}
        </StyledModal>,
        nodeRef.current,
      )
    : null
}

Modal.Window = Window

export default Modal
