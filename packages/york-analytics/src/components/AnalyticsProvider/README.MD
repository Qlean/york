`AnalyticsProvider` - это компонент, который передает в контекст дочерним елементам категорию событийдополнительные данные (properties) и функцию трекинга. Компоненты `Button` и `Link` автоматически отправляют события, основываясь на информации из ближайшего провайдера. `AnalyticsProvider` поддерживает бесконечный нестинг, при этом на любом этапе иерархии можно подменить функцию трекинга.

```js
import { AnalyticsProvider } from '@qlean/york-analytics'
import { Button, Separator } from '@qlean/york-web'

const trackEvent = ({ category, label, action, properties }) => {
  alert(
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
    <AnalyticsProvider
      category="nestedComponent"
      properties={{ exampleId: 123 }}
    >
      <Button
        name="button"
        /**
         * Помимо основного действия отправляет эвент аналитики:
         * {
         *   category: 'nestedComponent',
         *   label: 'nestedComponent.button',
         *   action: 'click',
         *   properties: {
         *     analyticsRoute: 'exampleApp.nestedComponent',
         *     exampleId: 123
         *   }
         * }
         */
        onClick={() => {}}
        isDisabled={false}
      >
        Nested Event
      </Button>
    </AnalyticsProvider>
  </AnalyticsProvider>
)

;<ExampleApp />
```