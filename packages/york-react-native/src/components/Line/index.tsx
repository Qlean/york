import React from 'react'
import { View, StyleSheet, ViewProps } from 'react-native'
import { colors, colorNames } from '@qlean/york-core'

const styles = StyleSheet.create({
  line: {
    height: 1,
  },
})

type Props = {
  /** Цвет линии */
  color: colorNames
} & ViewProps

/**
 * Линия. Декоративный элемент, по умолчанию занимает всю ширину своего контейнера
 */
const Line = ({ color = colorNames.whisper, style }: Props) => (
  <View style={[styles.line, style, { backgroundColor: colors[color] }]} />
)

export default Line
