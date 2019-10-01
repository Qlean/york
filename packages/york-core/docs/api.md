`import { api } from '@qlean/york-core'`

`api.get(url: String, config: Object) => Promise`
`api.delete(url: String, config: Object) => Promise`
`api[method](url: String, payload: Object, config: Object) => Promise`

Абстракция над нативным `fetch`. Чем-то похож на `axios`. Нужен для того, чтобы:

- Не прописывать метод и базовый урл в конфигурации
- Автоматически рефрешить `accessToken`
- Складывать в очередь запросы с протухшим токеном и выполнять их после рефреша
- Трансформировать входящие и исходящие данные
- Реджектить промис с особым типом ошибки `NetworkError`
- Не проставлять вручную `content-type: application/json`
- Возвращать `res.json()` или `res.text()` без обработки промиса

В остальном идентичен нативному `fetch` — возвращает промис, реджектится при сетевых ошибках. По этой причине требуется полифилл для старых браузеров и для ноды. Рекомендуется `unfetch` и его изоморфная версия.

Для начала, требуется конфигурация:

```js static
/* utils/api.js */

import cookies from 'js-cookie'
import { camelizeKeys, decamelizeKeys } from 'humps'
import { api } from '@qlean/york-core`

export default api({
  /**
   * Хост, который будет приклеиваться в начало каждого урла.
   */
  baseUrl: 'http://qlean-master-puma.service.consul',
  /**
   * Урл сервиса, с которого запрашивается рефреш.
   */
  ssoUrl:
    'https://master-sso-identity-svs.stage.cloud.qlean.ru/http/users/refreshToken/?refreshToken=',
  /**
   * Функция для получения `accessToken`. Не строка, чтобы избежать замыкания.
   * getRefreshToken() => String
   */
  getRefreshToken: () => cookies.get('refreshToken'),
  /**
   * Функция для получения `refreshToken`. Не строка, чтобы избежать замыкания.
   * getAccessToken() => String
   */
  getAccessToken: () => cookies.get('accessToken'),
  /**
   * Коллбэк, который выполнится после рефреша. Возвращает объект с `accessToken` и `refreshToken`
   * onRefresh({ refreshToken: String, accessToken: String }: Object) => void
   */
  onRefresh: ({ refreshToken, accessToken }) => {
    cookies.set('accessToken', accessToken)
    cookies.set('refreshToken', refreshToken)
  },
  /**
   * Трансформер для отправляемых данных. Необязательный параметр.
   */
  requestDataTransformer: decamelizeKeys,
  /**
   * Трансформер для получаемых данных. Необязательный параметр.
   */
  responseDataTransformer: camelizeKeys,
})
```

Использование сконфигурированной функции:
```js static
import api from 'utils/api'

export const fetchCreditCards = () =>
  api.get('/api/plus/v1/credit_cards')

export const addCreditCard = ({ payload }) =>
  api.post('/api/plus/v1/credit_cards', { creditCard: payload })

export const setAsRootCreditCard = ({ id }) =>
  api.put(`/api/plus/v1/credit_cards/${id}/root`)

export const deleteCreditCard = ({ id }) =>
  api.delete(`/api/plus/v1/credit_cards/${id}`)

export const subscribeToPlus = () =>
  api.post('/api/plus/v1/subscriptions')
```

Пример для next.js
```js static
import nookies from 'nookies'
import { camelizeKeys, decamelizeKeys } from 'humps'

import sdk from './sdk'

export default (ctx = {}) =>
  sdk({
    baseUrl: 'http://qlean-master-puma.service.consul',
    ssoUrl:
      'https://master-sso-identity-svs.stage.cloud.qlean.ru/http/users/refreshToken/?refreshToken=',
    getRefreshToken: () => nookies.get(ctx).refreshToken,
    getAccessToken: () => nookies.get(ctx).accessToken,
    onRefresh: ({ refreshToken, accessToken }) => {
      nookies.set(ctx, 'accessToken', accessToken, {})
      nookies.set(ctx, 'refreshToken', refreshToken, {})
    },
    requestDataTransformer: decamelizeKeys,
    responseDataTransformer: camelizeKeys,
  })
```

Использование в next.js
```js static
/* actions.js */
export const fetchCreditCards = ctx => api(ctx).get('/api/plus/v1/credit_cards')

/* pages/index.js */
PaymentMethods.getInitialProps = async ctx => {
  const { creditCards } = await fetchCreditCards(ctx).catch(err => ({}))

  return { creditCards }
}
```
