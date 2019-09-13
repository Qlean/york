`import { formatPhoneHref } from '@qlean/york-core'`

`formatPhoneHref(value: String) => String`

Переводит телефон формат, пригодный для ссылок.

```js static
import { formatPhoneHref } from '@qlean/york-core'

formatPhoneHref('79161234567') // tel:+79161234567
formatPhoneHref('+7 (916) 123-45-67') // tel:+79161234567
```
