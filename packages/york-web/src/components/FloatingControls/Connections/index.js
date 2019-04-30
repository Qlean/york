import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import { colors } from '@qlean/york-core'

import { transitions, g, shadows } from 'utils/styles'
import { messengersShape } from 'utils/propTypes'

import { FlexBase } from 'components/ui/flex'
import { Separator, Text } from 'components/ui'
import Messengers from 'components/Messengers'

import CloseIcon from './close.svg'

const StyledConnections = styled(FlexBase)`
  position: fixed;
  bottom: ${({ isVisible }) => (isVisible ? `${g(18)}px` : `${g(8)}px`)};
  right: ${g(4)}px;
  width: ${g(64)}px;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  background-color: ${colors.white};
  border-radius: 25px;
  box-shadow: ${shadows.medium};
  transition: ${transitions.medium};
  @media (max-width: 420px) {
    width: 100%;
    right: 0;
    left: 0;
    bottom: ${({ isVisible }) => (isVisible ? '0' : `${-g(8)}px`)};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`

const StyledOverlay = styled.div`
  @media (max-width: 420px) {
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: ${colors.black};
    transition: ${transitions.long};
    opacity: ${({ isVisible }) => (isVisible ? '0.5' : '0')};
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  }
`

const StyledConnectionsContent = styled.div`
  flex-grow: 1;
`

const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  cursor: pointer;
  top: ${g(2)}px;
  right: ${g(2)}px;
  width: ${g(10)}px;
  height: ${g(10)}px;
`

const GlobalStyle = createGlobalStyle`
  body {
    @media (max-width: 420px) {
      ${({ isVisible }) =>
        isVisible
          ? `
        overflow: hidden;
        width: 100%;
        height: 100%;
      `
          : ''};
    }
  }
`

export default function Connections({
  isVisible,
  onClose,
  location,
  messengers,
  connectionsTitle,
  extraConnections,
}) {
  return (
    <Fragment>
      <StyledOverlay onClick={onClose} isVisible={isVisible} />
      <StyledConnections isVisible={isVisible} name="connections">
        <Separator width={6} />
        <StyledConnectionsContent>
          <Separator height={6} />
          <StyledCloseIcon onClick={onClose} name="close" />
          <Text preset="h4">{connectionsTitle}</Text>
          <Separator height={4} />
          {extraConnections &&
            extraConnections.length > 0 &&
            extraConnections.map(Connection => (
              <Fragment key={Connection.name}>
                <Connection />
                <Separator height={2} />
              </Fragment>
            ))}
          {messengers && (
            <Fragment>
              <Messengers
                location={location}
                messengers={messengers}
                withMobileFullWidth
              />
              <Separator height={2} />
            </Fragment>
          )}
          <Separator height={4} />
        </StyledConnectionsContent>
        <Separator width={6} />
      </StyledConnections>
      <GlobalStyle isVisible={isVisible} />
    </Fragment>
  )
}

Connections.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  messengers: PropTypes.arrayOf(PropTypes.shape(messengersShape).isRequired),
  connectionsTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  extraConnections: PropTypes.arrayOf(PropTypes.func),
}
