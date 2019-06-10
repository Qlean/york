import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Platform,
} from 'react-native'
import { colors } from '@qlean/york-core'

const disabledStates = {
  main: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderColor: colors.transparent,
  },
  linear: { borderColor: 'rgba(0, 0, 0, 0.05)' },
  text: { borderColor: colors.transparent },
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
    disabled: disabledStates.text,
  },
  quoternaryDarkBg: {
    button: {
      backgroundColor: colors.transparent,
      borderColor: colors.transparent,
    },
    text: { color: colors.black },
    disabled: disabledStates.text,
  },
  quoternaryWhite: {
    button: {
      backgroundColor: colors.transparent,
      borderColor: colors.transparent,
    },
    text: { color: colors.white },
    disabled: disabledStates.text,
  },
}

const sizes = {
  s: { height: 35 },
  m: { height: 50 },
}

const shadowColor = 'rgb(13, 40, 19)'

const style = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
  },
  text: { fontSize: 16, lineHeight: 25, color: colors.white },
  disabledText: {
    color: colors.black,
    opacity: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  disabledIcon: {
    tintColor: colors.black,
    opacity: 0.5,
  },
  shadow: {
    shadowColor,
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 14,
  },
  fakeDisabled: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  ...sizes,
  ...Object.keys(presets).reduce(
    (acc, preset) => ({
      ...acc,
      [preset]: presets[preset].button,
      [`${preset}Disabled`]: presets[preset].disabled,
      [`${preset}Text`]: presets[preset].text,
    }),
    {},
  ),
})

const useAnimation = config => {
  const { initialValue = 0 } = config
  const animatedValue = useRef(new Animated.Value(initialValue)).current

  const animate = () => {
    Animated.timing(animatedValue, config).start()
  }

  useEffect(animate, [config.toValue])

  return animatedValue
}

/**
 * Компонент кнопки.
 */
const Button = ({
  children,
  isDisabled,
  isSubmitting,
  preset,
  size,
  withShadow,
  Icon,
  ...props
}) => {
  const opacity = useAnimation({
    initialValue: isDisabled ? 1 : 0,
    toValue: isDisabled ? 0 : 1,
    useNativeDriver: true,
    duration: 200,
  })
  const buttonText = isSubmitting ? 'Подождите' : children
  return (
    <TouchableOpacity
      disabled={isDisabled || isSubmitting}
      activeOpacity={0.8}
      style={withShadow && style.shadow}
      {...props}
    >
      <Animated.View
        style={[style.main, style[size], style[preset], { opacity }]}
      >
        {Icon ? <Icon style={style.icon} /> : null}
        <Text style={[style.text, style[`${preset}Text`]]}>{buttonText}</Text>
      </Animated.View>
      <View
        style={[
          style.main,
          style[size],
          style.fakeDisabled,
          style[`${preset}Disabled`],
        ]}
      >
        {Icon ? <Icon style={[style.icon, style.disabledIcon]} /> : null}
        <Text style={[style.text, style.disabledText]}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  preset: 'primaryLightBg',
  size: 'm',
  withShadow: false,
  isSubmitting: false,
  Icon: null,
}

Button.propTypes = {
  /** Доступна ли кнопка для нажатия */
  isDisabled: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool,
  /** Пресет кнопки */
  preset: PropTypes.oneOf(Object.keys(presets)),
  /** Размер кнопки */
  size: PropTypes.oneOf(Object.keys(sizes)),
  withShadow: PropTypes.bool,
  children: PropTypes.node.isRequired,
  Icon: PropTypes.element,
}

export default Button
