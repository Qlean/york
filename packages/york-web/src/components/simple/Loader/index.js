import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { sizes } from '@qlean/york-web'
import { View } from 'york-web/components/primitive'

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`

const StyledContainer = styled(View)`
  height: 100%;
  width: 100%;
`

const StyledSpinner = styled.div`
  width: ${sizes[12]}px;
  height: ${sizes[12]}px;
  background: url(${require('./assets/loader_green.svg')}) center no-repeat;
  animation: ${rotate} 0.6s infinite linear;
`
/** Компонент отображения статуса загрузки. */
const Loader = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <StyledContainer justifyContent="center" alignItems="center">
        <StyledSpinner src={require('./assets/loader_green.svg')} alt="" />
      </StyledContainer>
    )
  }

  return children
}

Loader.propTypes = {
  children: PropTypes.node.isRequired,
  /** Статус загрузки */
  isLoading: PropTypes.bool.isRequired,
}

export default Loader
