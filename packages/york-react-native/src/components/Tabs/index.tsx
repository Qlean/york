import React from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { colors, colorNames } from '@qlean/york-core'

import Text from 'york-react-native/components/Text'
import { sizes } from 'york-react-native/utils/styles'

const borderWidth = 4

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    minHeight: sizes[12] + borderWidth,
    maxHeight: sizes[12] + borderWidth,
    borderBottomColor: colors.whisper,
    borderBottomWidth: 1,
    backgroundColor: colors.white,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: sizes[12] + borderWidth,
    maxHeight: sizes[12] + borderWidth,
    borderBottomColor: colors.transparent,
    borderBottomWidth: borderWidth,
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

type TabValue = string | number

type TabOption = {
  value: TabValue
  label: string
  withDot: boolean
}

type Props = {
  /** Список табов */
  options: TabOption[]
  /** Коллбек, вызываемый при изменении значения с аргументами `value` и `index` */
  onChange: (value: TabValue, index: number) => void
  /** Значение выбранного таба */
  value: TabValue
  /** Дополнительные стили */
  style: StyleProp<ViewStyle>
}

/**
 * Табы, используются для навигации. Поддерживают стандартный список `options` с полями `value`
 * и `label`, а так же специальным `bool` полем `withDot`, которое контроллирует отображение
 * красного индикатора рядом с названием таба.
 */
const Tabs = ({ value, onChange, options, style }: Props) => (
  <View style={[styles.root, style]}>
    {options.map((option, index) => {
      const isSelected = option.value === value

      return (
        <TouchableOpacity
          onPress={() => onChange(option.value, index)}
          key={option.value}
          activeOpacity={isSelected ? 1 : 0.2}
          style={[styles.tab, isSelected && styles.tabSelected]}
        >
          <View style={[styles.title]}>
            <Text
              preset="caption"
              color={isSelected ? colorNames.green : colorNames.grey}
            >
              {option.label}
            </Text>

            {option.withDot && <View style={styles.dot} />}
          </View>
        </TouchableOpacity>
      )
    })}
  </View>
)

export default Tabs
