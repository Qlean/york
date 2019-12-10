`import { formatPhone } from '@qlean/york-core'`

`formatPhone(value: String) => String`

Переводит номер телефона в человеко-читаемый формат. Если номер начинается с `8`, то не ставит `+` перед ним.

```js static
import { formatPhone } from '@qlean/york-core'

formatPhone('79161234567') // +7 (916) 123-45-67
formatPhone('88005005638') // 8 (800) 500-56-38
```
