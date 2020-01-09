`RootAnalyticsProvider` — Корневой компонент `york-analytics`, должен быть во всех приложениях, в которых нужен трекинг событий. Передает всем дочерним компонентам `appId` и `trackEvent` через React Context API.

```js static
import { RootAnalyticsProvider } from '@qlean/york-analytics'
import { Button, Page, Separator } from '@qlean/york-web'

const ExampleApp = ({ children }) => (
  <RootAnalyticsProvider appId="exampleApp" trackEvent={console.log}>
    // Остальной код приложения
  </RootAnalyticsProvider>
)

;<ExampleApp />
```
