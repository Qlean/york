Объект аналитического контекста. Может пригодиться в ситуациях когда нет возможности использовать хуки или нужно написать кастомный хэндлер для какого-то элемента.

```js static
import { AnalyticsContext } from '@qlean/york-analytics'

const ExampleComponent = () => (
  <AnalyticsContext.Consumer>
    {({ trackEvent, category }) => (
      <button onClick={
        trackEvent({
          category,
          label: 'exampleButton',
          action: 'click'
        })
      }>
        ExampleButton
      </button>
    )}
  </AnalyticsContext.Consumer>
)
```