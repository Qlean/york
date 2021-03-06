import React, { forwardRef, useState, useContext, ReactNode } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableOpacityProps,
  ScrollViewProps,
  LayoutChangeEvent,
} from 'react-native'
import { colors } from '@qlean/york-core'
import {
  AnalyticsContext,
  AnalyticsProvider,
  usePageView,
} from '@qlean/york-analytics'

import {
  safeAreaPaddingTop,
  safeAreaPaddingBottom,
  sizes,
} from 'york-react-native/utils/styles'
import ScreenFooter from 'york-react-native/components/ScreenFooter'

type SideViewProps = {
  node: ReactNode
  isDisabled?: boolean
  onPress: Function
} & TouchableOpacityProps

type ScreenProps = {
  /** Название экрана */
  name: string
  /** Пропсы для левой верхней кнопки экрана */
  leftView?: SideViewProps
  /** Пропсы для правой верхней кнопки экрана */
  rightView?: SideViewProps
  /** Футер экрана. Прибивается к низу. */
  footer?: JSX.Element
  /** Автоматический отступ до безопасной зоны сверху */
  withSafeAreaPaddingTop?: boolean
  /** Автоматический отступ до безопасной зоны снизу */
  withSafeAreaPaddingBottom?: boolean
  /** Дополнительные данные для аналитики */
  analyticsPayload: {
    [key: string]: string | number
  }
  children: ReactNode
  refreshControl?: JSX.Element
  isPayloadReady?: boolean
} & ScrollViewProps

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
})

const SideView = ({
  node,
  isDisabled = false,
  onPress,
  style,
  ...rest
}: SideViewProps) => (
  <TouchableOpacity
    {...rest}
    onPress={onPress}
    disabled={isDisabled}
    style={[styles.sideViewContainer, style]}
  >
    <View style={styles.sideViewContent}>{node}</View>
  </TouchableOpacity>
)

/**
 * Экран. Принимает все пропы для `ScrollView`, умеет отображать фиксированный футер, левую
 * и правую верхние иконки для действий, автоматически делает отступ снизу, чтобы хорошо выглядеть
 * на iOS, автоматически включает скролл, если контент не помещается, хорошо выглядит с открытой
 * клавиатурой. В компонент встроен футер с отступами — Screen.Footer.
 * По умолчанию сейф-зона снизу включена, а сверху — отключена. Предполагается, что чаще всего экран
 * будет использоваться вместе с `Header`, в котором сейф-зона сверху уже есть.
 * `Screen` автоматически создает новый контекст для аналитики (см. york-analytics) и отправляет событие
 * о просмотре экрана.
 * @visibleName Screen
 */
export const Screen = forwardRef<ScrollView, ScreenProps>(
  (
    {
      children,
      footer,
      leftView,
      rightView,
      withSafeAreaPaddingTop = false,
      withSafeAreaPaddingBottom = true,
      style,
      name,
      analyticsPayload,
      refreshControl,
      isPayloadReady = true,
      ...rest
    },
    ref,
  ) => {
    const [footerHeight, setFooterHeight] = useState(0)
    const [scrollViewHeight, setScrollViewHeight] = useState(0)
    const [contentHeight, setContentHeight] = useState(0)
    const isScrollEnabled =
      Boolean(refreshControl) || contentHeight > scrollViewHeight

    const onFooterLayout = ({ nativeEvent }: LayoutChangeEvent) =>
      setFooterHeight(nativeEvent.layout.height)
    const onScrollViewLayout = ({ nativeEvent }: LayoutChangeEvent) =>
      setScrollViewHeight(nativeEvent.layout.height)
    const onScrollViewContentSizeChange = (width: number, height: number) =>
      setContentHeight(height)

    const renderScreenBody = () => (
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
            ref={ref}
            scrollEnabled={isScrollEnabled}
            onLayout={onScrollViewLayout}
            onContentSizeChange={onScrollViewContentSizeChange}
            refreshControl={refreshControl}
          >
            {(rightView || leftView) && <View style={styles.sideViewSpacer} />}
            {children}
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

    const analyticsContext = useContext(AnalyticsContext)
    usePageView({ name, payload: analyticsPayload, isPayloadReady })

    return analyticsContext ? (
      <AnalyticsProvider category={name}>
        {renderScreenBody()}
      </AnalyticsProvider>
    ) : (
      renderScreenBody()
    )
  },
)

// @Deprecated
// @ts-ignore
Screen.Footer = ScreenFooter

export default Screen
