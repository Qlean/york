import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native'
import { colors } from '@qlean/york-core'

import {
  Text,
  Separator,
  sizes,
  borderRadiuses,
} from '@qlean/york-react-native'

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
  textContainer: {
    flexShrink: 1,
  },
})

/**
 * Чекбокс. Используется для выбора булевых значений.
 */
const Checkbox = ({ label, caption, error, name, isChecked, onChange }) => {
  const onPress = () => onChange(isChecked)
  return (
    <TouchableOpacity style={styles.root} onPress={onPress} testID={name}>
      <View
        style={[
          styles.checkbox,
          isChecked && styles.checkboxChecked,
          error && styles.checkboxWithError,
        ]}
      >
        <Image source={require('./assets/check.png')} />
      </View>
      <Separator width={2} />
      <View style={styles.textContainer}>
        <Text>{label}</Text>
        {caption ? <Text color="grey">{caption}</Text> : null}
        {error ? <Text color="red">{error}</Text> : null}
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
  label: PropTypes.string.isRequired,
  /** Подзаголовок чекбокса */
  caption: PropTypes.string,
  /** Текст ошибки */
  error: PropTypes.string,
  /** Имя для автотестов, прокидывается как testID */
  name: PropTypes.string.isRequired,
  /** Выбран ли чекбокс */
  isChecked: PropTypes.bool.isRequired,
  /** Коллбек, вызываемый при изменении значения с аргументом `value` */
  onChange: PropTypes.func.isRequired,
}

export default Checkbox
