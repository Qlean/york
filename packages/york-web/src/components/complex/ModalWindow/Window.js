import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from '@qlean/york-core'

import { Text, Separator } from 'york-web/components/primitive'
import { GridContainer, GridColumn } from 'york-web/components/simple'
import {
  borderRadiuses,
  shadows,
  sizes,
  media,
  mobileHorizontalPadding,
} from 'york-web/utils'

import CloseIcon from './assets/close.svg'

const StyledWindowContainer = styled.div`
  position: relative;
  pointer-events: none;
  margin: auto;
  ${media.desktop(`
    padding: 100px 0;
  `)}
  ${media.mobile(`
    height: 100%;
  `)}
`

const StyledWindow = styled.div`
  pointer-events: auto;
  background-color: ${colors.white};
  border-radius: ${borderRadiuses.large};
  height: 100%;
  ${media.mobile(`
    border-radius: 0;
  `)}
`

const StyledContent = styled.div`
  padding: 0 ${sizes[6]}px;
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
  top: 0;
  ${media.mobile(`
    display: none;
  `)}
`

/**
 * В Сафари на iOS все довольно грустно с поддержкой как, sticky так fixed. Иконка продублирована
 * чтобы не добавлять z-index.
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

const Window = ({ title, size, children, onRequestClose, ...rest }) => {
  const closeIcon = (
    <StyledIconContainer onClick={onRequestClose}>
      <CloseIcon />
    </StyledIconContainer>
  )

  return (
    <StyledWindowContainer>
      <StyledWindow {...rest}>
        <StyledStickyContainer>{closeIcon}</StyledStickyContainer>
        <StyledContent>
          <Separator height={6} />
          <GridContainer>
            <GridColumn
              columns={size === 'l' ? 8 : 6}
              mobileProps={{ columns: 12 }}
            >
              {title && (
                <StyledTitle>
                  {React.isValidElement(title) ? (
                    title
                  ) : (
                    <Text preset="header3">{title}</Text>
                  )}
                </StyledTitle>
              )}
              {children}
            </GridColumn>
          </GridContainer>
          <Separator height={6} />
        </StyledContent>
        <StyledAbsoluteContainer>{closeIcon}</StyledAbsoluteContainer>
      </StyledWindow>
    </StyledWindowContainer>
  )
}

Window.propTypes = {
  title: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['m', 'l']).isRequired,
  children: PropTypes.node.isRequired,
  onRequestClose: PropTypes.func.isRequired,
}

export default Window
