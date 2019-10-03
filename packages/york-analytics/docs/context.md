Объект аналитического контекста. Может пригодиться в ситуациях когда нет возможности использовать хуки или нужно написать кастомный хэндлер для какого-то элемента.

```js static
import { AnalyticsContext, eventActionTypes } from '@qlean/york-analytics'

const ExampleComponent = () => (
  <AnalyticsContext.Consumer>
    {({ trackEvent, category, analyticsRoute }) => (
      <button onClick={
        trackEvent({
          category,
          label: 'exampleButton',
          action: eventActionTypes.click,
          analyticsRoute
        })
      }>
        ExampleButton
      </button>
    )}
  </AnalyticsContext.Consumer>
)
```