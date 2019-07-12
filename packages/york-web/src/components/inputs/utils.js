import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { uiPoint, sizes, borderRadiuses, transitions } from 'york-web/utils'
import { Text, Separator } from 'york-web/components/primitive'

const inputSizes = {
  s: sizes[8],
  m: uiPoint * 10,
}

export const getInputCss = ({ size, withError, isFocused, isDisabled }) => `
  opacity: 1;
  appearance: none;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  color: ${colors.coal};
  background-color: ${colors.white};
  height: ${inputSizes[size]}px;
  padding: 0 ${sizes[3]}px;
  font-family: "Museo Sans";
  font-size: 16px;
  font-weight: 500;
  border: 1px solid ${colors.silver};
  border-radius: ${borderRadiuses.small};
  transition: ${transitions.short};
  ${withError ? `border-color: ${colors.red};` : ''}
  ${
    isDisabled
      ? `
        color: ${colors.silver};
        background-color: ${colors.smoke};
        border-color: ${colors.silver};
      `
      : ''
  }
  ${isFocused && !isDisabled ? `border-color: ${colors.green};` : ''}
  &::placeholder {
    color: ${colors.grey};
    ${isDisabled ? `color: ${colors.silver};` : ''}
  }
  &:focus {
    ${!isDisabled ? `border-color: ${colors.green};` : ''}
  }
  &::-ms-clear {
    display: none;
  }
`

export const inputPropTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(inputSizes)),
  withError: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export const inputDefaultProps = {
  size: 'm',
}

export const textValueShape = (props, propName, componentName) => {
  const value = props[propName]
  return (typeof value === 'string' && value.length > 0) || value === null
    ? null
    : new Error(
        `Invalid prop ${propName} in ${componentName}. Expected nonempty string or null, got ${JSON.stringify(
          value,
        )}`,
      )
}

const StyledText = styled(Text)`
  display: block;
`

export const asInput = Input => {
  const WrappedInput = props => {
    const { title, caption, error, isDisabled } = props
    return (
      <div>
        {title && <StyledText>{title}</StyledText>}
        {caption && (
          <StyledText preset="caption" color="grey">
            {caption}
          </StyledText>
        )}
        {(caption || title) && <Separator height={2} />}
        <Input withError={Boolean(error) && !isDisabled} {...props} />
        {error && (
          <>
            <Separator height={1} />
            <StyledText preset="caption" color="red">
              {error}
            </StyledText>
          </>
        )}
      </div>
    )
  }

  WrappedInput.propTypes = {
    title: PropTypes.string,
    caption: PropTypes.string,
    error: PropTypes.string,
    isDisabled: PropTypes.bool.isRequired,
  }

  WrappedInput.defaultProps = {
    title: '',
    caption: '',
    error: '',
  }

  return WrappedInput
}
