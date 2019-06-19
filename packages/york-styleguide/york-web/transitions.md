`import { transitions } from '@qlean/york-core'`

Константы для анимации переходов. Задаются для всех css-свойств сразу. Чтобы отключить их для каких-то свойств, задайте длительность соответствующей анимации в `0`, например `transition: ${transitions.medium}, opacity 0;`.

```js
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { Example, Text, Separator, transitions } from '@qlean/york-web'

const StyledBox = styled(Example.Box)`
  ${({ transition }) => `transition: ${transition};`}
  :hover {
    background-color: ${colors.green};
  }
`

;<>
  <Example.Showcase>
    {Object.entries(transitions).map(([key, value]) => (
      <Example.ShowcaseItem key={key} title={key}>
        <StyledBox transition={value} width={16} />
      </Example.ShowcaseItem>
    ))}
  </Example.Showcase>
  <Separator height={2} />
  <Text>Наведите курсор чтобы увидеть анимацию</Text>
</>
```
