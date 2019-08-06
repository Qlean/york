import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, TouchableOpacity, ViewPropTypes } from 'react-native'
import { colors } from '@qlean/york-core'
import Text from 'york-react-native/components/Text'
import { sizes } from 'york-react-native/utils/styles'

const borderWidth = 4

const styles = StyleSheet.create({
  root: {
    flex: 1,
    minHeight: sizes[12] + borderWidth,
    maxHeight: sizes[12] + borderWidth,
    borderBottomColor: colors.whisper,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  tab: {
    minHeight: sizes[12] + borderWidth,
    maxHeight: sizes[12] + borderWidth,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: colors.white,
    borderBottomWidth: borderWidth,
    flex: 1,
  },
  tabSelected: {
    borderBottomColor: colors.green,
  },
  title: {
    position: 'relative',
    bottom: -borderWidth,
  },
  dot: {
    position: 'absolute',
    width: sizes[2],
    height: sizes[2],
    top: sizes[1],
    right: -sizes[4],
    borderRadius: sizes[2] / 2,
    backgroundColor: colors.red,
  },
})

const Tabs = ({ value, onChange, options, style }) => (
  <View backgroundColor={colors.white} style={[styles.root, style]}>
    {options.map((option, index) => {
      const isSelected = option.value === value

      return (
        <TouchableOpacity
          onPress={() => onChange(option.value, index)}
          key={String(index)}
          activeOpacity={isSelected ? 1 : 0.2}
          style={[styles.tab, isSelected && styles.tabSelected]}
        >
          <View style={[styles.title]}>
            <Text preset="caption" color={isSelected ? 'green' : 'grey'}>
              {option.label}
            </Text>

            {option.withDot && <View style={styles.dot} />}
          </View>
        </TouchableOpacity>
      )
    })}
  </View>
)

Tabs.propTypes = {
  /** Список табов */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]).isRequired,
      label: PropTypes.string.isRequired,
      withDot: PropTypes.bool,
    }),
  ).isRequired,
  /** Коллбек, вызываемый при изменении значения с аргументами `value` и `index` */
  onChange: PropTypes.func.isRequired,
  /** Значение выбранного таба */
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]).isRequired,
  /** Дополнительные стили */
  style: ViewPropTypes.style,
}

Tabs.defaultProps = {
  style: null,
}

export default Tabs
