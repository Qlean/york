`getAnalyticsUrl({ href: String, category: String, label: String, action: String, redirectUrl: String, ...properties: Object }) => String`

Функция для составления аналитического URL из оригинальной ссылки и параметров события.

```js static
const href = 'https://qlean.ru/plus'

getAnalyticsUrl({
  href,
  category: 'exampleCategory',
  label: 'exampleLabel',
  action: 'click',
  redirectUrl: 'https://anlt.cloud.qlean.ru/collect'
}) // -> https://anlt.cloud.qlean.ru/collect?tstamp=1234567890&ec0=exampleCategory&el0=exampleLabel&ea0=click...
```

`encodeAnalyticsEvent({ category: String, action: String, label: String, ...properties: Object }) => String`
Функция, которая кодирует события в строку, принимаемую нашим аналитическим сервером. Все данные, попадающие в `properties` конвертирует в JSON.