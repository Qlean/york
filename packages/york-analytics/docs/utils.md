`getAnalyticsUrl({ href: String, category: String, label: String, action: String, redirectUrl: String }) => String`

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