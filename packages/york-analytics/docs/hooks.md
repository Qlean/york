### useAnalytics
`useAnalytics(category?: String) => { trackEvent: Function, appId: String, category: String, analyticsRoute: String }`

Хук `useAnalytics` возвращает объект, содержащий мемоизированную функцию трекинга, а так же другие данные из аналитического контекста. Функцию можно вызвать в любой момент, например при первом рендере компонента или в `onChange` инпута. Категория событий будет равна аргументу `category` или категории из ближайшего `AnalyticsProvider`, если вызвать хук без аргумента.

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
  }, [])

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

### useViewTracking
`useViewTracking({ name: String, analyticsData: Object? })`
Хук `useViewTracking` отправляет событие о просмотре страницы или экрана (`pageView` для браузеров, `screenView` для react-native). Если не передавать `analyticsData`, то событие сработает при первом рендере, в противном случае хук отправит событие только после того как все значения в `analyticsData` будут логически истинны (true). Это сделано для того чтобы исключить повторные отправки событий при изменении данных, например когда они загружаются асинхронно.

Пример:
```js static
import React, { useState, useEffect } from 'react'
import { useViewTracking } from '@qlean/york-analytics'

const CustomPage = ({ name, children }) => {
  const [orderId, setOrderId] = useState(null)

  useEffect(() => {
    const fetchOrderId = async () => {
      const orderId = await api.getOrderId()
      setOrderId(setOrderId)
    }
    fetchOrderId()
  }, [])

  useViewTracking({ name, analyticsData: { orderId } })

  return <div name={name}>{children}</div>
}
```