import React from 'react'
import * as R from 'ramda'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, StyleSheet } from 'react-native'

import Text from 'york-react-native/components/Text'
import Icon from 'york-react-native/components/Icon'
import Separator from 'york-react-native/components/Separator'
import { sizes, uiPoint } from 'york-react-native/utils/styles'

const styles = StyleSheet.create({
  root: {
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
  titleProps,
  captionProps,
  isDisabled,
  withArrow = false,
}) => (
  <TouchableOpacity
    style={styles.root}
    disabled={!onPress || isDisabled}
    onPress={onPress}
  >
    <Separator height={3} />
    <View
      style={[
        styles.titleContainer,
        caption && !withArrow && styles.titleWithCaption,
      ]}
    >
      <View style={styles.leftView}>
        <Text style={styles.text} {...titleProps}>
          {title}
        </Text>
        {R.isNil(caption) ? null : (
          <Text style={styles.text} color="grey" {...captionProps}>
            {caption}
          </Text>
        )}
      </View>
      {R.isNil(value) ? null : (
        <Text style={styles.text} {...valueProps}>
          {value}
        </Text>
      )}
      {withArrow && (
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
  titleProps: {},
  captionProps: {},
  valueProps: {},
  withArrow: false,
}

const numberOrStringPropType = PropTypes.oneOfType([
  PropTypes.string.isRequired,
  PropTypes.number.isRequired,
])

ListItem.propTypes = {
  /**
   * Функция, вызываемая по нажатию на элемент списка. Если не передана, элемент отображается
   * в disabled состоянии
   */
  onPress: PropTypes.func,
  /** Заголовок */
  title: numberOrStringPropType.isRequired,
  /** Подпись к заголовку */
  caption: numberOrStringPropType,
  /** Делает компонент недоступным для нажатия */
  isDisabled: PropTypes.bool.isRequired,
  /** Текст в правой части компонента, всегда отображается на одной линии с заголовком */
  value: numberOrStringPropType,
  /** Пропы для компонента Text, в который обёрнут title */
  // eslint-disable-next-line react/forbid-prop-types
  titleProps: PropTypes.object,
  /** Пропы для компонента Text, в который обёрнут caption */
  // eslint-disable-next-line react/forbid-prop-types
  captionProps: PropTypes.object,
  /** Пропы для компонента Text, в который обёрнут value */
  // eslint-disable-next-line react/forbid-prop-types
  valueProps: PropTypes.object,
  /** Контроллирует отображение иконки в правой части компонента */
  withArrow: PropTypes.bool,
}

export default ListItem
