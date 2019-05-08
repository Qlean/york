```js
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { GridContainer, GridColumn, Example } from '@qlean/york-web'

const StyledBox = styled(Example.Box)`
  width: auto;
`

;<GridContainer>
  <GridColumn columns={1}>
    <StyledBox>1</StyledBox>
  </GridColumn>
  <GridColumn columns={2}>
    <StyledBox>2</StyledBox>
  </GridColumn>
  <GridColumn columns={3}>
    <StyledBox>3</StyledBox>
  </GridColumn>
  <GridColumn columns={6}>
    <StyledBox>6</StyledBox>
  </GridColumn>
</GridContainer>
```
