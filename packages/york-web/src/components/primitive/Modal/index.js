import React, { useRef, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { rgbaColors } from '@qlean/york-core'

import { uiPoint, media, useKeyUp } from 'york-web/utils'

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
  padding: ${uiPoint * 20}px 0;
  overflow-y: auto;
  box-sizing: border-box;
  display: flex;
  ${media.mobile(`
    padding: 0;
  `)}
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

/**
 * Модалочка!
 */
const Modal = ({ isOpen, children, onRequestClose, ...rest }) => {
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
  name: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onRequestClose: PropTypes.func.isRequired,
}

export default Modal
