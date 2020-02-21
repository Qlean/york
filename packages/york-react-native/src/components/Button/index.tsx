import React, { useContext, SyntheticEvent } from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Animated,
  Platform,
  TouchableOpacityProps,
  GestureResponderEvent,
} from 'react-native'
import { colors, colorNames } from '@qlean/york-core'
import { AnalyticsContext, eventActionTypes } from '@qlean/york-analytics'

import { useAnimation } from 'york-react-native/utils/hooks'
import { borderRadiuses } from 'york-react-native/utils/styles'

import Text from 'york-react-native/components/Text'

const disabledBackground = 'rgba(0, 0, 0, 0.05)'
const shadowColor = 'rgb(13, 40, 19)'

type Rank = typeof ranks[number]
type BackdropColor = typeof backdropColor[number]
type ButtonPreset = keyof typeof presets

const ranks = [1, 2, 3, 4] as const

const backdropColor = ['white', 'dark', 'light'] as const

const sizes = {
  s: { height: 35 },
  m: { height: 50 },
} as const

const presets = {
  white1: {
    button: { backgroundColor: colors.green, borderColor: colors.green },
    textProps: { color: colorNames.white },
    disabledProps: {
      button: { backgroundColor: disabledBackground },
      textProps: { color: colorNames.black },
    },
  },
  white2: {
    button: { backgroundColor: colors.white, borderColor: colors.green },
    textProps: { color: colorNames.green },
    disabledProps: {
      button: { borderColor: colors.whisper },
      textProps: { color: colorNames.black },
    },
  },
  white3: {
    button: { backgroundColor: colors.white, borderColor: colors.silver },
    textProps: { color: colorNames.black },
    disabledProps: {
      button: { borderColor: colors.whisper },
      textProps: { color: colorNames.black },
    },
  },
  white4: {
    button: { backgroundColor: colors.transparent },
    textProps: { color: colorNames.green },
    disabledProps: {
      button: {},
      textProps: { color: colorNames.black },
    },
  },
  light1: {
    button: { backgroundColor: colors.black, borderColor: colors.black },
    textProps: { color: colorNames.white },
    disabledProps: {
      button: { backgroundColor: disabledBackground },
      textProps: { color: colorNames.black },
    },
  },
  light4: {
    button: { backgroundColor: colors.transparent },
    textProps: { color: colorNames.black },
    disabledProps: {
      button: {},
      textProps: { color: colorNames.black },
    },
  },
  dark1: {
    button: { backgroundColor: colors.black, borderColor: colors.black },
    textProps: { color: colorNames.white },
    disabledProps: {
      button: { backgroundColor: disabledBackground },
      textProps: { color: colorNames.white },
    },
  },
  dark4: {
    button: { backgroundColor: colors.transparent },
    textProps: { color: colorNames.white },
    disabledProps: {
      button: {},
      textProps: { color: colorNames.white },
    },
  },
}

const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadiuses.small,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadiuses.small,
    borderWidth: 1,
    borderColor: colors.transparent,
    paddingHorizontal: 15,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
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
      web: {
        shadowColor,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 7,
      },
    }),
  },
  ...sizes,
  ...Object.keys(presets).reduce(
    // @ts-ignore
    (acc, preset: ButtonPreset) => ({
      ...acc,
      [preset]: presets[preset].button,
      [`${preset}Disabled`]: presets[preset].disabledProps.button,
    }),
    {},
  ),
})

type Props = {
  /** Текст на кнопке. */
  title: string
  /** Делает кнопку недоступной для нажатия. */
  isDisabled: boolean
  /** Заменяет текст кнопки на лоадер и делает недоступной для нажатия */
  isSubmitting?: boolean
  /** Важность кнопки на странице. */
  rank?: Rank
  /** Цвет фона на котором будет располагаться кнопка */
  backdropColor: BackdropColor
  /** Размер кнопки. Меняется только высота, т. к. кнопка всегда занимает всю ширину контейнера */
  size: keyof typeof sizes
  /** Тень кнопки. Используется только с белым backdropColor. */
  withShadow?: boolean
  /** Иконка слева от текста. */
  iconElement: JSX.Element
  /** Имя для автотестов, прокидывается как testID */
  name: string
  /** Коллбек, вызываемый по нажатию. Автоматически отключается, если `isDisabled` или `isSubmitting` заданы как `true`. */
  onPress: (e: GestureResponderEvent) => void
  /** Дополнительные данные для аналитики */
  analyticsPayload: {
    [key: string]: string | number
  }
} & TouchableOpacityProps

/**
 * Кнопка, используется для всякого кликабельного. Два параметра, отвечающих за ее внеший вид — `rank` и `backdropColor`.
 * Первый отражает важность кнопки на экране, а второй отвечает за цвет подложки.
 */
const Button = ({
  title,
  isDisabled,
  isSubmitting = false,
  size = 'm',
  rank = 1,
  backdropColor = colorNames.white,
  withShadow = false,
  iconElement,
  name,
  onPress,
  analyticsPayload = {},
  ...props
}: Props) => {
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

  const analyticsContext = useContext(AnalyticsContext)

  const handlePress = (e: GestureResponderEvent) => {
    if (analyticsContext) {
      const { trackEvent, category } = analyticsContext
      trackEvent({
        category,
        label: name,
        action: eventActionTypes.press,
        ...analyticsPayload,
      })
    }
    onPress(e)
  }

  const opacity = useAnimation({
    initialValue: isDisabled || isSubmitting ? 1 : 0,
    toValue: isDisabled || isSubmitting ? 1 : 0,
    useNativeDriver: Platform.OS !== 'web',
    duration: 100,
  })
  const preset = `${backdropColor}${rank}` as ButtonPreset
  const buttonText = isSubmitting ? 'Подождите...' : title
  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={isDisabled || isSubmitting}
      activeOpacity={0.8}
      style={[styles.container, withShadow && styles.shadow]}
      testID={name}
      {...props}
    >
      <Animated.View
        style={[
          styles.content,
          styles[size],
          styles[preset],
          {
            opacity: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ]}
      >
        {iconElement
          ? React.cloneElement(iconElement, {
              style: [iconElement.props.style, styles.icon],
            })
          : null}
        <Text {...presets[preset].textProps}>{buttonText}</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.content,
          styles.overlay,
          styles[`${preset}Disabled`],
          {
            opacity: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          },
        ]}
      >
        {iconElement
          ? React.cloneElement(iconElement, {
              style: [
                iconElement.props.style,
                styles.icon,
                styles.disabledIcon,
              ],
            })
          : null}
        <Text
          {...presets[preset].disabledProps.textProps}
          style={styles.disabledText}
        >
          {buttonText}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  )
}

export default Button
