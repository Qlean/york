`import { media, mediaBreakpoints } from '@qlean/york-core'`

Функция `media` облегчает использование медиа-запросов, она предназначена для использования со `styled-components`. Он поддерживает три размера экрана — `mobile`, `base` и `wide`. Кроме того, есть псевдо-размер `desktop`, который объединяет `base` и `wide`.

Кроме того, можно импортировать брейкпоинты напрямую, например для использования со сторонними библиотеками: `mediaBreakpoints.base` содержит минимальную ширину экрана для размера `base`, а `mediaBreakpoints.wide` для размера `wide`.

```js
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { Example, media, sizes } from '@qlean/york-web'

const StyledBox = styled(Example.Box)`
  ${media.wide(`
    background-color: ${colors.red};
  `)}
  ${media.base(`
    background-color: ${colors.green};
  `)}
  ${media.mobile(`
    background-color: ${colors.blue};
  `)}
  width: auto;
`

;<StyledBox>
  <div>Red / Green / Blue</div>
</StyledBox>
```
