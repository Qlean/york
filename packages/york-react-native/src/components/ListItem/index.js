import React from 'react'
import * as R from 'ramda'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, StyleSheet, ViewPropTypes } from 'react-native'

import Text from 'york-react-native/components/Text'
import Separator from 'york-react-native/components/Separator'
import { uiPoint } from 'york-react-native/utils/styles'

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

/**
 * Элемент списка. Можно использовать как часть FlatList, SectionList или как отдельный компонент
 */
const ListItem = ({ title, caption, value, onPress, isDisabled, style }) => (
  <TouchableOpacity
    style={[styles.root, style]}
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
              <Text preset="caption" color="grey">
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
  style: null,
}

ListItem.propTypes = {
  /** Заголовок */
  title: PropTypes.node.isRequired,
  /** Подпись к заголовку */
  caption: PropTypes.node,
  /** Текст в правой части компонента  если передан `string` или `number`,
   * то он позиционируется на одной линии с заголовком.
   * Позиция кастомного элемента (текст нестандартного цвета или иконка)
   * устанавливается через стиль View `align-self`
   */
  value: PropTypes.node,
  /**
   * Функция, вызываемая по нажатию на элемент списка. Если не передана, элемент отображается
   * в disabled состоянии
   */
  onPress: PropTypes.func,
  /** Делает компонент недоступным для нажатия */
  isDisabled: PropTypes.bool.isRequired,
  /** Дополнительные стили */
  style: ViewPropTypes.style,
}

export default ListItem
