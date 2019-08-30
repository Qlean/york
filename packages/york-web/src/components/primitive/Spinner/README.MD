```js
import styled from 'styled-components'
import { Spinner, View, sizes } from '@qlean/york-web'

const StyledItem = styled(Example.ShowcaseItem)`
  width: ${sizes[24]}px;
`

;<Example.Showcase>
  <StyledItem title="l" caption="Fullscreen">
    <Spinner size="l" />
  </StyledItem>
  <StyledItem title="m" caption='Block'>
    <Spinner color="blue" />
  </StyledItem>
  <StyledItem title="s" caption='Button'>
    <Spinner color="grey" size="s" />
  </StyledItem>
</Example.Showcase>
```