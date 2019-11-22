Объект аналитического контекста. Может пригодиться в ситуациях когда нет возможности использовать хуки или нужно написать кастомный хэндлер для какого-то элемента.

```js static
import { AnalyticsContext, eventActionTypes } from '@qlean/york-analytics'

const ExampleComponent = () => (
  <AnalyticsContext.Consumer>
    {({ trackEvent, category }) => (
      <button
        onClick={trackEvent({
          category,
          label: 'doExampleAction',
          action: eventActionTypes.click,
        })}
      >
        ExampleButton
      </button>
    )}
  </AnalyticsContext.Consumer>
)
```
