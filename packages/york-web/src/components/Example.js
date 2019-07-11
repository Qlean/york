import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as R from 'ramda'
import { colors } from '@qlean/york-core'

import { sizes } from 'york-web/utils'

import Text from './Text'
import View from './View'
import Separator from './Separator'

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blue};
  ${({ width, height }) => `
    width: ${R.isNil(width) ? sizes[8] : sizes[width]}px;
    height: ${R.isNil(height) ? sizes[8] : sizes[height]}px;
  `}
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
  ${({ withVerticalPadding, backgroundColor, overflow }) => `
    padding: ${withVerticalPadding ? '15px' : 0} 16px;  
    background-color: ${colors[backgroundColor]};
    overflow: ${overflow};
  `}
`

const StyledShowcaseContent = styled(View)`
  flex-wrap: wrap;
  margin: 0 0 -${itemMargin}px -${itemMargin}px;
  width: calc(100% + ${itemMargin}px);
`

const Showcase = ({
  backgroundColor,
  withVerticalPadding,
  overflow,
  ...rest
}) => (
  <StyledShowcase
    backgroundColor={backgroundColor}
    withVerticalPadding={withVerticalPadding}
    overflow={overflow}
  >
    <StyledShowcaseContent {...rest} />
  </StyledShowcase>
)

Showcase.propTypes = {
  backgroundColor: PropTypes.oneOf(Object.keys(colors)),
  withVerticalPadding: PropTypes.bool,
  overflow: PropTypes.string,
}

Showcase.defaultProps = {
  backgroundColor: 'white',
  withVerticalPadding: false,
  overflow: 'visible',
}

const StyledShowcaseItem = styled.div`
  box-sizing: border-box;
  padding: 0 0 ${itemMargin}px ${itemMargin}px;
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
  Checkbox,
  Showcase,
  ShowcaseItem,
}

export default Example
