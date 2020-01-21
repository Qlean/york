import React from 'react'
import {
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  GestureResponderEvent,
  ListRenderItem,
} from 'react-native'
import { colors, colorNames } from '@qlean/york-core'

import { sizes } from 'york-react-native/utils/styles'
import Text from 'york-react-native/components/Text'
import Separator from 'york-react-native/components/Separator'

type RadioValue = string | number

type OnRadioItemPress = (e: GestureResponderEvent) => void

type RadioItemProps = {
  title: string
  caption?: string
  name: string
  isSelected: boolean
  onPress: OnRadioItemPress
}

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

const RadioItem = ({
  title,
  caption,
  name,
  isSelected,
  onPress,
}: RadioItemProps) => (
  <TouchableOpacity style={styles.option} onPress={onPress} testID={name}>
    <View style={[styles.bullet, isSelected && styles.bulletSelected]} />
    <Separator width={2} />
    <View style={styles.textContainer}>
      <Text>{title}</Text>
      {caption ? <Text color={colorNames.grey}>{caption}</Text> : null}
    </View>
  </TouchableOpacity>
)

const keyExtractor = ({ value }: { value: RadioValue }) => String(value)
const ItemSeparatorComponent = () => <Separator height={4} />

/**
 * Группа радио-инпутов, используется для выбора одной опции из нескольких.
 */
const RadioGroup = ({ options, value, name, onChange }: RadioGroupProps) => {
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
