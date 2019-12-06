import React, { useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from '@qlean/york-core'

import { Text } from 'york-web/components/primitive'
import { GridContainer, GridColumn } from 'york-web/components/simple'
import {
  borderRadiuses,
  shadows,
  sizes,
  media,
  mobileHorizontalPadding,
} from 'york-web/utils'

import CloseIcon from './assets/close.svg'

const StyledWindow = styled.div`
  position: relative;
  background-color: ${colors.white};
  border-radius: ${borderRadiuses.large};
  ${media.desktop(`
    margin: auto;
  `)}
  ${media.mobile(`
    border-radius: 0;
    width: 100%;
  `)}
`

const StyledContent = styled.div`
  padding: ${sizes[6]}px;
  ${media.mobile(`
    height: 100%;
    box-sizing: border-box;
    padding-left: ${mobileHorizontalPadding}px;
    padding-right: ${mobileHorizontalPadding}px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  `)}
`

const StyledStickyContainer = styled.div`
  position: sticky;
  ${media.mobile(`
    display: none;
  `)}
`

/**
 * В Сафари на iOS все довольно грустно с поддержкой как, sticky так fixed. Иконка продублирована
 * чтобы не добавлять z-index и не перезаписывать top у sticky-контейнера.
 */
const StyledAbsoluteContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  ${media.desktop(`
    display: none;
  `)}
`

const iconSize = 32

const StyledIconContainer = styled.div`
  position: absolute;
  top: ${sizes[4]}px;
  right: ${sizes[4]}px;
  width: ${iconSize}px;
  height: ${iconSize}px;
  background-color: ${colors.white};
  border-radius: ${borderRadiuses.round};
  box-shadow: ${shadows.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    opacity: 0.7;
  }
`

const StyledTitle = styled.div`
  margin-right: ${iconSize + sizes[2]}px;
  margin-bottom: ${sizes[4]}px;
`

const Window = ({ title, children, onRequestClose, ...rest }) => {
  const windowRef = useRef()
  const stickyContainerRef = useRef()

  /**
   * Залипающий элемент является прямым потомком оверлея и учитывает его паддинг. Это нужно
   * компенсировать. Позицию скролла тоже проверяем на всякий (странный) случай.
   */
  useLayoutEffect(() => {
    const { y } = windowRef.current.getBoundingClientRect()
    const scrollY = windowRef.current.parentElement.scrollTop
    stickyContainerRef.current.style.top = `-${y + scrollY}px`
  })

  const closeIcon = (
    <StyledIconContainer onClick={onRequestClose}>
      <CloseIcon />
    </StyledIconContainer>
  )

  return (
    <StyledWindow ref={windowRef} {...rest}>
      <StyledStickyContainer ref={stickyContainerRef}>
        {closeIcon}
      </StyledStickyContainer>
      <StyledContent>
        <GridContainer>
          <GridColumn columns={4} mobileProps={{ columns: 12 }}>
            {title && (
              <StyledTitle>
                <Text preset="header3">{title}</Text>
              </StyledTitle>
            )}
            {children}
          </GridColumn>
        </GridContainer>
      </StyledContent>
      <StyledAbsoluteContainer>{closeIcon}</StyledAbsoluteContainer>
    </StyledWindow>
  )
}

Window.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  onRequestClose: PropTypes.func.isRequired,
}

export default Window
