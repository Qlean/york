#### Использование в роли рутового провайдера

```js static
import { AnalyticsProvider } from '@qlean/york-analytics'
const trackEvent = event => {
  console.log(event)
}

/**
 * Когда провайдер используется как рутовый, в него нужно передать функцию, которая передает события в транспорт.
 * Эта функция будет доступна всем дочерним провайдерам и другим элементам через контекст
 */
const App = () => (
  <AnalyticsProvider category="appName" trackEvent={trackEvent}>
    <div>Content</div>
  </AnalyticsProvider>
)
```

#### Использование внутри других компонентов

```js static
import React from 'react'
import { AnalyticsProvider } from '@qlean/york-analytics'
import { Button } from '@qlean/york-web'

const SomeScreen = () => (
  <AnalyticsProvider category="someScreen">
    <Button
      name="pressMe"
      /**
       * Помимо основного действия отправляет эвент аналитики:
       * {
       *   category: 'someScreen',
       *   labek: 'someScreen.pressMe',
       *   action: 'click'
       * }
       */
      onClick={() => {}}
    >
      Press Me
    </Button>
  </AnalyticsProvider>
)
```
