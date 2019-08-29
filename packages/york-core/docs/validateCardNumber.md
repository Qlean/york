`import { validateCardNumber } from '@qlean/york-core'`

`validateCardNumber(value, config)` - валидирует номер карты. Принимает `value: String` и опционально `config: Object`. В конфиг можно передать `minLength: Number` и `maxLength: Number`, которые отвечают за минимальную и максимальную длину номера карты соответственно. Учитывается длина без пробелов. По умолчанию `minLength = 16`, `maxLength = 19`. Возвращает `Boolean`.

```js static
import { validateCardNumber } from '@qlean/york-core'

const number = '4111 1111 1110 0031'
validateCardNumber(number, { minLength: 16, maxLength: 19 })
```
