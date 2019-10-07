import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import * as R from 'ramda'
import { colors } from '@qlean/york-core'

import { sizes } from 'york-react-native/utils/styles'

const dotSize = sizes[1]
const dotSizeSelected = sizes[2]

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: dotSize,
    height: dotSize,
    borderRadius: dotSize / 2,
    backgroundColor: colors.whisper,
  },
  withRightMargin: {
    marginRight: sizes[3],
  },
  filled: {
    backgroundColor: colors.green,
  },
  selected: {
    width: dotSizeSelected,
    height: dotSizeSelected,
    borderRadius: dotSizeSelected / 2,
  },
})

/**
 * Пагинация. Принимает количество страниц и номер текущей.
 */
const Pagination = ({ pagesCount, value: currentStep }) => {
  const steps = R.times(n => n + 1, pagesCount)

  return (
    <View style={styles.root}>
      {steps.map(step => (
        <View
          key={step}
          style={[
            styles.dot,
            currentStep >= step && styles.filled,
            currentStep === step && styles.selected,
            step < pagesCount && styles.withRightMargin,
          ]}
        />
      ))}
    </View>
  )
}

Pagination.propTypes = {
  /** Текущая выбранная страница */
  value: PropTypes.number.isRequired,
  /** Количество страниц */
  pagesCount: PropTypes.number.isRequired,
}

export default Pagination
