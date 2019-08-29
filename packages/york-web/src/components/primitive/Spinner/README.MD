```js
import styled from 'styled-components'
import { Spinner, View, sizes } from '@qlean/york-web'

const StyledItem = styled(Example.ShowcaseItem)`
  width: ${sizes[24]}px;
`

;<Example.Showcase>
  <StyledItem title="l" caption="весь экран">
    <Spinner />
  </StyledItem>
  <StyledItem title="m" caption='внутри блока'>
    <Spinner color="blue" size="m" />
  </StyledItem>
  <StyledItem title="s" caption='внутри кнопки'>
    <Spinner color="grey" size="s" />
  </StyledItem>
</Example.Showcase>
```