`import { formatPhoneHref } from '@qlean/york-core'`

`formatPhoneHref(value: String) => String`

Переводит номер телефона в формат, пригодный для ссылок. Если номер начинается с `8`, то не ставит `+` перед ним.

```js static
import { formatPhoneHref } from '@qlean/york-core'

formatPhoneHref('79161234567') // tel:+79161234567
formatPhoneHref('+7 (916) 123-45-67') // tel:+79161234567
formatPhoneHref('88005005638') // tel:88005005638
formatPhoneHref('8 (800) 500-56-38') // tel:+79161234567
```
