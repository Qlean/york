`useAnalytics(category: String) => trackEvent({ label: String, action: String, properties: Object })`

Хук `useAnalytics` возвращает функцию, которую можно вызвать в любой момент, например при маунте компонента или в onChange инпута. Эта функция берется из ближайшего `AnalyticsProvider` и дополняется категорией и `AnalyticsRoute`.

```js static
import React, { useState, useEffect } from 'react'
import { useAnalytics } from '@qlean/york-analytics'

const ExampleScreen = () => {
  const trackEvent = useAnalytics('exampleScreen')
  const [value, setValue] = useState('')

  useEffect(() => {
    trackEvent(
      {
        label: 'exampleScreen',
        action: 'mount',
      },
      [trackEvent],
    )
  })

  return (
    <div>
      <input
        value={value}
        onChange={e => {
          trackEvent({
            label: 'exampleInput',
            action: 'change',
          })
        }}
      />
    </div>
  )
}
```
