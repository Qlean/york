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
  topSafeAreaPadding,
} from 'york-react-native/utils/styles'

const headerHeight = uiPoint * 10
const iconSize = 24

const styles = StyleSheet.create({
  root: {
    borderBottomColor: colors.silver,
    borderBottomWidth: 0.5,
    height: headerHeight + topSafeAreaPadding,
    paddingTop: topSafeAreaPadding,
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

export default function Header({
  title,
  caption,
  style,
  leftView,
  rightView,
  onLeftViewPress,
  onRightViewPress,
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
      <TouchableOpacity disabled={!onLeftViewPress} onPress={onLeftViewPress}>
        <View style={styles.sideView}>{leftView}</View>
      </TouchableOpacity>
      <View style={styles.centerView}>
        <Text style={styles.text} numberOfLines={1}>
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
      <TouchableOpacity disabled={!onRightViewPress} onPress={onRightViewPress}>
        <View style={styles.sideView}>{rightView}</View>
      </TouchableOpacity>
    </View>
  )
}

Header.defaultProps = {
  style: null,
  leftView: null,
  rightView: null,
  onLeftViewPress: null,
  onRightViewPress: null,
  withoutSafeAreaPadding: false,
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
  leftView: PropTypes.node,
  rightView: PropTypes.node,
  onLeftViewPress: PropTypes.func,
  onRightViewPress: PropTypes.func,
  withoutSafeAreaPadding: PropTypes.bool,
}

Header.BackIcon = BackIcon
Header.CloseIcon = CloseIcon
