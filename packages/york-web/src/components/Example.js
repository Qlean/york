import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { sizes } from 'styles'

import Text from './Text'
import View from './View'

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

const StyledLabel = styled.label`
  user-select: none;
`

const Checkbox = ({ value, children, onChange }) => (
  <StyledLabel>
    <input type="checkbox" checked={value} onChange={onChange} />
    <Text>{children}</Text>
  </StyledLabel>
)

Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

const itemMargin = sizes[3]

const Palette = styled(View)`
  flex-wrap: wrap;
  margin: 0 -${itemMargin}px -${itemMargin}px 0;
`

const PaletteItem = styled.div`
  box-sizing: border-box;
  padding: 0 ${itemMargin}px ${itemMargin}px 0;
`

const Example = {
  Box,
  Container: StyledContainer,
  Checkbox,
  Palette,
  PaletteItem,
}

export default Example
