`import { colors, hexColors, rgbaColors } from '@qlean/york-core'`

Палитра цветов. Во всех других компонентах используются только они.

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
