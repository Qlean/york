import React, { ReactNode } from 'react'
import {
  Text as NativeText,
  StyleSheet,
  Platform,
  TextProps,
} from 'react-native'
import { colors, colorNames } from '@qlean/york-core'

import { fontFamily, fontFamilyBold } from 'york-react-native/utils/styles'

type TextPreset = keyof typeof presets

type FontFamily = {
  fontFamily?: string
  fontWeight?: '700' | '500'
}

const getFontFamily = (isBold: boolean) =>
  Platform.select<FontFamily>({
    ios: { fontFamily: isBold ? fontFamilyBold : fontFamily },
    android: { fontFamily: isBold ? fontFamilyBold : fontFamily },
    web: { fontFamily: 'Museo Sans', fontWeight: isBold ? '700' : '500' },
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
    lineHeight: 15,
  },
}

const styles = StyleSheet.create(presets)

type Props = {
  /** Пресет, устанавливает размер, межстрочный интервал, вес и другие стилевые параметры текста */
  preset?: TextPreset
  /** Цвет текста */
  color?: colorNames
  children: ReactNode
} & TextProps

/**
 * Компонент для оформления текста, использует шрифт Museo Sans. Чтобы он работал, нужно добавить
 * в сборку начертания `MuseoSansCyrl-500` и `MuseoSansCyrl-700`.
 */
const Text = ({
  preset = 'text',
  color = colorNames.coal,
  style,
  ...rest
}: Props) => (
  <NativeText
    style={[styles[preset], { color: colors[color] }, style]}
    {...rest}
  />
)

Text.presets = presets

export default Text
