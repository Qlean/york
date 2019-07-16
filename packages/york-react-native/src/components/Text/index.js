import React from 'react'
import PropTypes from 'prop-types'
import { Text as NativeText, StyleSheet } from 'react-native'
import { colors } from '@qlean/york-core'

import { fontFamily, fontFamilyBold } from 'york-react-native/utils/styles'

const presets = {
  header1: {
    fontFamily: fontFamilyBold,
    fontSize: 25,
    lineHeight: 30,
    fontWeight: '700',
  },
  header2: {
    fontFamily: fontFamilyBold,
    fontSize: 20,
    lineHeight: 25,
    fontWeight: '700',
  },
  header3: {
    fontFamily: fontFamilyBold,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
  },
  text: {
    fontFamily,
    fontSize: 16,
    lineHeight: 25,
  },
  caption: {
    fontFamily,
    fontSize: 14,
    lineHeight: 20,
  },
  captionSmall: {
    fontFamily,
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
const Text = ({ children, preset, color, style: extraStyle, ...props }) => {
  return (
    <NativeText
      {...props}
      style={[style[preset], { color: colors[color] }, extraStyle]}
    >
      {children}
    </NativeText>
  )
}

Text.defaultProps = {
  color: 'coal',
  preset: 'text',
  style: {},
}

Text.propTypes = {
  /** Пресет, устанавливает размер, межстрочный интервал, вес и другие стилевые параметры текста */
  preset: PropTypes.oneOf(Object.keys(presets)),
  /** Цвет текста */
  color: PropTypes.oneOf(Object.keys(colors)),
  /** Дополнительный стиль, который накатывается поверх предопределенных. Например, используется для opacity в кнопке */
  style: NativeText.propTypes.style,
  /** Ну вы поняли */
  children: PropTypes.string.isRequired,
}

export default Text