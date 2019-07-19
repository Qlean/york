import React from 'react'
import PropTypes from 'prop-types'
import { Text as NativeText, StyleSheet, Platform } from 'react-native'
import { colors } from '@qlean/york-core'

import { fontFamily, fontFamilyBold } from 'york-react-native/utils/styles'
import { fontFamily as fontFamilyWeb } from 'york-web/utils'

const getFontFamily = isBold =>
  Platform.select({
    ios: { fontFamily: isBold ? fontFamilyBold : fontFamily },
    android: { fontFamily: isBold ? fontFamilyBold : fontFamily },
    web: { fontFamily: fontFamilyWeb, fontWeight: isBold ? '700' : '500' },
  })

const presets = {
  header1: {
    ...getFontFamily(true),
    fontSize: 25,
    lineHeight: 30,
  },
  header2: {
    ...getFontFamily(true),
    fontSize: 20,
    lineHeight: 25,
  },
  header3: {
    ...getFontFamily(true),
    fontSize: 16,
    lineHeight: 22,
  },
  text: {
    ...getFontFamily(false),
    fontSize: 16,
    lineHeight: 25,
  },
  caption: {
    ...getFontFamily(false),
    fontSize: 14,
    lineHeight: 20,
  },
  captionSmall: {
    ...getFontFamily(false),
    fontSize: 12,
    lineHeight: 20,
  },
}

const style = StyleSheet.create({
  ...presets,
})

/**
 * Компонент для оформления текста, использует шрифт Museo Sans. Чтобы он работал, нужно добавить в сборку начертания MuseoSansCyrl-500 и MuseoSansCyrl-700.
 */
const Text = ({ preset, color, style: extraStyle, ...props }) => {
  return (
    <NativeText
      {...props}
      style={[style[preset], { color: colors[color] }, extraStyle]}
    />
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
}

export default Text
