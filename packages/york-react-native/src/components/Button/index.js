import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { colors } from '@qlean/york-core'

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
    button: { backgroundColor: colors.white, borderColor: colors.grey },
    text: { color: colors.coal },
  },
}

const style = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
  },
  text: { color: colors.white },
  disabled: { backgroundColor: colors.smoke, borderColor: colors.smoke },
  disabledText: { color: colors.grey },
  /* eslint-disable react-native/no-unused-styles */
  s: { height: 50 },
  m: {
    height: 35,
    width: 120,
  },
  /* eslint-disable react-native/no-unused-styles */
  ...Object.keys(presets).reduce(
    (acc, preset) => ({
      ...acc,
      [preset]: presets[preset].button,
      [`${preset}Text`]: presets[preset].text || {},
    }),
    {},
  ),
})

/**
 * Компонент кнопки.
 */
const Button = ({ children, isDisabled, preset, size, Icon, ...props }) => (
  <TouchableOpacity
    style={[
      style.main,
      style[size],
      style[preset],
      isDisabled && style.disabled,
    ]}
    disabled={isDisabled}
    activeOpacity={0.8}
    {...props}
  >
    {/* Temporary solution. Use iconName when Icon component will ready  */}
    {Icon ? <Icon /> : null}
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
  isDisabled: false,
  preset: 'green',
  size: 'm',
  Icon: null,
}

Button.propTypes = {
  /** Доступна ли кнопка для нажатия */
  isDisabled: PropTypes.bool,
  /** Пресет кнопки */
  preset: PropTypes.oneOf(Object.keys(presets)),
  /** Размер кнопки */
  size: PropTypes.oneOf(Object.keys(['s', 'm'])),
  children: PropTypes.node.isRequired,
  Icon: PropTypes.element,
}

export default Button
