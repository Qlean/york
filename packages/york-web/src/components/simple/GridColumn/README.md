```js
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { GridContainer, GridColumn, media } from '@qlean/york-web'

const StyledBoxDesktop = styled(Example.Box)`
  width: auto;
  ${media.mobile('display: none;')}
`

const StyledBoxMobile = styled(Example.Box)`
  width: auto;
  ${media.desktop('display: none;')}
`

;<div style={{ overflow: 'auto' }}>
  <GridContainer>
    <GridColumn columns={1} mobileProps={{ columns: 3 }}>
      <StyledBoxDesktop>1</StyledBoxDesktop>
      <StyledBoxMobile>3</StyledBoxMobile>
    </GridColumn>
    <GridColumn columns={2} mobileProps={{ columns: 3 }}>
      <StyledBoxDesktop>2</StyledBoxDesktop>
      <StyledBoxMobile>3</StyledBoxMobile>
    </GridColumn>
    <GridColumn columns={3} mobileProps={{ columns: 3 }}>
      <StyledBoxDesktop>3</StyledBoxDesktop>
      <StyledBoxMobile>3</StyledBoxMobile>
    </GridColumn>
    <GridColumn columns={6} mobileProps={{ columns: 3 }}>
      <StyledBoxDesktop>6</StyledBoxDesktop>
      <StyledBoxMobile>3</StyledBoxMobile>
    </GridColumn>
  </GridContainer>
</div>
```
