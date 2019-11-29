import React from 'react'
import * as R from 'ramda'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, StyleSheet } from 'react-native'

import Text from 'york-react-native/components/Text'
import Separator from 'york-react-native/components/Separator'
import { uiPoint } from 'york-react-native/utils/styles'

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    minHeight: 12 * uiPoint,
  },
  itemsContainer: {
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
const ListItem = ({ title, caption, value, onPress, isDisabled }) => (
  <TouchableOpacity
    style={styles.root}
    disabled={!onPress || isDisabled}
    onPress={onPress}
  >
    <Separator height={3} />
    <View style={styles.itemsContainer}>
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
}

const labelPropTypes = PropTypes.oneOfType([
  PropTypes.string.isRequired,
  PropTypes.number.isRequired,
  PropTypes.element.isRequired,
])

ListItem.propTypes = {
  /** Заголовок */
  title: labelPropTypes.isRequired,
  /** Подпись к заголовку */
  caption: labelPropTypes,
  /** Текст в правой части компонента  если передан `string` или `number`,
   * то он позиционируется на одной линии с заголовком.
   * Позиция кастомного элемента (текст нестандартного цвета или иконка)
   * устанавливается через стиль View `align-self`
   */
  value: labelPropTypes,
  /**
   * Функция, вызываемая по нажатию на элемент списка. Если не передана, элемент отображается
   * в disabled состоянии
   */
  onPress: PropTypes.func,
  /** Делает компонент недоступным для нажатия */
  isDisabled: PropTypes.bool.isRequired,
}

export default ListItem
