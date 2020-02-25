import { useRef, useEffect } from 'react'
import { Animated, Platform } from 'react-native'

export const useAnimation = (config: any) => {
  const { initialValue = 0 } = config
  const animatedValue = useRef(new Animated.Value(initialValue)).current

  const animate = () => {
    Animated.timing(animatedValue, config).start()
  }

  useEffect(animate, [config.toValue])

  return animatedValue
}

export const useAnimatedShadow = ({ from, to, isActive, duration }: any) => {
  const animatedShadow = useAnimation({
    initialValue: isActive ? 0 : 1,
    toValue: isActive ? 0 : 1,
    useNativeDriver: Platform.OS !== 'web',
    duration,
  })

  const shadowOpacity = animatedShadow.interpolate({
    inputRange: [0, 1],
    outputRange: [from.shadowOpacity, to.shadowOpacity],
  })

  const shadowOffsetHeight = animatedShadow.interpolate({
    inputRange: [0, 1],
    outputRange: [from.shadowOffset.height, to.shadowOffset.height],
  })

  const shadowRadius = animatedShadow.interpolate({
    inputRange: [0, 1],
    outputRange: [from.shadowRadius, to.shadowRadius],
  })

  const elevation = animatedShadow.interpolate({
    inputRange: [0, 1],
    outputRange: [from.elevation, to.elevation],
  })

  return {
    shadowOffsetHeight,
    shadowRadius,
    elevation,
    shadowOpacity,
  }
}
