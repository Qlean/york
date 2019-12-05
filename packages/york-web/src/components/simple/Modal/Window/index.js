import React, { useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'

import { colors } from '@qlean/york-core'

import { Text, Separator } from 'york-web/components/primitive'
import { uiPoint, borderRadiuses, shadows, sizes, media } from 'york-web/utils'

import CloseIcon from './assets/close.svg'

const StyledWindow = styled.div`
  position: relative;
  margin: auto;
  background-color: ${colors.white};
  padding: ${sizes[6]}px;
  border-radius: ${borderRadiuses.large};

  width: 420px;
`

const StyledStickyContainer = styled.div`
  top: -70px;
  position: sticky;
`

const StyledIconContainer = styled.div`
  position: absolute;
  top: -${sizes[2]}px;
  right: -${sizes[2]}px;
  width: 32px;
  height: 32px;
  background-color: ${colors.white};
  border-radius: ${borderRadiuses.round};
  box-shadow: ${shadows.medium};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Window = ({ title, children, ...rest }) => {
  const windowRef = useRef()
  useLayoutEffect(() => {
    const rect = windowRef.current.getBoundingClientRect()
    console.log(windowRef.current, rect.height)
  })
  return (
    <StyledWindow ref={windowRef}>
      <StyledStickyContainer>
        <StyledIconContainer>
          <CloseIcon />
        </StyledIconContainer>
      </StyledStickyContainer>
      {title && <Text preset="header3">{title}</Text>}
      {title && <Separator height={4} />}
      {children}
    </StyledWindow>
  )
}

export default Window
