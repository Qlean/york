import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import * as R from 'ramda'
import { colors } from '@qlean/york-core'

import { sizes } from 'york-react-native/utils/styles'

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: sizes[1],
    height: sizes[1],
    borderRadius: sizes[1] / 2,
    backgroundColor: colors.whisper,
  },
  withRightMargin: {
    marginRight: sizes[3],
  },
  filled: {
    backgroundColor: colors.green,
  },
  selected: {
    width: sizes[2],
    height: sizes[2],
    borderRadius: sizes[2] / 2,
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

Pagination.defaultProps = {
  pagesCount: 7,
}

Pagination.propTypes = {
  /** Текущая выбранная страница */
  value: PropTypes.number.isRequired,
  /** Количество страниц */
  pagesCount: PropTypes.number,
}

export default Pagination
