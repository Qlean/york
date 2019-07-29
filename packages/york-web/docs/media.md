`import { media, mediaBreakpoints } from '@qlean/york-web'`

Функция `media` облегчает использование медиа-запросов, она предназначена для использования со `styled-components`. Он поддерживает три размера экрана — `mobile`, `base` и `wide`. Кроме того, есть псевдо-размер `desktop`, который объединяет `base` и `wide`.

Важно знать, что `media` принимает чистые строки и никак их не интерполирует, то есть не прогоняет через `styled-components/css`. Таким образом, нужно следить чтобы код всегда возвращал корректный CSS.

Так делать не следует:

```js static
media.mobile(`${color && `color: ${color};`}`)
```

Это приведет к тому, что мы можем получить `null`, или `undefined` прямо в CSS, что сломает все стили, которые следует за этим. Вместо этого следует явно преобразовать код в CSS:

```js static
media.mobile(`${color ? `color: ${color};` : ''}`)
```

Пустая строка уже никакими поломками не грозит.

Авторасстановка префиксов все еще будет работать — она делается отдельно в самом конце. Эта особенность `media` связана с заметным падением производительность при частом использовании интерполяции.

Кроме того, можно импортировать брейкпоинты напрямую, например для использования со сторонними библиотеками: `mediaBreakpoints.base` содержит минимальную ширину экрана для размера `base`, а `mediaBreakpoints.wide` для размера `wide`.

```js
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { media, sizes } from '@qlean/york-web'

const StyledBox = styled(Example.Box)`
  ${media.wide(`
    background-color: ${colors.red};
  `)}
  ${media.base(`
    background-color: ${colors.green};
  `)}
  ${media.mobile(`
    background-color: ${colors.blue};
    flex-wrap: wrap;
  `)}
  width: auto;
`

;<StyledBox>
  <div>Red / Green / Blue</div>
</StyledBox>
```
