import React from 'react'
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native'
import { colors, colorNames } from '@qlean/york-core'

import { sizes, borderRadiuses } from 'york-react-native/utils/styles'

import Text from 'york-react-native/components/Text'
import Separator from 'york-react-native/components/Separator'

const checkboxSize = sizes[4]
const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkbox: {
    width: checkboxSize,
    height: checkboxSize,
    borderRadius: borderRadiuses.small,
    borderColor: colors.silver,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    /** Компенсация разницы размера чекбокса и lineHeight */
    marginTop: 2,
  },
  checkboxChecked: {
    borderColor: colors.green,
    backgroundColor: colors.green,
  },
  checkboxWithError: {
    borderColor: colors.red,
  },
  checkboxDisabled: {
    borderColor: colors.silver,
    backgroundColor: colors.smoke,
  },
  textContainer: {
    flexShrink: 1,
  },
})

type Props = {
  /** Лэйбл чекбокса */
  title: string
  /** Подзаголовок чекбокса */
  caption?: string
  /** Текст ошибки */
  error?: string
  /** Имя для автотестов, прокидывается как testID */
  name: string
  /** Выбран ли чекбокс */
  value: boolean
  /** Коллбек, вызываемый при изменении значения с аргументом `value` */
  onChange: (e: any) => void
  /** Делает чекбокс недоступным для нажатия. */
  isDisabled: boolean
}

/**
 * Чекбокс. Используется для выбора булевых значений.
 */
const Checkbox = ({
  title,
  caption,
  error,
  name,
  value,
  onChange,
  isDisabled,
}: Props) => {
  const onPress = () => onChange(!value)
  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={styles.root}
      onPress={onPress}
      testID={name}
    >
      <View
        style={[
          styles.checkbox,
          Boolean(error) && styles.checkboxWithError,
          value && styles.checkboxChecked,
          isDisabled && styles.checkboxDisabled,
        ]}
      >
        {value && (
          <Image
            source={
              isDisabled
                ? require('./assets/checkDisabled.png')
                : require('./assets/check.png')
            }
          />
        )}
      </View>
      <Separator width={2} />
      <View style={styles.textContainer}>
        <Text color={isDisabled ? colorNames.grey : colorNames.coal}>
          {title}
        </Text>
        {caption && <Text color={colorNames.grey}>{caption}</Text>}
        {error && <Text color={colorNames.red}>{error}</Text>}
      </View>
    </TouchableOpacity>
  )
}

Checkbox.defaultProps = {
  caption: null,
  error: null,
}

export default Checkbox
