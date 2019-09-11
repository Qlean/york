import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, StyleSheet } from 'react-native'

import { Separator, Text, Icon } from 'york-react-native/components'
import { sizes, uiPoint } from 'york-react-native/utils/styles'

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: 12 * uiPoint,
  },
  text: {
    lineHeight: sizes[4],
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleWithCaption: {
    alignItems: 'flex-start',
  },
  leftView: {
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

/**
 * Элемент списка. Можно использовать как часть FlatList, SectionList или как отдельный компонент
 */
const ListItem = ({
  onPress,
  title,
  caption,
  value,
  valueProps,
  withIcon = false,
}) => (
  <TouchableOpacity
    style={styles.root}
    disabled={typeof onPress !== 'function'}
    onPress={onPress}
  >
    <Separator height={3} />
    <View
      style={[
        styles.titleContainer,
        caption && !withIcon && styles.titleWithCaption,
      ]}
    >
      <View style={styles.leftView}>
        <Text style={styles.text}>{title}</Text>
        {caption && (
          <Text style={styles.text} color="grey">
            {caption}
          </Text>
        )}
      </View>
      {value && (
        <Text style={styles.text} {...valueProps}>
          {value}
        </Text>
      )}
      {withIcon && (
        <View style={styles.iconContainer}>
          <Icon name="arrow" />
        </View>
      )}
    </View>
    <Separator height={3} />
  </TouchableOpacity>
)

ListItem.defaultProps = {
  onPress: undefined,
  caption: null,
  value: null,
  valueProps: {},
  withIcon: false,
}

const numberOrStringPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
])

ListItem.propTypes = {
  /**
   * Функция, вызываемая по нажатию на элемент списка.
   * Если не передана, элемент отображается в disabled состоянии
   */
  onPress: PropTypes.func,
  /** Заголовок */
  title: numberOrStringPropType.isRequired,
  /** Подпись к заголовку */
  caption: numberOrStringPropType,
  /** Текст в правой части компонента, всегда отображается на одной линии с заголовком */
  value: numberOrStringPropType,
  /** Пропы для компонента Text, в который обёрнут value */
  valueProps: PropTypes.object,
  /** Контроллирует отображение иконки в правой части компонента */
  withIcon: PropTypes.bool,
}

export default ListItem
