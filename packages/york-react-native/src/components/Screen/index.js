import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ViewPropTypes,
} from 'react-native'
import { colors } from '@qlean/york-core'

import {
  safeAreaPaddingTop,
  safeAreaPaddingBottom,
  sizes,
} from 'york-react-native/utils/styles'

const sideViewSize = 32
const sideViewContainerPadding = sizes[2]
const sideViewContainerSize = 2 * sideViewContainerPadding + sideViewSize

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: safeAreaPaddingTop,
    marginBottom: safeAreaPaddingBottom,
  },
  withoutSafeAreaPaddingTop: {
    marginTop: 0,
  },
  withoutSafeAreaPaddingBottom: {
    marginBottom: 0,
  },
  sideViewContainer: {
    position: 'absolute',
    top: 0,
    padding: sideViewContainerPadding,
    zIndex: 1,
  },
  sideViewContent: {
    paddingHorizontal: 4,
    height: sideViewSize,
    borderRadius: sideViewSize / 2,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 6,
      },
      android: { elevation: 7 },
      web: {
        shadowColor: colors.black,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 6,
      },
    }),
  },
  sideViewSpacer: {
    height: sideViewContainerSize,
  },
  leftView: { left: 0 },
  rightView: { right: 0 },
  footer: {
    padding: sizes[2],
    paddingTop: 0,
  },
})

const SideView = ({ node, isDisabled, onPress, style, ...rest }) => (
  <TouchableOpacity
    {...rest}
    onPress={onPress}
    disabled={isDisabled}
    style={[styles.sideViewContainer, style]}
  >
    <View style={styles.sideViewContent}>{node}</View>
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
  side: PropTypes.oneOf(['left', 'right']).isRequired,
  style: ViewPropTypes.style.isRequired,
}

const Footer = ({ style, ...rest }) => (
  <View {...rest} style={[styles.footer, style]} />
)

Footer.defaultProps = {
  style: null,
}

Footer.propTypes = {
  style: ViewPropTypes.style,
}

/**
 * Экран. Принимает все пропы для `ScrollView`, умеет отображать фиксированный футер, левую
 * и правую верхние иконки для действий, автоматически делает отступ снизу, чтобы хорошо выглядеть
 * на iOS, автоматически включает скролл, если контент не помещается, хорошо выглядит с открытой
 * клавиатурой. В компонент встроен футер с отступами — Screen.Footer.
 * По умолчанию сейф-зона снизу включена, а сверху — отключена. Предполагается, что чаще всего экран
 * будет использоваться вместе с `Header`, в котором сейф-зона сверху уже есть.
 */
const Screen = ({
  children,
  footer,
  leftView,
  rightView,
  withoutSafeAreaPaddingTop,
  withoutSafeAreaPaddingBottom,
  ...rest
}) => {
  const [scrollViewHeight, setScrollViewHeight] = useState(0)
  const [contentHeight, setContentHeight] = useState(0)
  const isScrollEnabled = contentHeight > scrollViewHeight

  const onScrollViewLayout = ({ nativeEvent }) =>
    setScrollViewHeight(nativeEvent.layout.height)
  const onScrollViewContentSizeChange = (width, height) =>
    setContentHeight(height)

  return (
    <KeyboardAvoidingView
      /**
       * https://facebook.github.io/react-native/docs/keyboardavoidingview#behavior
       * Android и iOS по-разному взаимодействуют с `behavior`. Android может вести себя лучше,
       * если вообще не задавать проп, в то время как iOS - наоборот.
       */
      {...(Platform.OS === 'ios' && { behavior: 'padding' })}
      style={[
        styles.root,
        withoutSafeAreaPaddingTop && styles.withoutSafeAreaPaddingTop,
        withoutSafeAreaPaddingBottom && styles.withoutSafeAreaPaddingBottom,
      ]}
    >
      {leftView ? <SideView {...leftView} style={styles.leftView} /> : null}
      {rightView ? <SideView {...rightView} style={styles.rightView} /> : null}
      <ScrollView
        {...rest}
        scrollEnabled={isScrollEnabled}
        onLayout={onScrollViewLayout}
        onContentSizeChange={onScrollViewContentSizeChange}
      >
        {(rightView || leftView) && <View style={styles.sideViewSpacer} />}
        {children}
      </ScrollView>
      {footer}
    </KeyboardAvoidingView>
  )
}

Screen.defaultProps = {
  leftView: null,
  rightView: null,
  footer: null,
  withoutSafeAreaPaddingTop: true,
  withoutSafeAreaPaddingBottom: false,
}

Screen.propTypes = {
  /** Пропсы для левой верхней кнопки экрана */
  leftView: PropTypes.shape({
    node: PropTypes.node.isRequired,
    isDisabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
  }),
  /** Пропсы для правой верхней кнопки экрана */
  rightView: PropTypes.shape({
    node: PropTypes.node.isRequired,
    isDisabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
  }),
  /** Футер экрана. Прибивается к низу. */
  footer: PropTypes.element,
  /** Убрать автоматический отступ до безопасной зоны сверху */
  withoutSafeAreaPaddingTop: PropTypes.bool,
  /** Убрать автоматический отступ до безопасной зоны снизу */
  withoutSafeAreaPaddingBottom: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Screen.Footer = Footer

export default Screen
