`AnalyticsProvider` — это компонент, который передает в контекст дочерним елементам категорию событий и функцию трекинга. `AnalyticsProvider` поддерживает бесконечное вложение, при этом на любом этапе иерархии можно подменить функцию трекинга.

```js
import { AnalyticsProvider } from '@qlean/york-analytics'
import { Button, Page, Separator } from '@qlean/york-web'

const ExampleApp = ({ children }) => (
  <AnalyticsProvider category="exampleApp" trackEvent={console.log}>
    <Button
      name="doExampleAction"
      /**
       * Помимо основного действия отправляет эвент аналитики:
       * {
       *   category: 'exampleApp',
       *   label: 'doExampleAction',
       *   action: 'click',
       *   analyticsRoute: 'exampleApp'
       * }
       */
      onClick={() => {}}
      isDisabled={false}
    >
      Root Event
    </Button>
    <Separator height={2} />
    <Page name="NestedPage">
      <Button
        name="doExampleAction"
        analyticsData={{ exampleId: 123 }}
        /**
         * Помимо основного действия отправляет эвент аналитики:
         * {
         *   category: 'NestedPage',
         *   label: 'doExampleAction',
         *   action: 'click',
         *   analyticsRoute: 'exampleApp.NestedPage',
         *   exampleId: 123
         * }
         */
        onClick={() => {}}
        isDisabled={false}
      >
        Nested Event
      </Button>
    </Page>
  </AnalyticsProvider>
)

;<ExampleApp />
```
