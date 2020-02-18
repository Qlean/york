import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, StyleSheet, ViewPropTypes } from 'react-native'
import { colors } from '@qlean/york-core'

import { sizes } from 'york-react-native/utils/styles'

import Text from 'york-react-native/components/Text'
import Separator from 'york-react-native/components/Separator'

const bulletSize = sizes[4]

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bullet: {
    width: bulletSize,
    height: bulletSize,
    borderRadius: bulletSize / 2,
    borderWidth: 1,
    borderColor: colors.silver,
    backgroundColor: colors.white,
    /** Компенсация разницы размера буллета и lineHeight */
    marginTop: 2,
  },
  bulletSelected: {
    borderWidth: 6,
    borderColor: colors.green,
  },
  textContainer: {
    flexShrink: 1,
  },
})

/**
 * Радио-инпут, встроен в <RadioGroup/>, может использоваться отдельно
 */
const RadioItem = ({
  title,
  caption,
  name,
  isSelected,
  onPress,
  style,
  ...rest
}) => (
  <TouchableOpacity
    style={[styles.option, style]}
    onPress={onPress}
    testID={name}
    {...rest}
  >
    <View style={[styles.bullet, isSelected && styles.bulletSelected]} />
    <Separator width={2} />
    <View style={styles.textContainer}>
      <Text>{title}</Text>
      {caption ? <Text color="grey">{caption}</Text> : null}
    </View>
  </TouchableOpacity>
)

RadioItem.defaultProps = {
  title: null,
  caption: null,
  style: null,
}

RadioItem.propTypes = {
  /** Лейбл радио-кнопки */
  title: PropTypes.string,
  /** Подзаголовок */
  caption: PropTypes.string,
  /** Имя для автотестов, прокидывается как testID */
  name: PropTypes.string.isRequired,
  /** Состояние радио-кнопки */
  isSelected: PropTypes.bool.isRequired,
  /** Коллбек, вызываемый при нажатии с аргементом (e: GestureEventResponder) */
  onPress: PropTypes.func.isRequired,
  /** Дополнительные стили */
  style: ViewPropTypes.style,
}

export default RadioItem