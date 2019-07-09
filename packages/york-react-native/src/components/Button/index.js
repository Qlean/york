import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Platform,
} from 'react-native'
import { colors } from '@qlean/york-core'

import { useAnimation } from '../../utils/hooks'

const disabledBackground = 'rgba(0, 0, 0, 0.05)'
const shadowColor = 'rgb(13, 40, 19)'

const presets = {
  white1: {
    button: { backgroundColor: colors.green, borderColor: colors.green },
    text: { color: colors.white },
    disabledProps: {
      button: { backgroundColor: disabledBackground },
      text: { color: colors.black },
    },
  },
  white2: {
    button: { backgroundColor: colors.white, borderColor: colors.green },
    text: { color: colors.green },
    disabledProps: {
      button: { borderColor: colors.whisper },
      text: { color: colors.black },
    },
  },
  white3: {
    button: { backgroundColor: colors.white, borderColor: colors.silver },
    text: { color: colors.black },
    disabledProps: {
      button: { borderColor: colors.whisper },
      text: { color: colors.black },
    },
  },
  white4: {
    button: { backgroundColor: colors.transparent },
    text: { color: colors.green },
    disabledProps: {
      text: { color: colors.black },
    },
  },
  light1: {
    button: { backgroundColor: colors.black, borderColor: colors.black },
    text: { color: colors.white },
    disabledProps: {
      button: { backgroundColor: disabledBackground },
      text: { color: colors.black },
    },
  },
  light4: {
    button: { backgroundColor: colors.transparent },
    text: { color: colors.black },
    disabledProps: {
      text: { color: colors.black },
    },
  },
  dark1: {
    button: { backgroundColor: colors.black, borderColor: colors.black },
    text: { color: colors.white },
    disabledProps: {
      button: { backgroundColor: disabledBackground },
      text: { color: colors.white },
    },
  },
  dark4: {
    button: { backgroundColor: colors.transparent },
    text: { color: colors.white },
    disabledProps: {
      text: { color: colors.white },
    },
  },
}

const sizes = {
  s: { height: 35 },
  m: { height: 50 },
}

const style = StyleSheet.create({
  container: {
    borderRadius: 4,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.transparent,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  text: { fontSize: 16, lineHeight: 25 },
  disabledText: { opacity: 0.2 },
  icon: { marginRight: 5 },
  disabledIcon: { tintColor: colors.black, opacity: 0.2 },
  shadow: {
    backgroundColor: colors.white,
    ...Platform.select({
      ios: {
        shadowColor,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 7,
      },
      android: { elevation: 7 },
      /* react-native-web */
      default: {
        shadowColor,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 7,
      },
    }),
  },
  ...sizes,
  ...Object.keys(presets).reduce(
    (acc, preset) => ({
      ...acc,
      [preset]: presets[preset].button,
      [`${preset}Text`]: presets[preset].text,
      [`${preset}Disabled`]: (presets[preset].disabledProps || {}).button,
      [`${preset}DisabledText`]: (presets[preset].disabledProps || {}).text,
    }),
    {},
  ),
})

/**
 * Кнопка, используется для всякого кликабельного. Два параметра, отвечающих за ее внеший вид — `rank` и `backdropColor`.
 * Первый отражает важность кнопки на экране, а второй отвечает за цвет подложки.
 */
const Button = ({
  children,
  isDisabled,
  isSubmitting,
  size,
  rank,
  backdropColor,
  withShadow,
  Icon,
  ...props
}) => {
  if (
    process.env.NODE_ENV !== 'production' &&
    withShadow === true &&
    (rank !== 1 || backdropColor !== 'white')
  ) {
    // eslint-disable-next-line no-console
    console.warn(
      'Shadow can only be used with the rank 1 and white backdrop color',
    )
  }
  const opacity = useAnimation({
    initialValue: isDisabled || isSubmitting ? 1 : 0,
    toValue: isDisabled || isSubmitting ? 1 : 0,
    useNativeDriver: true,
    duration: 100,
  })
  const preset = `${backdropColor}${rank}`
  const buttonText = isSubmitting ? 'Подождите...' : children
  return (
    <TouchableOpacity
      disabled={isDisabled || isSubmitting}
      activeOpacity={0.8}
      style={[style.container, style[size], withShadow && style.shadow]}
      {...props}
    >
      <Animated.View
        style={[
          style.content,
          style[preset],
          {
            opacity: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ]}
      >
        {Icon
          ? React.cloneElement(Icon, {
              style: [Icon.props.style, style.icon],
            })
          : null}
        <Text style={[style.text, style[`${preset}Text`]]}>{buttonText}</Text>
      </Animated.View>
      <Animated.View
        style={[
          style.content,
          style[`${preset}Disabled`],
          {
            opacity: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          },
        ]}
      >
        {Icon
          ? React.cloneElement(Icon, {
              style: [Icon.props.style, style.icon, style.disabledIcon],
            })
          : null}
        <Text
          style={[
            style.text,
            style.disabledText,
            style[`${preset}DisabledText`],
          ]}
        >
          {buttonText}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  rank: 1,
  backdropColor: 'white',
  size: 'm',
  withShadow: false,
  isSubmitting: false,
  Icon: null,
}

Button.propTypes = {
  /** Делает кнопку недоступной для нажатия. */
  isDisabled: PropTypes.bool.isRequired,
  /** Заменяет текст кнопки на лоадер и делает недоступной для нажатия */
  isSubmitting: PropTypes.bool,
  /** Важность кнопки на странице. */
  rank: PropTypes.oneOf([1, 2, 3, 4]),
  /** Цвет фона на котором будет располагаться кнопка */
  backdropColor: PropTypes.oneOf(['white', 'dark', 'light']),
  /** Размер кнопки. Меняется только высота, т. к. кнопка всегда занимает всю ширину контейнера */
  size: PropTypes.oneOf(Object.keys(sizes)),
  /** Тень кнопки. Используется только с белым backdropColor. */
  withShadow: PropTypes.bool,
  /** Иконка слева от текста. */
  Icon: PropTypes.element,
  /** Текст на кнопке. */
  children: PropTypes.string.isRequired,
}

export default Button
