`import { validateCardExpiry } from '@qlean/york-core'`

`(value: string) => boolean`

Валидирует срок действия карты.

```js static
import { validateCardExpiry } from '@qlean/york-core'

validateCardExpiry('12/23') // true
validateCardExpiry('13/23') // false
validateCardExpiry('08/11') // false
```
