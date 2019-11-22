`RootAnalyticsProvider` — Корневой компонент `york-analytics`, должен быть во всех приложениях, в которых нужен трекинг событий. Передает всем дочерним компонентам `appId` и `trackEvent` через React Context API.

```js static
import { RootAnalyticsProvider } from '@qlean/york-analytics'
import { Button, Page, Separator } from '@qlean/york-web'

const ExampleApp = ({ children }) => (
  <RootAnalyticsProvider appId="exampleApp" trackEvent={console.log}>
    <Page name="examplePage">
      <Button
        name="doExampleAction"
        analyticsData={{ exampleId: 123 }}
        /**
         * Помимо основного действия отправляет эвент аналитики:
         * {
         *   category: 'examplePage',
         *   label: 'doExampleAction',
         *   action: 'click',
         *   analyticsRoute: 'york/exampleApp/examplePage',
         *   exampleId: 123
         * }
         */
        onClick={() => {}}
        isDisabled={false}
      >
        Nested Event
      </Button>
    </Page>
  </RootAnalyticsProvider>
)

;<ExampleApp />
```
