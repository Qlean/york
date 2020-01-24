import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import Separator from 'york-react-native/components/Separator'
import RadioItem from 'york-react-native/components/RadioItem'

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
