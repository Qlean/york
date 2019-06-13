import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { sizes } from 'styles'

import Text from './Text'
import View from './View'
import Separator from './Separator'

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

const itemMargin = sizes[4]

const StyledShowcase = styled(View)`
  margin: 0 -16px;
  ${({ withVerticalPadding, backgroundColor }) => `
    padding: ${withVerticalPadding ? '15px' : 0} 16px;  
    background-color: ${colors[backgroundColor]};
  `}
`

const StyledShowcaseContent = styled(View)`
  width: 100%;
  flex-wrap: wrap;
  margin: 0 -${itemMargin}px -${itemMargin}px 0;
`

const Showcase = ({ backgroundColor, withVerticalPadding, ...rest }) => (
  <StyledShowcase
    backgroundColor={backgroundColor}
    withVerticalPadding={withVerticalPadding}
  >
    <StyledShowcaseContent {...rest} />
  </StyledShowcase>
)

Showcase.propTypes = {
  backgroundColor: PropTypes.oneOf(Object.keys(colors)),
  withVerticalPadding: PropTypes.bool,
}

Showcase.defaultProps = {
  backgroundColor: 'white',
  withVerticalPadding: false,
}

const StyledShowcaseItem = styled.div`
  box-sizing: border-box;
  padding: 0 ${itemMargin}px ${itemMargin}px 0;
`

const ShowcaseItem = ({ title, titleProps, caption, children, ...rest }) => (
  <StyledShowcaseItem {...rest}>
    <Text htmlTag="div" {...titleProps}>
      {title}
    </Text>
    <Text htmlTag="div" color="grey">
      {caption}
    </Text>
    <Separator height={1} />
    <div>{children}</div>
  </StyledShowcaseItem>
)

ShowcaseItem.propTypes = {
  title: PropTypes.string.isRequired,
  titleProps: PropTypes.shape(Text.propTypes.isRequired),
  caption: PropTypes.string,
  children: PropTypes.node.isRequired,
}

ShowcaseItem.defaultProps = {
  titleProps: {},
  caption: '',
}

const Example = {
  Box,
  Container: StyledContainer,
  Checkbox,
  Showcase,
  ShowcaseItem,
}

export default Example
