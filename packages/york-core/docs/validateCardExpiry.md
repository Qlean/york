`import { validateCardExpiry } from '@qlean/york-core'`

`validateCardExpiry(value)` - валидирует срок действия карты. принимает на вход `value: String`. Возвращает `Boolean`.

```js static
import { validateCardExpiry } from '@qlean/york-core'

const expiry = '12/23'
validateCardExpiry(expiry)
```
