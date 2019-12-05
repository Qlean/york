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
  transitions,
  media,
  mobileHorizontalPadding,
} from 'york-web/utils'

import CloseIcon from './assets/close.svg'

const StyledWindow = styled.div`
  position: relative;
  margin: auto;
  transition: ${transitions.short};
  ${media.mobile(`
    width: 100%;
    margin-bottom: 0;
  `)}
`

const StyledContent = styled.div`
  background-color: ${colors.white};
  padding: ${sizes[6]}px;
  border-radius: ${borderRadiuses.large};
  ${media.mobile(`
    border-radius: 0;
    padding-left: ${mobileHorizontalPadding}px;
    padding-right: ${mobileHorizontalPadding}px;
  `)}
`

const StyledStickyContainer = styled.div`
  position: sticky;
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
`

const StyledTitle = styled.div`
  margin-right: ${iconSize + sizes[2]}px;
  margin-bottom: ${sizes[4]}px;
`

const Window = ({ title, children, onRequestClose }) => {
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

  return (
    <StyledWindow ref={windowRef}>
      <StyledStickyContainer ref={stickyContainerRef}>
        <StyledIconContainer onClick={onRequestClose}>
          <CloseIcon />
        </StyledIconContainer>
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
    </StyledWindow>
  )
}

Window.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  onRequestClose: PropTypes.func.isRequired,
}

export default Window
