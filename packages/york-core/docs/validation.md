`import { validateCardNumber, validateCardExpiry, validateCardSecureCode } from '@qlean/york-core'`

`validateCardNumber(value: String, config: { minLength: Number, maxLength: Number }) => Boolean` - валидирует номер карты. В конфиг можно опционально передать параметры `minLength` и `maxLength`, которые отвечают за минимальную и максимальную длину номера карты. По умолчанию `minLength = 16`, `maxLength = 19`.

```js static
import { validateCardNumber } from '@qlean/york-core'

validateCardNumber('4111111111100031') // true
validateCardNumber('411111111110003102342', { minLength: 16, maxLength: 18 }) // false
```


`validateCardExpiry(value: String) => Boolean` - валидирует срок действия карты.

```js static
import { validateCardExpiry } from '@qlean/york-core'

validateCardExpiry('12/23') // true
validateCardExpiry('13/23') // false
validateCardExpiry('08/11') // false
```

`validateCardSecureCode(value: String, config: { minLength: Number, maxLength: Number }) => Boolean` - валидирует код безопасности (CVC и т.д.) карты. В конфиг можно опционально передать параметры `minLength` и `maxLength`, которые отвечают за минимальную и максимальную длину кода безопасности. По умолчанию `minLength = 3`, `maxLength = 4`.

```js static
import { validateCardSecureCode } from '@qlean/york-core'

validateCardSecureCode('123') // true
validateCardSecureCode('12') // false
validateCardSecureCode('123', { minLength: 4 }) // false
```

