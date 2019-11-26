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

### usePageView
`usePageView({ name: String, payload?: Object, isPayloadReady?: Boolean })`
Хук `usePageView` отправляет событие о просмотре страницы или экрана. Если не передавать `payload`, то событие сработает при первом рендере, в противном случае хук отправит событие только после того как `isPayloadReady` станет равен `true`. Таким образом можно дождаться асинхронной загрузки данных перед отправкой.

Пример:
```js static
import React, { useState, useEffect } from 'react'
import { usePageView } from '@qlean/york-analytics'

const CustomPage = ({ name, children }) => {
  const [orderId, setOrderId] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchOrderId = async () => {
      const orderId = await api.getOrderId()
      setOrderId(setOrderId)
      setIsLoading(false)
    }
    fetchOrderId()
  }, [])

  usePageView({
    name,
    payload: {
      orderId
    },
    isPayloadReady: !isLoading
  })

  return <div name={name}>{children}</div>
}
```