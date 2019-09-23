import React, { forwardRef, useState, useEffect } from 'react'
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
import { AnalyticsProvider, useAnalytics } from '@qlean/york-analytics'

import {
  safeAreaPaddingTop,
  safeAreaPaddingBottom,
  sizes,
} from 'york-react-native/utils/styles'

const sideViewSize = 32
const sideViewContainerPadding = sizes[2]
const sideViewContainerSize = 2 * sideViewContainerPadding + sideViewSize

const styles = StyleSheet.create({
  screenBackground: {
    backgroundColor: colors.white,
  },
  root: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
  },
  withSafeAreaPaddingTop: {
    paddingTop: safeAreaPaddingTop,
  },
  withSafeAreaPaddingBottom: {
    paddingBottom: safeAreaPaddingBottom,
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
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
  style: null,
}

SideView.propTypes = {
  node: PropTypes.node,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
  style: ViewPropTypes.style,
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
 * `Screen` автоматически создает новый контекст для аналитики (см. york-analytics)
 */
const Screen = forwardRef(
  (
    {
      children,
      footer,
      leftView,
      rightView,
      withSafeAreaPaddingTop,
      withSafeAreaPaddingBottom,
      style,
      name,
      analyticsProps,
      ...rest
    },
    ref,
  ) => {
    const [footerHeight, setFooterHeight] = useState(0)
    const [scrollViewHeight, setScrollViewHeight] = useState(0)
    const [contentHeight, setContentHeight] = useState(0)
    const isScrollEnabled = contentHeight > scrollViewHeight

    const trackScreenEvent = useAnalytics(name)
    useEffect(() => {
      trackScreenEvent({
        label: name,
        action: 'mount',
      })
    }, [name])

    const { trackEvent, properties } = analyticsProps

    const onFooterLayout = ({ nativeEvent }) =>
      setFooterHeight(nativeEvent.layout.height)
    const onScrollViewLayout = ({ nativeEvent }) =>
      setScrollViewHeight(nativeEvent.layout.height)
    const onScrollViewContentSizeChange = (width, height) =>
      setContentHeight(height)

    return (
      <View
        style={[
          styles.screenBackground,
          style,
          styles.root,
          withSafeAreaPaddingTop && styles.withSafeAreaPaddingTop,
          withSafeAreaPaddingBottom && styles.withSafeAreaPaddingBottom,
        ]}
      >
        <KeyboardAvoidingView
          /**
           * https://facebook.github.io/react-native/docs/keyboardavoidingview#behavior
           * Android и iOS по-разному взаимодействуют с `behavior`. Android может вести себя лучше,
           * если вообще не задавать проп, в то время как iOS - наоборот.
           */
          {...(Platform.OS === 'ios' && { behavior: 'height' })}
          style={styles.root}
        >
          {leftView && <SideView {...leftView} style={styles.leftView} />}
          {rightView && <SideView {...rightView} style={styles.rightView} />}
          <ScrollView
            {...rest}
            name={name}
            ref={ref}
            scrollEnabled={isScrollEnabled}
            onLayout={onScrollViewLayout}
            onContentSizeChange={onScrollViewContentSizeChange}
          >
            {(rightView || leftView) && <View style={styles.sideViewSpacer} />}
            <AnalyticsProvider
              category={name}
              properties={properties}
              trackEvent={trackEvent}
            >
              {children}
            </AnalyticsProvider>
            {footer && <View style={{ height: footerHeight }} />}
          </ScrollView>
          {footer && (
            <View style={styles.footerContainer} onLayout={onFooterLayout}>
              {footer}
            </View>
          )}
        </KeyboardAvoidingView>
      </View>
    )
  },
)

Screen.defaultProps = {
  leftView: null,
  rightView: null,
  footer: null,
  withSafeAreaPaddingTop: false,
  withSafeAreaPaddingBottom: true,
  style: null,
  analyticsProps: {},
}

Screen.propTypes = {
  /** Название экрана */
  name: PropTypes.string.isRequired,
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
  /** Автоматический отступ до безопасной зоны сверху */
  withSafeAreaPaddingTop: PropTypes.bool,
  /** Автоматический отступ до безопасной зоны снизу */
  withSafeAreaPaddingBottom: PropTypes.bool,
  /** Пропсы для AnalyticsProvider */
  analyticsProps: PropTypes.shape({
    /** Функция трекинга */
    trackEvent: PropTypes.func,
    /** Объект с дополниельными данными  для аналитики */
    properties: PropTypes.object,
  }),
  children: PropTypes.node.isRequired,
  style: ViewPropTypes.style,
}

Screen.Footer = Footer

export default Screen
