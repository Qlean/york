`AnalyticsProvider` - это компонент, который передает в контекст дочерним елементам категорию событий, дополнительные данные (properties) и функцию трекинга. Компонент `Button` автоматически отправляет события, основываясь на информации из ближайшего провайдера. `AnalyticsProvider` поддерживает бесконечное вложение, при этом на любом этапе иерархии можно подменить функцию трекинга.

`AnalyticsProvider` уже встроен в компоненты `Screen` и `Page` для того чтобы каждый экран или страница создавали новый аналитический контекст.

```js
import { AnalyticsProvider } from '@qlean/york-analytics'
import { Button, Page, Separator } from '@qlean/york-web'

const trackEvent = ({ category, label, action, properties }) => {
  console.log(
    `category: ${category}\nlabel: ${label}\naction: ${action}\nproperties: ${JSON.stringify(
      properties,
    )}`,
  )
}

const ExampleApp = ({ children }) => (
  <AnalyticsProvider category="exampleApp" trackEvent={trackEvent}>
    <Button
      name="button"
      /**
       * Помимо основного действия отправляет эвент аналитики:
       * {
       *   category: 'exampleApp',
       *   label: 'exampleApp.button',
       *   action: 'click',
       *   properties: {
       *     analyticsRoute: 'exampleApp'
       *   }
       * }
       */
      onClick={() => {}}
      isDisabled={false}
    >
      Root Event
    </Button>
    <Separator height={2} />
    <Page name="NestedPage" analyticsProperties={{ exampleId: 123 }}>
      <Button
        name="button"
        /**
         * Помимо основного действия отправляет эвент аналитики:
         * {
         *   category: 'NestedPage',
         *   label: 'NestedPage.button',
         *   action: 'click',
         *   properties: {
         *     analyticsRoute: 'exampleApp.NestedPage',
         *     exampleId: 123
         *   }
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
