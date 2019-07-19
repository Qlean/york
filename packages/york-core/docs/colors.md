`import { colors, rgbaColors } from '@qlean/york-core'`

Палитра цветов. Во всех других компонентах используются только они. Цвета экспортируются в двух вариантах:

- `colors` — rgba-формат, готовый для использования как в CSS, так и в стиля React Native.  
  Пример: `rgba(32, 160, 82, 1)`

- `rgbaColors` — тот же rbga-формат, но разбитый по каналам. Альфа-канал уже нормализован.  
  Пример: `{ r: 32, g: 160, b: 82, a: 1 }`

```js
import styled from 'styled-components'

import { colors } from '@qlean/york-core'
import { Example, uiPoint, sizes, borderRadiuses } from '@qlean/york-web'

const StyledColor = styled.div`
  height: ${sizes[12]}px;
  width: ${uiPoint * 30}px;
  background-color: ${({ color }) => color};
  border-radius: ${borderRadiuses.medium};
  border: 1px solid ${colors.whisper};
`

;<Example.Showcase>
  {Object.entries(colors).map(([name, color]) => (
    <Example.ShowcaseItem title={name} caption={color} key={name}>
      <StyledColor color={color} />
    </Example.ShowcaseItem>
  ))}
</Example.Showcase>
```
