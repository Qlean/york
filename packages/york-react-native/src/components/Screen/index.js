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

const Screen = ({
  children,
  footer,
  footerContainerStyle,
  leftView,
  rightView,
  statusBarProps,
  ...rest
}) => {
  const [scrollViewHeight, setScrollViewHeight] = useState(0)
  const [contentHeight, setContentHeight] = useState(0)
  const scrollEnabled = contentHeight > scrollViewHeight
  return (
    <>
      <StatusBar {...statusBarProps} />
      <KeyboardAvoidingView
        flex={1}
        enabled
        behavior="padding"
        style={{
          marginBottom: safeAreaPaddingBottom,
          marginTop: safeAreaPaddingTop,
        }}
      >
        {leftView ? <SideView {...leftView} side="left" /> : null}
        {rightView ? <SideView {...rightView} side="right" /> : null}
        <ScrollView
          flex={1}
          onLayout={({
            nativeEvent: {
              layout: { height },
            },
          }) => setScrollViewHeight(height)}
          {...rest}
          onContentSizeChange={(w, h) => setContentHeight(h)} // https://medium.com/@spencer_carli/enable-scroll-in-a-react-native-scrollview-based-on-the-content-size-87430ccf319b
          scrollEnabled={scrollEnabled} // works bad with KeyboardAvoidingView
        >
          {(rightView || leftView) && <View style={styles.sideViewSpacer} />}
          {children}
        </ScrollView>
        <View style={footerContainerStyle}>{footer}</View>
      </KeyboardAvoidingView>
    </>
  )
}

Screen.defaultProps = {
  leftView: null,
  rightView: null,
  footer: null,
  footerContainerStyle: null,
  statusBarProps: {
    barStyle: 'dark-content',
    backgroundColor: colors.white,
    translucent: false,
  },
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
  footer: PropTypes.node,
  footerContainerStyle: ViewPropTypes.style,
  children: PropTypes.node.isRequired,
}

export default Screen
