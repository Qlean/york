### useAnimation()
`import { useAnimation } from '@qlean/york-react-native'`

Хук для анимации. Принимает все параметры, которые использует `Animated.timing`, а также `fromValue` для начального значения анимации.

Официальная документация `Animated.timing` – https://facebook.github.io/react-native/docs/animated#timing

Пример использования:
```js static
const AnimatedComponent = ({ isDisabled }) => {
  const opacity = useAnimation({
    initialValue: isDisabled ? 1 : 0,
    toValue: isDisabled ? 1 : 0,
    useNativeDriver: true,
    duration: 100,
  })

  return (
    <Animated.View style={{ opacity }}>
      <Text>Hello</Text>
    </Animated.View>
  )
}
```
