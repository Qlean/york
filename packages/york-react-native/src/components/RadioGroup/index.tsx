import React from 'react'
import { FlatList, ListRenderItem, GestureResponderEvent } from 'react-native'

import Separator from 'york-react-native/components/Separator'
import RadioItem from 'york-react-native/components/RadioItem'

type RadioValue = string | number

type OnRadioItemPress = (e: GestureResponderEvent) => void

type RadioOption = {
  /** Значение опции */
  value: RadioValue
  /** Лейбл опции */
  title: string
  /** Подзаголовок опции */
  caption?: string
}

type RadioGroupProps = {
  /** Имя для автотестов, прокидывается как testID в каждый элемент группы в формате `name/value` */
  name: string
  /** Список опций */
  options: RadioOption[]
  /** Выбранная опция */
  value: RadioValue
  /** Коллбек, вызываемый при изменении значения с аргументами `value` и `index` */
  onChange: (value: RadioValue, index: number) => void
}

const keyExtractor = ({ value }: { value: RadioValue }) => String(value)

const ItemSeparatorComponent = () => <Separator height={4} />

/**
 * Группа радио-инпутов, используется для выбора одной опции из нескольких.
 */
export const RadioGroup = ({
  options,
  value,
  name,
  onChange,
}: RadioGroupProps) => {
  const onItemPress: (value: RadioValue, index: number) => OnRadioItemPress = (
    ...args
  ) => () => onChange(...args)
  const renderItem: ListRenderItem<RadioOption> = args => {
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

export default RadioGroup
