import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { fontFamily, sizes } from 'york-web/utils'

import { asInput } from '../utils'

const StyledLabel = styled.label`
  align-items: center;
  display: flex;
  font-family: ${fontFamily};
  font-size: 16px;
  line-height: ${sizes[5]}px;
  color: ${colors.coal};
  margin: ${sizes[2]}px;
  &:before {
    content: ' ';
    margin-right: ${sizes[2]}px;
    display: inline-block;
    width: ${sizes[4]}px;
    height: ${sizes[4]}px;
    border-radius: calc(${sizes[2]}px + 1px);
    border: 1px solid ${colors.silver};
    background-color: transparent;
  }
  &:hover:before {
    border: 1px solid ${colors.green};
  }
`

const StyledInput = styled.input`
  display: none;
  &:checked + ${StyledLabel}:before {
    width: ${sizes[2]}px;
    height: ${sizes[2]}px;
    border: 6px solid ${colors.green};
  }
`

const RadioItem = ({ value, id, name, label }) => {
  return (
    <>
      <StyledInput id={id} type="radio" name={name} value={value} />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </>
  )
}

RadioItem.propTypes = {
  /** Значение поля */
  value: PropTypes.string.isRequired,
  /** Идентификатор поля */
  id: PropTypes.string.isRequired,
  /** Имя поля в форме */
  name: PropTypes.string.isRequired,
  /** Подпись */
  label: PropTypes.string.isRequired,
}

export default asInput(RadioItem)
