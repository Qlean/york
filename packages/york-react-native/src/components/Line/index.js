import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import { colors } from '@qlean/york-core'

const styles = StyleSheet.create({
  line: {
    height: 1,
  },
})

/**
 * Линия. Декоративный элемент, по умолчанию занимает всю ширину своего контейнера
 */
const Line = ({ color = colors, style }) => (
  <View style={[styles.line, style, { backgroundColor: colors[color] }]} />
)

Line.defaultProps = {
  color: 'whisper',
  style: null,
}

Line.propTypes = {
  /** Цвет линии */
  color: PropTypes.string,
  /** Дополнительные стили */
  style: PropTypes.string,
}

export default Line
