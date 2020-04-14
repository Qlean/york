import React from 'react'
import { StyleSheet, Image, ImageProps } from 'react-native'

const iconSize = 24

const styles = StyleSheet.create({
  root: {
    width: iconSize,
    height: iconSize,
  },
})

const icons = {
  back: require('./assets/back.png'),
  close: require('./assets/close.png'),
  arrow: require('./assets/arrow.png'),
  error: require('./assets/error.png'),
  success: require('./assets/success.png'),
}

type Props = {
  /** Имя иконки */
  name: keyof typeof icons
} & Omit<ImageProps, 'source'>

/**
 * Иконка. Рендерит картинку в зависимости от пропа `name`. Размер по умолчанию — 24 пункта,
 * его можно перезаписать через проп `style`.
 */
const Icon = ({ name, style, ...rest }: Props) => (
  <Image source={icons[name]} style={[styles.root, style]} {...rest} />
)

export default Icon

const A = () => {
  return <Icon name="close" />
}
