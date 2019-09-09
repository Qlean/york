import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, StyleSheet, Animated, Platform } from 'react-native'
import { colors } from '@qlean/york-core'
import { AnalyticsContext } from '@qlean/york-analytics'

import { useAnimation } from 'york-react-native/utils/hooks'
import { borderRadiuses } from 'york-react-native/utils/styles'

import Text from 'york-react-native/components/Text'

const disabledBackground = 'rgba(0, 0, 0, 0.05)'
const shadowColor = 'rgb(13, 40, 19)'

const presets = {
  white1: {
    button: { backgroundColor: colors.green, borderColor: colors.green },
    textProps: { color: 'white' },
    disabledProps: {
      button: { backgroundColor: disabledBackground },
      textProps: { color: 'black' },
    },
  },
  white2: {
    button: { backgroundColor: colors.white, borderColor: colors.green },
    textProps: { color: 'green' },
    disabledProps: {
      button: { borderColor: colors.whisper },
      textProps: { color: 'black' },
    },
  },
  white3: {
    button: { backgroundColor: colors.white, borderColor: colors.silver },
    textProps: { color: 'black' },
    disabledProps: {
      button: { borderColor: colors.whisper },
      textProps: { color: 'black' },
    },
  },
  white4: {
    button: { backgroundColor: colors.transparent },
    textProps: { color: 'green' },
    disabledProps: {
      textProps: { color: 'black' },
    },
  },
  light1: {
    button: { backgroundColor: colors.black, borderColor: colors.black },
    textProps: { color: 'white' },
    disabledProps: {
      button: { backgroundColor: disabledBackground },
      textProps: { color: 'black' },
    },
  },
  light4: {
    button: { backgroundColor: colors.transparent },
    textProps: { color: 'black' },
    disabledProps: {
      textProps: { color: 'black' },
    },
  },
  dark1: {
    button: { backgroundColor: colors.black, borderColor: colors.black },
    textProps: { color: 'white' },
    disabledProps: {
      button: { backgroundColor: disabledBackground },
      textProps: { color: 'white' },
    },
  },
  dark4: {
    button: { backgroundColor: colors.transparent },
    textProps: { color: 'white' },
    disabledProps: {
      textProps: { color: 'white' },
    },
  },
}

const sizes = {
  s: { height: 35 },
  m: { height: 50 },
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
  title,
  isDisabled,
  isSubmitting,
  size,
  rank,
  backdropColor,
  withShadow,
  iconElement,
  name,
  onPress,
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
  const analyticsContext = useContext(AnalyticsContext)
  const buttonName =
    analyticsContext && analyticsContext.category
      ? `${analyticsContext.category}.${name}`
      : name
  const handlePress = analyticsContext
    ? () => {
        const { trackEvent, category, properties } = analyticsContext
        if (typeof category === 'string' && typeof trackEvent === 'function') {
          trackEvent({
            category,
            label: buttonName,
            action: 'press',
            properties,
          })
        }
        onPress()
      }
    : onPress

  const opacity = useAnimation({
    initialValue: isDisabled || isSubmitting ? 1 : 0,
    toValue: isDisabled || isSubmitting ? 1 : 0,
    useNativeDriver: Platform.OS !== 'web',
    duration: 100,
  })
  const preset = `${backdropColor}${rank}`
  const buttonText = isSubmitting ? 'Подождите...' : title
  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={isDisabled || isSubmitting}
      activeOpacity={0.8}
      style={[styles.container, withShadow && styles.shadow]}
      testID={buttonName}
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

Button.defaultProps = {
  rank: 1,
  backdropColor: 'white',
  size: 'm',
  withShadow: false,
  isSubmitting: false,
  iconElement: null,
}

Button.propTypes = {
  /** Текст на кнопке. */
  title: PropTypes.string.isRequired,
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
  iconElement: PropTypes.element,
  /** Имя для автотестов, прокидывается как testID */
  name: PropTypes.string.isRequired,
  /** Коллбек, вызываемый по нажатию. Автоматически отключается, если `isDisabled` или `isSubmitting` заданы как `true`. */
  onPress: PropTypes.func.isRequired,
}

export default Button
