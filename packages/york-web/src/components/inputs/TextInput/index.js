import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { View } from 'york-web/components/primitive'
import { sizes } from 'york-web/utils'

import { inputPropTypes, getInputCss, asInput } from '../utils'

const StyledTextInput = styled.input`
  ${getInputCss}
`

const StyledInputContainer = styled(View)`
  position: relative;
`

const StyledIconContainer = styled(View)`
  position: absolute;
  right: ${sizes[3]}px;
  height: 100%;
  align-items: center;
`

/**
 * Базовое однострочное поле для ввода текста, аналог `input` без `type`.
 */
function TextInput(props) {
  const { isDisabled, rightNode } = props
  return (
    <StyledInputContainer>
      <StyledTextInput {...props} disabled={isDisabled} />
      <StyledIconContainer>{rightNode}</StyledIconContainer>
    </StyledInputContainer>
  )
}

TextInput.defaultProps = {
  rightNode: null,
}

TextInput.propTypes = {
  ...inputPropTypes,
  /** Значение поля */
  value: PropTypes.string.isRequired,
  /** Блок справа */
  rightNode: PropTypes.node,
}

export default asInput(TextInput)
