import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ViewPropTypes,
} from 'react-native'
import { colors } from '@qlean/york-core'

import Text from 'york-react-native/components/Text'

import {
  uiPoint,
  sizes,
  safeAreaPaddingTop,
} from 'york-react-native/utils/styles'

const headerHeight = uiPoint * 10
const iconSize = 24

const styles = StyleSheet.create({
  root: {
    borderBottomColor: colors.silver,
    borderBottomWidth: 0.5,
    height: headerHeight + safeAreaPaddingTop,
    paddingTop: safeAreaPaddingTop,
    flexDirection: 'row',
  },
  withoutSafeAreaPadding: {
    height: headerHeight,
    paddingTop: 0,
  },
  centerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
  title: {
    lineHeight: sizes[4],
  },
  sideView: {
    height: headerHeight,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: iconSize,
    marginHorizontal: sizes[3],
  },
  icon: {
    width: iconSize,
    height: iconSize,
  },
})

const BackIcon = () => (
  <Image style={styles.icon} source={require('./assets/back.png')} />
)

const CloseIcon = () => (
  <Image style={styles.icon} source={require('./assets/close.png')} />
)

const SideView = ({ view, isDisabled, onPress }) => (
  <TouchableOpacity onPress={onPress} disabled={isDisabled}>
    <View style={styles.sideView}>{view}</View>
  </TouchableOpacity>
)

SideView.defaultProps = {
  view: null,
  isDisabled: false,
  onPress: null,
}

SideView.propTypes = {
  view: PropTypes.node,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
}

/**
 * Хедер используется для заголовка окна. Поддерживает кастомные компоненты для левой и правой
 * части, автоматически делает отступ сверху, чтобы хорошо выглядеть на iOS. В хедер уже встроены
 * две иконки — `Header.BackIcon` и `Header.CloseIcon`, их удобно передавать как `leftView.view`
 * или `rightView.view`.
 */
export default function Header({
  title,
  caption,
  style,
  leftView,
  rightView,
  withoutSafeAreaPadding,
}) {
  return (
    <View
      style={[
        styles.root,
        withoutSafeAreaPadding && styles.withoutSafeAreaPadding,
        style,
      ]}
    >
      <SideView {...leftView} />
      <View style={styles.centerView}>
        <Text style={[styles.text, styles.title]} numberOfLines={1}>
          {title}
        </Text>
        {caption && (
          <Text
            style={styles.text}
            preset="captionSmall"
            color="grey"
            numberOfLines={1}
          >
            {caption}
          </Text>
        )}
      </View>
      <SideView {...rightView} />
    </View>
  )
}

Header.defaultProps = {
  style: null,
  leftView: null,
  rightView: null,
  withoutSafeAreaPadding: false,
}

Header.propTypes = {
  /** Заголовок */
  title: PropTypes.string.isRequired,
  /** Подзаголовок */
  caption: PropTypes.string.isRequired,
  /** Дополнительные стили */
  style: ViewPropTypes.style,
  /** Пропсы для левой части хедера */
  leftView: PropTypes.shape({
    view: PropTypes.node.isRequired,
    isDisabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
  }),
  /** Пропсы для правой части хедера */
  rightView: PropTypes.shape({
    view: PropTypes.node.isRequired,
    isDisabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
  }),
  /** Убрать автоматический отступ до безопасной зоны сверху */
  withoutSafeAreaPadding: PropTypes.bool,
}

Header.BackIcon = BackIcon
Header.CloseIcon = CloseIcon
