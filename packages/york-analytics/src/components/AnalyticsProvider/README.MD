### Использование в роли рутового провайдера
```js
import { AnalyticsProvider } from '@qlean/york-analytics'

const trackEvent = (event) => {
  console.log(event)
}

/**
* Когда провайдер используется как рутовый, в него нужно передать функцию, которая передает события в транспорт.
* Эта функция будет доступна всем дочерним провайдерам и другим элементам через контекст
*/
const App = () => (
  <AnalyticsProvider category="appName" trackEvent={trackEvent}>
    {...}
  </AnalyticsProvider>
)
```