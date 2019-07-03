### useAnimation()
`import { useAnimation } from '@qlean/york-react-native'`

Хук для анимации. Принимает все параметры, которые использует `Animated.timing`, а также `fromValue`.
* `duration`: Длительность анимации в миллисекундах. По умолчанию `500`.
* `easing`: Easing функция анимации. По умолчанию `Easing.inOut(Easing.ease)`.
* `delay`: Задержка перед анимацией в миллисекундах. По умолчанию `0`.
* `useNativeDriver`: Использование нативного драйвера. Работает не со всеми свойствами, но строго рекомендуем к использованию. По умолчанию `false`.
* `toValue`: Финальное значение анимации.
* `fromValue`: Начальное значение анимации.