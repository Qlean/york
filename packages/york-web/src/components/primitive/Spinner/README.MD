```js
import styled from 'styled-components'
import { Spinner, media } from '@qlean/york-web'

const StyledItem = styled(Example.ShowcaseItem)`
  width: 25%;
  ${media.mobile('width: 50%;')}
`

;<Example.Showcase>
  <StyledItem title="l" caption="Весь экран">
    <Spinner size="l" />
  </StyledItem>
  <StyledItem title="m" caption="Блок">
    <Spinner color="blue" />
  </StyledItem>
  <StyledItem title="s" caption="Маленький блок или кнопка">
    <Spinner color="grey" size="s" />
  </StyledItem>
</Example.Showcase>
```
