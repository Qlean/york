import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native'
import { colors } from '@qlean/york-core'

const presets = {
  primaryLightBg: {
    button: { backgroundColor: colors.green, borderColor: colors.green },
    disabled: {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      borderColor: colors.transparent,
    },
  },
  primaryColoredBg: {
    button: { backgroundColor: colors.black, borderColor: colors.black },
    disabled: {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      borderColor: colors.transparent,
    },
  },
  secondary: {
    button: { backgroundColor: colors.white, borderColor: colors.green },
    text: { color: colors.green },
    disabled: { borderColor: 'rgba(0, 0, 0, 0.05)' },
  },
  tertiary: {
    button: { backgroundColor: colors.white, borderColor: colors.silver },
    text: { color: colors.coal },
    disabled: { borderColor: 'rgba(0, 0, 0, 0.05)' },
  },
  quoternaryLightBg: {
    button: {
      backgroundColor: colors.transparent,
      borderColor: colors.transparent,
    },
    text: { color: colors.green },
    disabled: { borderColor: colors.transparent },
  },
  quoternaryDarkBg: {
    button: {
      backgroundColor: colors.transparent,
      borderColor: colors.transparent,
    },
    text: { color: colors.black },
    disabled: { borderColor: colors.transparent },
  },
  quoternaryDarkBg2: {
    button: {
      backgroundColor: colors.transparent,
      borderColor: colors.transparent,
    },
    text: { color: colors.white },
    disabled: { borderColor: colors.transparent },
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
  icon: { marginRight: 5 },
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
 * Кнопка
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
    initialValue: isDisabled ? 0 : 1,
    toValue: isDisabled ? 0 : 1,
    useNativeDriver: true,
    duration: 100,
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
  /** Делает кнопку недоступной для нажатия. Меняется с анимацией */
  isDisabled: PropTypes.bool.isRequired,
  /** Заменяет текст кнопки на лоадер и делает недоступной для нажатия */
  isSubmitting: PropTypes.bool,
  /** Пресет кнопки */
  preset: PropTypes.oneOf(Object.keys(presets)),
  /** Размер кнопки. Меняется только высота,
   * т. к. кнопка всегда занимает всю ширину контейнера
   */
  size: PropTypes.oneOf(Object.keys(sizes)),
  /** Тень кнопки. Используется только в кнопках в футере */
  withShadow: PropTypes.bool,
  /**
   * Иконка слева от текста. Передавать с пробросом пропов
   * для правильного отображения disabled состояния
   * Icon={props => <Icon name="qlean" {...props}}/>
   */
  Icon: PropTypes.element,
  children: PropTypes.node.isRequired,
}

export default Button
