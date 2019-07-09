`import { transitions, transitionTimings } from '@qlean/york-web'`

Константы для анимации переходов. Задаются для всех css-свойств сразу, все используют ease-in-out. Для более тонкой настройки свойств для анимации или для использования другого типа сглаживания можно импортировать только тайминги (в секундах).

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
