import React, { useState, ReactChildren } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Platform,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native'
import { colors } from '@qlean/york-core'
import { borderRadiuses, shadows } from '../utils/styles'
import { useAnimation, useAnimatedShadow } from '../utils/hooks'

const styles = StyleSheet.create({
  root: {
    borderRadius: borderRadiuses.medium,
    backgroundColor: colors.white,
  },
})

enum ShadowLevels {
  light = 'light',
  medium = 'medium',
  strong = 'strong',
  hard = 'hard',
}

const shadowLevels: Array<ShadowLevels> = [
  ShadowLevels.light,
  ShadowLevels.medium,
  ShadowLevels.strong,
  ShadowLevels.hard,
]

const getLighterShadow = (shadowLevel: ShadowLevels) => {
  const previousShadowLevelIndex = shadowLevels.indexOf(shadowLevel)
  const lighterShadowLevel = shadowLevels[previousShadowLevelIndex - 1]
  return shadows[lighterShadowLevel || shadowLevel]
}

type Props = {
  shadow: ShadowLevels
  children: ReactChildren
}

const Card = ({ shadow, children }: Props) => {
  const [isPressed, setIsPressed] = useState(false)
  const currentShadow = shadows[shadow]
  const lighterShadow = getLighterShadow(shadow)

  const {
    shadowOpacity,
    shadowRadius,
    shadowOffsetHeight,
    elevation,
  } = useAnimatedShadow({
    from: currentShadow,
    to: lighterShadow,
    isActive: isPressed,
    duration: 70,
  })

  const scale = useAnimation({
    initialValue: 1,
    toValue: isPressed ? 0.98 : 1,
    useNativeDriver: Platform.OS !== 'web',
    duration: 70,
  })

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <Animated.View
        style={[
          styles.root,
          {
            transform: [{ scale }],
            elevation,
            shadowOpacity,
            shadowRadius,
            shadowOffset: {
              width: 0,
              height: shadowOffsetHeight,
            },
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
  shadow: PropTypes.oneOf(shadowLevels).isRequired,
}

export default Card
