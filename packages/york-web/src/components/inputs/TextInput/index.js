import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  inputPropTypes,
  inputDefaultProps,
  getInputCss,
  asInput,
} from '../utils'

const StyledText = styled.input`
  ${getInputCss}
`

/**
 * Базовое однострочное поле для ввода текста, аналог `input` без `type`.
 */
function TextInput(props) {
  const { isDisabled } = props
  return <StyledText {...props} disabled={isDisabled} />
}

TextInput.propTypes = {
  ...inputPropTypes,
  /** Значение поля */
  value: PropTypes.string.isRequired,
}

TextInput.defaultProps = inputDefaultProps

export default asInput(TextInput)
