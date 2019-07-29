`import { uiPoint, sizes } from '@qlean/york-react-native'`

`uiPoint` это пункт интерфейсной сетки, все элементы интерфейса и все оступы должны быть кратны ему. Сейчас он равен 5 [пунктам]. Объект `sizes` аналогичен `sizes` из `york-core`, но возвращает все допустимые оступы сразу в пунктах, уже переменоженными на `uiPoint`.

Все размеры и оступы следует задавать через `sizes[n]` или, по согласованию с дизайнером, через `uiPoint * n`.

Также, отступы между элементами можно задавать через компонент `<Separator/>`, который использует ту же сетку размеров.

```js
import styled from 'styled-components'
import { sizes } from '@qlean/york-react-native'

const StyledBox = styled(Example.Box)`
  width: ${sizes[16]}px;
  height: ${sizes[8]}px;
`

;<StyledBox>16 x 8</StyledBox>
```
