`import { colors } from '@qlean/york-core'`

Палитра цветов. Во всех других компонентах используются только они.

```js
import styled from 'styled-components'

import { colors } from '@qlean/york-core'
import { Example, sizes, borderRadiuses } from '@qlean/york-web'

const StyledColor = styled.div`
  height: ${sizes[20]}px;
  width: ${sizes[20]}px;
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
