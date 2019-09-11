import React from 'react'
import { View, StyleSheet } from 'react-native'
import { colors } from '@qlean/york-core'

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    borderBottomColor: colors.whisper,
  },
})

/**
 * Линия. Декоративный элемент, не принимает пропов
 */
const Line = () => <View style={[styles.line]} />

export default Line
