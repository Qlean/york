import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Platform,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native'
import { colors } from '@qlean/york-core'
import { borderRadiuses } from '../utils/styles'
import { useAnimation } from '../utils/hooks'

const styles = StyleSheet.create({
  root: {
    borderRadius: borderRadiuses.medium,
    backgroundColor: colors.white,
  },
})

const shadows = StyleSheet.create({
  // eslint-disable-next-line react-native/no-unused-styles
  light: {
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.1,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  // eslint-disable-next-line react-native/no-unused-styles
  medium: {
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 12,
        shadowOpacity: 0.1,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  // eslint-disable-next-line react-native/no-unused-styles
  strong: {
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 14,
        shadowOpacity: 0.16,
      },
      android: {
        elevation: 9,
      },
    }),
  },
  // eslint-disable-next-line react-native/no-unused-styles
  hard: {
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 20,
        shadowOpacity: 0.33,
      },
      android: {
        elevation: 16,
      },
    }),
  },
})

const Card = ({ shadow, children }) => {
  const [isPressed, setIsPressed] = useState(false)
  const scale = useAnimation({
    initialValue: 1,
    toValue: isPressed ? 0.98 : 1,
    useNativeDriver: Platform.OS !== 'web',
    duration: 80,
  })

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <Animated.View
        style={[
          styles.root,
          shadows[shadow],
          {
            transform: [{ scale }],
          },
        ]}
      >
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  shadow: PropTypes.oneOf(['light', 'medium', 'strong', 'hard']).isRequired,
}

export default Card
