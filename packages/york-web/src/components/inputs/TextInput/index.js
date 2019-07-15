import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { inputPropTypes, getInputCss, asInput } from '../utils'

const StyledTextInput = styled.input`
  ${getInputCss}
`

/**
 * Базовое однострочное поле для ввода текста, аналог `input` без `type`.
 */
function TextInput(props) {
  const { isDisabled } = props
  return <StyledTextInput {...props} disabled={isDisabled} />
}

TextInput.propTypes = {
  ...inputPropTypes,
  /** Значение поля */
  value: PropTypes.string.isRequired,
}

export default asInput(TextInput)
