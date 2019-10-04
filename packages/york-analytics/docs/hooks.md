`useAnalytics(category?: String)`

Хук `useAnalytics` возвращает объект, содержащий мемоизированную функцию трекинга, а так же другие данные из аналитического контекста. Функцию можно вызвать в любой момент, например при первом рендере компонента или в `onChange` инпута. Она берется из ближайшего `AnalyticsProvider` и автоматически добавляет в событие `category` и `analyticsRoute`. Категория событий будет равна аргументу `category` или категории из ближайшего `AnalyticsProvider`, если вызвать хук без аргумента.

```js static
import React, { useState, useEffect } from 'react'
import { Page } from '@qlean/york-web'
import { useAnalytics, eventActionTypes } from '@qlean/york-analytics'

const ExampleComponent = () => {
  const { trackEvent } = useAnalytics('ExampleComponent')
  const [value, setValue] = useState('')

  useEffect(() => {
    trackEvent(
      {
        label: 'ExampleComponent',
        action: eventActionTypes.mount,
        exampleId: 123,
      },
      [trackEvent],
    )
  })

  return (
    <input
      value={value}
      onChange={e => {
        trackEvent({
          label: 'exampleInput',
          action: 'change',
        })
      }}
    />
  )
}
```
