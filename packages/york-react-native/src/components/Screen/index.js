import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
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
const sideViewPadding = sizes[2]
const sideViewContainerSize = 2 * sideViewPadding + sideViewSize

const styles = StyleSheet.create({
  root: {
    marginBottom: safeAreaPaddingBottom,
    marginTop: safeAreaPaddingTop,
  },
  withoutSafeAreaPaddingTop: {
    paddingTop: 0,
  },
  withoutSafeAreaPaddingBottom: {
    paddingBottom: 0,
  },
  sideViewContainer: {
    top: 0,
    position: 'absolute',
    padding: sideViewPadding,
    zIndex: 999, // TODO: fix it
  },
  sideView: {
    width: sideViewSize,
    height: sideViewSize,
    borderRadius: sideViewSize / 2,
    backgroundColor: colors.white,
    justifyContent: 'center',
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
  leftViewContainer: { left: 0 },
  rightViewContainer: { right: 0 },
  footer: {
    padding: sizes[2],
    paddingTop: 0,
  },
})

const SideView = ({ view, isDisabled, onPress, side, ...rest }) => (
  <TouchableOpacity
    {...rest}
    onPress={onPress}
    disabled={isDisabled}
    style={[styles.sideViewContainer, styles[`${side}ViewContainer`]]}
  >
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
  side: PropTypes.oneOf(['left', 'right']).isRequired,
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
 */
const Screen = ({
  children,
  footer,
  leftView,
  rightView,
  statusBarProps,
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
    <>
      <StatusBar {...statusBarProps} />
      <KeyboardAvoidingView
        enabled
        behavior="padding"
        flex={1}
        style={[
          styles.root,
          withoutSafeAreaPaddingTop && styles.withoutSafeAreaPaddingTop,
          withoutSafeAreaPaddingBottom && styles.withoutSafeAreaPaddingBottom,
        ]}
      >
        {leftView ? <SideView {...leftView} side="left" /> : null}
        {rightView ? <SideView {...rightView} side="right" /> : null}
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
    </>
  )
}

Screen.defaultProps = {
  leftView: null,
  rightView: null,
  footer: null,
  statusBarProps: {
    barStyle: 'dark-content',
    backgroundColor: colors.white,
    translucent: false,
  },
  withoutSafeAreaPaddingTop: true,
  withoutSafeAreaPaddingBottom: false,
}

Screen.propTypes = {
  /** Пропы для статус бара. https://facebook.github.io/react-native/docs/statusbar#props */
  statusBarProps: PropTypes.shape({
    barStyle: PropTypes.oneOf(['dark-content', 'light-content', 'default']),
    backgroundColor: PropTypes.string,
    translucent: PropTypes.bool,
  }),
  /** Пропсы для левой части экрана */
  leftView: PropTypes.shape({
    view: PropTypes.node.isRequired,
    isDisabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
  }),
  /** Пропсы для правой части экрана */
  rightView: PropTypes.shape({
    view: PropTypes.node.isRequired,
    isDisabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
  }),
  /** Футер экрана. Прибивается к низу. */
  footer: PropTypes.element,
  /** Детки */
  children: PropTypes.node.isRequired,
  /** Убрать автоматический отступ до безопасной зоны сверху */
  withoutSafeAreaPaddingTop: PropTypes.bool,
  /** Убрать автоматический отступ до безопасной зоны снизу */
  withoutSafeAreaPaddingBottom: PropTypes.bool,
}

Screen.Footer = Footer

export default Screen
