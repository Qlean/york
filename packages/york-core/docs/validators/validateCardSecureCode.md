`import { validateCardSecureCode } from '@qlean/york-core'`

`(value: string, config: { minLength?: number, maxLength: number }) => boolean`

Валидирует код безопасности (CVC и т.д.) карты. В конфиг можно опционально передать параметры `minLength` и `maxLength`, которые отвечают за минимальную и максимальную длину кода безопасности. По умолчанию `minLength = 3`, `maxLength = 4`.

```js static
import { validateCardSecureCode } from '@qlean/york-core'

validateCardSecureCode('123') // true
validateCardSecureCode('12') // false
validateCardSecureCode('123', { minLength: 4 }) // false
```
