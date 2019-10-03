`AnalyticsProvider` - это компонент, который передает в контекст дочерним елементам категорию событий и функцию трекинга. `AnalyticsProvider` поддерживает бесконечное вложение, при этом на любом этапе иерархии можно подменить функцию трекинга.

```js
import { AnalyticsProvider } from '@qlean/york-analytics'
import { Button, Page, Separator } from '@qlean/york-web'

const ExampleApp = ({ children }) => (
  <AnalyticsProvider category="exampleApp" trackEvent={console.log}>
    <Button
      name="button"
      /**
       * Помимо основного действия отправляет эвент аналитики:
       * {
       *   category: 'exampleApp',
       *   label: 'exampleApp.button',
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
        name="button"
        analyticsData={{ exampleId: 123 }}
        /**
         * Помимо основного действия отправляет эвент аналитики:
         * {
         *   category: 'NestedPage',
         *   label: 'NestedPage.button',
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
