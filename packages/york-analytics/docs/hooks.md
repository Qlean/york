`useAnalytics(category: String) => trackEvent({ label: String, action: String, properties: Object })`

Хук `useAnalytics` возвращает функцию, которую можно вызвать в любой момент, например при первом рендере компонента или в `onChange` инпута. Эта функция берется из ближайшего `AnalyticsProvider` и автоматически добавляет в событие категорию и `analyticsRoute`.

```js static
import React, { useState, useEffect } from 'react'
import { Page } from '@qlean/york-web'
import { useAnalytics, eventActionTypes } from '@qlean/york-analytics'

const ExampleComponent = () => {
  const trackEvent = useAnalytics('ExampleComponent')
  const [value, setValue] = useState('')

  useEffect(() => {
    trackEvent(
      {
        label: 'ExampleComponent',
        action: eventActionTypes.mount,
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
