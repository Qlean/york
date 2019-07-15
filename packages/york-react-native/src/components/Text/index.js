import React from 'react'
import PropTypes from 'prop-types'
import { Text as NativeText, StyleSheet } from 'react-native'
import { colors } from '@qlean/york-core'

// TODO: font family

const presets = {
  header1: {
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 700, // TODO: doesnt works with custom fonts
  },
  header2: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 700,
  },
  header3: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 700,
  },
  text: {
    fontSize: 16,
    lineHeight: 25,
  },
  caption1: {
    fontSize: 16,
    lineHeight: 22,
  },
  caption2: {
    fontSize: 14,
    lineHeight: 20,
  },
  captionSmall: {
    fontSize: 12,
    lineHeight: 20,
  },
}

const style = StyleSheet.create({
  ...presets,
})

/**
 * Компонент для оформления текста, использует шрифт Museo Sans.
 */
const Text = ({ children, preset, color, ...props }) => {
  return (
    <NativeText style={[style[preset], { color: colors[color] }]} {...props}>
      {children}
    </NativeText>
  )
}

Text.defaultProps = {
  color: colors.coal,
  preset: 'text',
}

Text.propTypes = {
  /** Пресет, устанавливает размер, межстрочный интервал, вес и другие стилевые параметры текста */
  preset: PropTypes.oneOf(Object.keys(presets)),
  /** Цвет текста */
  color: PropTypes.oneOf(Object.keys(colors)),
  /** Ну вы поняли. */
  children: PropTypes.string.isRequired,
}

export default Text
