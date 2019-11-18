import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
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

const RadioItem = ({ title, caption, name, isSelected, onPress }) => (
  <TouchableOpacity style={styles.option} onPress={onPress} testID={name}>
    <View style={[styles.bullet, isSelected && styles.bulletSelected]} />
    <Separator width={2} />
    <View style={styles.textContainer}>
      <Text>{title}</Text>
      {caption ? <Text color="grey">{caption}</Text> : null}
    </View>
  </TouchableOpacity>
)

RadioItem.defaultProps = {
  caption: null,
}

RadioItem.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string,
  name: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
}

const keyExtractor = ({ value }) => String(value)
const ItemSeparatorComponent = () => <Separator height={4} />

/**
 * Группа радио-инпутов, используется для выбора одной опции из нескольких.
 */
const RadioGroup = ({ options, value, name, onChange }) => {
  const onItemPress = (...args) => () => onChange(...args)
  const renderItem = args => {
    const {
      item: { title, value: itemValue, caption },
      index,
    } = args
    return (
      <RadioItem
        title={title}
        caption={caption}
        name={`${name}/${itemValue}`}
        isSelected={itemValue === value}
        onPress={onItemPress(itemValue, index)}
      />
    )
  }
  return (
    <FlatList
      scrollEnabled={false}
      data={options}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={ItemSeparatorComponent}
      renderItem={renderItem}
      extraData={value}
    />
  )
}

RadioGroup.defaultProps = {
  value: null,
}

RadioGroup.propTypes = {
  /** Имя для автотестов, прокидывается как testID в каждый элемент группы в формате `name/value` */
  name: PropTypes.string.isRequired,
  /** Список опций */
  options: PropTypes.arrayOf(
    PropTypes.exact({
      /** Значение опции */
      value: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]).isRequired,
      /** Лейбл опции */
      title: PropTypes.string.isRequired,
      /** Подзаголовок опции */
      caption: PropTypes.string,
    }).isRequired,
  ).isRequired,
  /** Выбранная опция */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Коллбек, вызываемый при изменении значения с аргументами `value` и `index` */
  onChange: PropTypes.func.isRequired,
}

export default RadioGroup
