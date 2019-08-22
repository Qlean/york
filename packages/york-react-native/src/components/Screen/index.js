import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ViewPropTypes,
} from 'react-native'
import { colors } from '@qlean/york-core'

import { safeAreaPaddingTop, sizes } from 'york-react-native/utils/styles'

const { height: screenHeight } = Dimensions.get('window')
const sideViewSize = 32
const sideViewPadding = sizes[2]
const sideViewContainerSize = 2 * sideViewPadding + sideViewSize

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
  sideViewSpacer: { height: sideViewContainerSize },
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
  header,
  footer,
  footerContainerStyle,
  leftView,
  rightView,
  ...rest
}) => {
  const [contentHeight, setContentHeight] = useState(0)
  const [footerHeight, setFooterHeight] = useState(0)
  const scrollEnabled = contentHeight > screenHeight // - headerHeight ??
  return (
    <>
      <StatusBar
        barStyle="dark-content" // ["dark-content", "light-content", "default"]
        backgroundColor={colors.green} // android
        translucent={false} // android
      />
      <SafeAreaView flex={1}>
        {header || null}
        <KeyboardAvoidingView
          enabled
          behavior="height" // enum('height', 'position', 'padding')
          keyboardVerticalOffset={StatusBar.currentHeight || safeAreaPaddingTop} // don't know why but it works with sticky footer
        >
          {leftView ? <SideView {...leftView} side="left" /> : null}
          {rightView ? <SideView {...rightView} side="right" /> : null}
          <ScrollView
            {...rest}
            onContentSizeChange={(w, h) => setContentHeight(h)} // https://medium.com/@spencer_carli/enable-scroll-in-a-react-native-scrollview-based-on-the-content-size-87430ccf319b
            scrollEnabled={scrollEnabled} // works bad with KeyboardAvoidingView
          >
            {(rightView || leftView) && <View style={styles.sideViewSpacer} />}
            {children}
            <View
              style={{
                height: footerHeight,
              }}
            />
          </ScrollView>
          <View
            style={[styles.footer, footerContainerStyle]}
            onLayout={({
              nativeEvent: {
                layout: { height },
              },
            }) => setFooterHeight(height)}
          >
            {footer || null}
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  )
}

Screen.defaultProps = {
  leftView: null,
  rightView: null,
  footer: null,
  header: null,
  footerContainerStyle: null,
}

Screen.propTypes = {
  /** Пропы для статус бара. https://facebook.github.io/react-native/docs/statusbar#props */
  statusBarProps: PropTypes.shape({}),
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
  /** Хэдер экрана. Лучше избегать и использовать статические методы вроде `navigationOptions` из `react-navigation` */
  header: PropTypes.node,
  children: PropTypes.node.isRequired,
}

export default Screen
