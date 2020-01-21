import React, { ReactNode } from 'react'
import * as R from 'ramda'
import PropTypes from 'prop-types'
import {
  TouchableOpacity,
  View,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native'

import Text from 'york-react-native/components/Text'
import Separator from 'york-react-native/components/Separator'
import { uiPoint } from 'york-react-native/utils/styles'
import { colorNames } from '@qlean/york-core'

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    minHeight: 12 * uiPoint,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  valueLabel: {
    alignSelf: 'flex-start',
  },
  leftView: {
    flex: 1,
  },
})

type Props = {
  /** Заголовок */
  title: ReactNode
  /** Подпись к заголовку */
  caption?: ReactNode
  /** Текст в правой части компонента  если передан `string` или `number`,
   * то он позиционируется на одной линии с заголовком.
   * Позиция кастомного элемента (текст нестандартного цвета или иконка)
   * устанавливается через стиль View `align-self`
   */
  value?: ReactNode
  /**
   * Функция, вызываемая по нажатию на элемент списка. Если не передана, элемент отображается
   * в disabled состоянии
   */
  onPress: (e: GestureResponderEvent) => void
  /** Делает компонент недоступным для нажатия */
  isDisabled: boolean
}

/**
 * Элемент списка. Можно использовать как часть FlatList, SectionList или как отдельный компонент
 */
const ListItem = ({ title, caption, value, onPress, isDisabled }: Props) => (
  <TouchableOpacity
    style={styles.root}
    disabled={!onPress || isDisabled}
    onPress={onPress}
  >
    <Separator height={3} />
    <View style={styles.content}>
      <View style={styles.leftView}>
        {React.isValidElement(title) ? title : <Text>{title}</Text>}

        {React.isValidElement(caption)
          ? caption
          : !R.isNil(caption) && (
              <Text preset="caption" color={colorNames.grey}>
                {caption}
              </Text>
            )}
      </View>

      {React.isValidElement(value)
        ? value
        : !R.isNil(value) && <Text style={styles.valueLabel}>{value}</Text>}
    </View>
    <Separator height={3} />
  </TouchableOpacity>
)

ListItem.defaultProps = {
  onPress: undefined,
  caption: null,
  value: null,
}

export default ListItem
