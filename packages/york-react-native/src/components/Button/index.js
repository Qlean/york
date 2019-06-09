import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native'
import { colors } from '@qlean/york-core'

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)

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

const shadowColor = 'rgb(13, 40, 19)'

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
  disabledText: {
    color: colors.black,
    // opacity: 0.2
  },
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
  shadow: {
    shadowColor,
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 14,
  },
  fake: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
})

const usePulse = isDisabled => {
  const scale = useRef(new Animated.Value(isDisabled ? 1 : 0)).current

  const pulse = () => {
    Animated.sequence([
      Animated.timing(scale, { toValue: 1, duration: 200 }),
      Animated.timing(scale, { toValue: 0, duration: 200 }),
    ]).start(() => pulse())
  }

  // useEffect(() => {
  //   pulse()
  // }, [])

  Animated.timing(scale, { toValue: isDisabled ? 0 : 1, duration: 200 }).start()

  return scale
}

const useAnimation = config => {
  const animatedValue = useRef(new Animated.Value(1)).current

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
  preset,
  size,
  withShadow,
  ...props
}) => {
  // const scale = usePulse(isDisabled)
  // console.log(scale)
  // const scale = useRef(new Animated.Value(isDisabled ? 0 : 1)).current
  // const [bool, setBool] = useState(isDisabled)
  // const toggle = () => setBool(!bool)

  const scale = useAnimation({
    toValue: isDisabled ? 0 : 1,
    useNativeDriver: true,
    duration: 150,
  })
  return (
    <View>
      <Animated.View
        style={[
          style.main,
          style[size],
          style[preset],
          // isDisabled && style.disabled,
          // isDisabled && style[`${preset}Disabled`],
          withShadow && style.shadow,
          { opacity: scale },
        ]}
        disabled={isDisabled}
        activeOpacity={0.8}
        {...props}
      >
        <Text
          style={[
            style.text,
            style[`${preset}Text`],
            // isDisabled && style.disabledText,
          ]}
        >
          {children}
        </Text>
      </Animated.View>
      <View
        style={[
          style.fake,
          style.main,
          style[size],
          // isDisabled && style.disabled,
          // isDisabled && style[`${preset}Disabled`],
          style.disabled,
          style[`${preset}Disabled`],
        ]}
      >
        <Text
          style={[
            style.text,
            // isDisabled && style.disabledText
            style.disabledText,
          ]}
        >
          {children}
        </Text>
      </View>
    </View>
  )
}

Button.defaultProps = {
  // preset: 'primaryLightBg',
  preset: 'secondary',
  size: 'm',
  withShadow: false,
}

Button.propTypes = {
  /** Доступна ли кнопка для нажатия */
  isDisabled: PropTypes.bool.isRequired,
  /** Пресет кнопки */
  preset: PropTypes.oneOf(Object.keys(presets)),
  /** Размер кнопки */
  size: PropTypes.oneOf(['s', 'm']),
  withShadow: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Button
