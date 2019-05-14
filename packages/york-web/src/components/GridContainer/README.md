```js
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { GridContainer, GridColumn, Example } from '@qlean/york-web'

const StyledBox = styled(Example.Box)`
  width: auto;
`

;<Example.Container>
  <GridContainer>
    <GridColumn>
      <StyledBox>12</StyledBox>
    </GridColumn>
  </GridContainer>
</Example.Container>
```
