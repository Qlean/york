`import { UI_POINT, sizes } from '@qlean/york-core'`

`UI_POINT` это пункт интерфейсной сетки, все элементы интерфейса и все оступы должны быть кратны ему. Сейчас он равен 5 [пикселям]. Объект `sizes` аналогичен `sizes` из `york-core`, но возвращает все допустимые оступы сразу в пикселях, уже переменоженными на `UI_POINT`.

Все размеры и оступы следует задавать через `sizes[n]` или, по согласованию с дизайнером, через `UI_POINT * n`.

```js
import styled from 'styled-components'
import { Example, sizes } from '@qlean/york-web'

const StyledBox = styled(Example.Box)`
  width: ${sizes[16]}px;
  height: ${sizes[8]}px;
`

;<StyledBox>16 x 8</StyledBox>
```
