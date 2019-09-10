`import { validateCardNumber } from '@qlean/york-core'`

`validateCardNumber(value: String, config: { minLength: Number, maxLength: Number }) => Boolean` — валидирует номер карты. В конфиг можно опционально передать параметры `minLength` и `maxLength`, которые отвечают за минимальную и максимальную длину номера карты. По умолчанию `minLength = 16`, `maxLength = 19`.

```js static
import { validateCardNumber } from '@qlean/york-core'

validateCardNumber('4111111111100031') // true
validateCardNumber('411111111110003102342', { minLength: 16, maxLength: 18 }) // false
```
