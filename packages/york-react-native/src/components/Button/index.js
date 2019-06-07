import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { colors } from '@qlean/york-core'

const disabledStates = {
  main: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderColor: colors.transparent,
  },
  linear: { borderColor: 'rgba(0, 0, 0, 0.05)' },
  text: {},
}

const presets = {
  primaryLightBg: {
    button: { backgroundColor: colors.green, borderColor: colors.green },
    disabled: disabledStates.main,
  },
  primaryColoredBg: {
    button: { backgroundColor: colors.black, borderColor: colors.black },
    disabled: disabledStates.main,
  },
  secondary: {
    button: { backgroundColor: colors.transparent, borderColor: colors.green },
    text: { color: colors.green },
    disabled: disabledStates.linear,
  },
  tertiary: {
    button: { backgroundColor: colors.transparent, borderColor: colors.silver },
    text: { color: colors.coal },
    disabled: disabledStates.linear,
  },
  quoternaryLightBg: {
    button: {
      backgroundColor: colors.transparent,
      borderColor: colors.transparent,
    },
    text: { color: colors.green },
  },
  quoternaryDarkBg: {
    button: {
      backgroundColor: colors.transparent,
      borderColor: colors.transparent,
    },
    text: { color: colors.black },
  },
}

const style = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
  },
  text: { fontSize: 16, lineHeight: 25, color: colors.white },
  disabled: {
    // opacity: 0.2
  },
  disabledText: { color: colors.black, opacity: 0.2 },
  /* eslint-disable react-native/no-unused-styles */
  s: {
    height: 35,
    width: 120,
  },
  m: { height: 50 },
  /* eslint-disable react-native/no-unused-styles */
  ...Object.keys(presets).reduce(
    (acc, preset) => ({
      ...acc,
      [preset]: presets[preset].button,
      [`${preset}Disabled`]: presets[preset].disabled || {},
      [`${preset}Text`]: presets[preset].text || {},
    }),
    {},
  ),
})

/**
 * Компонент кнопки.
 */
const Button = ({ children, isDisabled, preset, size, ...props }) => (
  <TouchableOpacity
    style={[
      style.main,
      style[size],
      style[preset],
      isDisabled && style.disabled,
      isDisabled && style[`${preset}Disabled`],
    ]}
    disabled={isDisabled}
    activeOpacity={0.8}
    {...props}
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
  isDisabled: PropTypes.bool.isRequired,
  /** Пресет кнопки */
  preset: PropTypes.oneOf(Object.keys(presets)),
  /** Размер кнопки */
  size: PropTypes.oneOf(Object.keys(['s', 'm'])),
  children: PropTypes.node.isRequired,
}

export default Button
