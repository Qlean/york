```js
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { GridContainer, GridColumn } from '@qlean/york-web'

const StyledBox = styled(Example.Box)`
  width: auto;
`

;<div style={{ overflow: 'auto' }}>
  <GridContainer
    mobileProps={{ flexDirection: 'column', alignItems: 'center' }}
  >
    <GridColumn columns={6}>
      <StyledBox>6</StyledBox>
    </GridColumn>
    <GridColumn columns={6}>
      <StyledBox>6</StyledBox>
    </GridColumn>
  </GridContainer>
</div>
```
