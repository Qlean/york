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

const disabledColor = 'rgba(0, 0, 0, 0.05)'
const shadowColor = 'rgb(13, 40, 19)'

const presets = {
  whiteBg1: {
    button: { backgroundColor: colors.green, borderColor: colors.green },
    disabledProps: {
      button: { backgroundColor: disabledColor },
    },
  },
  lightBg1: {
    button: { backgroundColor: colors.black, borderColor: colors.black },
    disabledProps: {
      button: { backgroundColor: disabledColor },
    },
  },
  darkBg1: {
    button: { backgroundColor: colors.black, borderColor: colors.black },
    disabledProps: {
      button: { backgroundColor: disabledColor },
      text: { color: colors.white },
    },
  },
  whiteBg2: {
    button: { backgroundColor: colors.white, borderColor: colors.green },
    text: { color: colors.green },
    disabledProps: {
      button: { borderColor: colors.whisper },
    },
  },
  whiteBg3: {
    button: { backgroundColor: colors.white, borderColor: colors.silver },
    text: { color: colors.black },
    disabledProps: {
      button: { borderColor: colors.whisper },
    },
  },
  whiteBg4: {
    button: { backgroundColor: colors.transparent },
    text: { color: colors.green },
  },
  lightBg4: {
    button: { backgroundColor: colors.transparent },
    text: { color: colors.black },
  },
  darkBg4: {
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
  layer: {
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
  disabledLayer: { zIndex: -1 },
  text: { fontSize: 16, lineHeight: 25, color: colors.white },
  disabledText: { color: colors.black, opacity: 0.2 },
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
  const enabledLayerOpacity = useAnimation({
    initialValue: isDisabled ? 0 : 1,
    toValue: isDisabled ? 0 : 1,
    useNativeDriver: true,
    duration: 100,
  })
  const disabledLayerOpacity = useAnimation({
    initialValue: isDisabled ? 1 : 0,
    toValue: isDisabled ? 1 : 0,
    useNativeDriver: true,
    duration: 100,
  })
  const buttonText = isSubmitting ? 'Подождите...' : children
  return (
    <TouchableOpacity
      disabled={isDisabled || isSubmitting}
      activeOpacity={0.8}
      style={[style.container, style[size], withShadow && style.shadow]}
      {...props}
    >
      <Animated.View
        style={[style.layer, style[preset], { opacity: enabledLayerOpacity }]}
      >
        {Icon ? <Icon style={style.icon} /> : null}
        <Text style={[style.text, style[`${preset}Text`]]}>{buttonText}</Text>
      </Animated.View>
      <Animated.View
        style={[
          style.layer,
          style.disabledLayer,
          style[`${preset}Disabled`],
          { opacity: disabledLayerOpacity },
        ]}
      >
        {Icon ? <Icon style={[style.icon, style.disabledIcon]} /> : null}
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
  /** Размер кнопки. Меняется только высота, т. к. кнопка всегда занимает всю ширину контейнера */
  size: PropTypes.oneOf(Object.keys(sizes)),
  /** Тень кнопки. Используется только в кнопках в футере */
  withShadow: PropTypes.bool,
  /** Иконка слева от текста. Передавать с пробросом пропов для правильного отображения disabled состояния: Icon={props => \<Icon name="qlean" {...props}}/> */
  Icon: PropTypes.element,
  children: PropTypes.node.isRequired,
}

export default Button
