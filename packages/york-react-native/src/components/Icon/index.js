import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Image, ViewPropTypes } from 'react-native'

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
}

/**
 * Иконка. Рендерит картинку в зависимости от пропа `name`. Размер по умолчанию — 24 пункта,
 * его можно перезаписать через проп `style`.
 */
const Icon = ({ name, style, ...rest }) => (
  <Image source={icons[name]} style={[styles.root, style]} {...rest} />
)

Icon.defaultProps = {
  style: null,
}

Icon.propTypes = {
  /** Имя иконки */
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
  /** Дополнительные стили */
  style: ViewPropTypes.style,
}

export default Icon
