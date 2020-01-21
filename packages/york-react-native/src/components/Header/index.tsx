import React, { ReactNode } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  GestureResponderEvent,
  ViewStyle,
} from 'react-native'
import { colors, colorNames } from '@qlean/york-core'

import Text from 'york-react-native/components/Text'
import {
  uiPoint,
  sizes,
  safeAreaPaddingTop,
} from 'york-react-native/utils/styles'

type SideViewProps = {
  node: ReactNode
  testID: string
  isDisabled?: boolean
  onPress: (e: GestureResponderEvent) => void
}

type HeaderProps = {
  /** Заголовок */
  title?: string
  /** Подзаголовок */
  caption?: string
  /** Дополнительные стили */
  style: ViewStyle
  /** Кастомное содержимое центральной части хедера, если передано, 
  то title и caption игнорируются  */
  centerNode?: ReactNode
  /** Пропсы для левой части хедера */
  leftView: SideViewProps
  /** Пропсы для правой части хедера */
  rightView: SideViewProps
  /** Автоматический отступ до безопасной зоны сверху */
  withSafeAreaPadding?: boolean
}

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

const SideView = ({
  node,
  isDisabled = false,
  onPress,
  ...rest
}: SideViewProps) => (
  <TouchableOpacity onPress={onPress} disabled={isDisabled} {...rest}>
    <View style={styles.sideView}>{node}</View>
  </TouchableOpacity>
)

/**
 * Хедер используется для заголовка окна. Поддерживает кастомные компоненты для левой и правой
 * части, автоматически делает отступ сверху, чтобы хорошо выглядеть на iOS.
 */
export default function Header({
  title = '',
  caption = '',
  style,
  leftView,
  rightView,
  centerNode,
  withSafeAreaPadding = true,
}: HeaderProps) {
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
                color={colorNames.grey}
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
