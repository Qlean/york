import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, TouchableOpacity, ViewPropTypes } from 'react-native'
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
    backgroundColor: colors.white,
    borderBottomColor: colors.silver,
    borderBottomWidth: 0.5,
    height: headerHeight,
    paddingTop: 0,
    flexDirection: 'row',
  },
  withSafeAreaPadding: {
    height: headerHeight + safeAreaPaddingTop,
    paddingTop: safeAreaPaddingTop,
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
})

const SideView = ({ node, isDisabled, onPress, ...rest }) => (
  <TouchableOpacity onPress={onPress} disabled={isDisabled} {...rest}>
    <View style={styles.sideView}>{node}</View>
  </TouchableOpacity>
)

SideView.defaultProps = {
  node: null,
  isDisabled: false,
  onPress: null,
}

SideView.propTypes = {
  node: PropTypes.node,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
}

/**
 * Хедер используется для заголовка окна. Поддерживает кастомные компоненты для левой и правой
 * части, автоматически делает отступ сверху, чтобы хорошо выглядеть на iOS.
 */
export default function Header({
  title,
  caption,
  style,
  leftView,
  rightView,
  centerNode,
  withSafeAreaPadding,
}) {
  return (
    <View
      style={[
        styles.root,
        withSafeAreaPadding && styles.withSafeAreaPadding,
        style,
      ]}
    >
      <SideView {...leftView} testID="headerLeftView" />
      <View style={styles.centerView}>
        {centerNode || (
          <>
            <Text style={[styles.text, styles.title]} numberOfLines={1}>
              {title}
            </Text>
            {Boolean(caption) && (
              <Text
                style={styles.text}
                preset="captionSmall"
                color="grey"
                numberOfLines={1}
              >
                {caption}
              </Text>
            )}
          </>
        )}
      </View>
      <SideView {...rightView} testID="headerRightView" />
    </View>
  )
}

Header.defaultProps = {
  title: '',
  caption: '',
  style: null,
  centerNode: null,
  leftView: null,
  rightView: null,
  withSafeAreaPadding: true,
}

Header.propTypes = {
  /** Заголовок */
  title: PropTypes.string,
  /** Подзаголовок */
  caption: PropTypes.string,
  /** Дополнительные стили */
  style: ViewPropTypes.style,
  /** Кастомное содержимое центральной части хедера, если передано, 
  то title и caption игнорируются  */
  centerNode: PropTypes.node,
  /** Пропсы для левой части хедера */
  leftView: PropTypes.shape({
    node: PropTypes.node.isRequired,
    isDisabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
  }),
  /** Пропсы для правой части хедера */
  rightView: PropTypes.shape({
    node: PropTypes.node.isRequired,
    isDisabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
  }),
  /** Автоматический отступ до безопасной зоны сверху */
  withSafeAreaPadding: PropTypes.bool,
}
