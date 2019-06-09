import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { sizes } from 'styles'

import Text from './Text'

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${sizes[8]}px;
  height: ${sizes[8]}px;
  background-color: ${colors.blue};
`

const StyledText = styled(Text)`
  color: ${colors.white};
`

const Box = ({ children, ...rest }) => {
  return (
    <StyledBox {...rest}>
      <StyledText>{children}</StyledText>
    </StyledBox>
  )
}

Box.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
}

const StyledContainer = styled.div`
  overflow: auto;
`

const Example = {
  Box,
  Container: StyledContainer,
}

export default Example
