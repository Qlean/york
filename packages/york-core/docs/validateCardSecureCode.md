`import { validateCardSecureCode } from '@qlean/york-core'`

`validateCardSecureCode(value, config)` - валидирует код безопасности (CVC и т.д.) карты. Принимает `value: String` и опционально `config: Object`. В конфиг можно передать `minLength: Number` и `maxLength: Number`, которые отвечают за минимальную и максимальную длину номера карты соответственно. Учитывается длина без пробелов. По умолчанию `minLength = 3`, `maxLength = 4`. Возвращает `Boolean`.

```js static
import { validateCardSecureCode } from '@qlean/york-core'

const secureCode = '123'
validateCardSecureCode(secureCode)
```
