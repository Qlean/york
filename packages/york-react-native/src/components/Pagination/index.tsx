import React from 'react'
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

type Props = {
  /** Текущая выбранная страница */
  value: number
  /** Количество страниц */
  pagesCount: number
}

/**
 * Пагинация. Принимает количество страниц и номер текущей.
 */
const Pagination = ({ pagesCount, value: currentStep }: Props) => {
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

export default Pagination
