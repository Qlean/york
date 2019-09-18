import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native'
import { colors } from '@qlean/york-core'

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
    backgroundColor: colors.smoke,
  },
  textContainer: {
    flexShrink: 1,
  },
})

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
}) => {
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
          error && styles.checkboxWithError,
          value && styles.checkboxChecked,
          isDisabled && styles.checkboxDisabled,
        ]}
      >
        <Image source={require('./assets/check.png')} />
      </View>
      <Separator width={2} />
      <View style={styles.textContainer}>
        <Text>{title}</Text>
        {caption && <Text color="grey">{caption}</Text>}
        {error && <Text color="red">{error}</Text>}
      </View>
    </TouchableOpacity>
  )
}

Checkbox.defaultProps = {
  caption: null,
  error: null,
}

Checkbox.propTypes = {
  /** Лэйбл чекбокса */
  title: PropTypes.string.isRequired,
  /** Подзаголовок чекбокса */
  caption: PropTypes.string,
  /** Текст ошибки */
  error: PropTypes.string,
  /** Имя для автотестов, прокидывается как testID */
  name: PropTypes.string.isRequired,
  /** Выбран ли чекбокс */
  value: PropTypes.bool.isRequired,
  /** Коллбек, вызываемый при изменении значения с аргументом `value` */
  onChange: PropTypes.func.isRequired,
  /** Делает чекбокс недоступным для нажатия. */
  isDisabled: PropTypes.bool.isRequired,
}

export default Checkbox
