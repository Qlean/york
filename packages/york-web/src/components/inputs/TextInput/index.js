import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  inputPropTypes,
  inputPaddingHorizontal,
  getInputCss,
  asInput,
} from '../utils'

const StyledInput = styled.input`
  ${getInputCss}
`

const StyledTextInput = styled.div`
  position: relative;
`

const StyledRightView = styled.div`
  position: absolute;
  top: 0;
  right: ${inputPaddingHorizontal}px;
  display: flex;
  align-items: center;
  height: 100%;
  ${({ width }) => `width: ${width}px;`}
`

/**
 * Базовое однострочное поле для ввода текста, аналог `input` без `type`.
 */
function TextInput(props) {
  const { isDisabled, rightView } = props
  return (
    <StyledTextInput>
      <StyledInput {...props} disabled={isDisabled} />
      {rightView && (
        <StyledRightView width={rightView.width}>
          {rightView.node}
        </StyledRightView>
      )}
    </StyledTextInput>
  )
}

TextInput.defaultProps = {
  rightView: null,
}

TextInput.propTypes = {
  ...inputPropTypes,
  /** Значение поля */
  value: PropTypes.string.isRequired,
  /** Блок справа. Его ширина должна быть фиксированной, чтобы у инпута корректно работал `padding-right` */
  rightView: PropTypes.shape({
    node: PropTypes.node.isRequired,
    width: PropTypes.number.isRequired,
  }),
}

export default asInput(TextInput)
