import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { colors } from '@qlean/york-core'

const sizes = {
  m: {
    height: 50,
    borderRadius: 4,
  },
  s: {
    height: 35,
    width: 120,
    borderRadius: 4,
  },
}

const presets = {
  green: {
    button: { backgroundColor: colors.green, borderColor: colors.green },
  },
  black: {
    button: { backgroundColor: colors.black, borderColor: colors.black },
  },
  grey: {
    button: { backgroundColor: '#EEEEEE', borderColor: '#EEEEEE' },
    text: { color: colors.coal },
  },
  greenLinear: {
    button: { backgroundColor: colors.white, borderColor: colors.green },
    text: { color: colors.green },
  },
  greyLinear: {
    button: { backgroundColor: colors.white, borderColor: '#EEEEEE' },
    text: { color: colors.coal },
  },
}

const style = StyleSheet.create({
  main: { alignItems: 'center', justifyContent: 'center' },
  text: { color: colors.white },
  disabled: { backgroundColor: colors.smoke, borderColor: colors.smoke },
  disabledText: { color: colors.grey },
  s: { ...sizes.s },
  m: { ...sizes.m },
  green: { ...presets.green.button },
  black: { ...presets.black.button },
  grey: { ...presets.grey.button },
  greyText: { ...presets.grey.text },
  greenLinear: { ...presets.greenLinear.button },
  greenLinearText: { ...presets.greenLinear.text },
  greyLinear: { ...presets.greyLinear.button },
  greyLinearText: { ...presets.greyLinear.text },
})

/**
 * Компонент кнопки.
 */
const Button = ({ children, isDisabled, preset, size }) => (
  <TouchableOpacity
    style={[
      style.main,
      style[size],
      style[preset],
      isDisabled && style.disabled,
    ]}
    disabled={isDisabled}
    activeOpacity={0.8}
  >
    <Text
      style={[
        style.text,
        style[`${preset}Text`],
        isDisabled && style.disabledText,
      ]}
    >
      {children}
    </Text>
  </TouchableOpacity>
)

Button.defaultProps = {
  preset: 'green',
  size: 'm',
}

Button.propTypes = {
  /** Доступна ли кнопка для нажатия */
  isDisabled: PropTypes.bool,
  /** Пресет кнопки */
  preset: PropTypes.oneOf(Object.keys(presets)),
  /** Размер кнопки */
  size: PropTypes.oneOf(Object.keys(sizes)),
}

export default Button
