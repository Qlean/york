```js
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { GridContainer, GridColumn, uiPoint, media } from '@qlean/york-web'

import data from './assets/data'

const viewportHeight = uiPoint * 100

const StyledViewport = styled.div`
  overflow: auto;
  height: ${viewportHeight}px;
`

const StyledPage = styled.div`
  ${media.wide(`width: ${GridContainer.maxWidths.wide + 80}px;`)}
  ${media.base(`width: ${GridContainer.maxWidths.base + 60}px;`)}
  ${media.mobile(`width: ${GridContainer.maxWidths.mobile + 40}px;`)}
`

const StyledPageBody = styled.div`
  height: ${viewportHeight * 2}px;
  background: linear-gradient(${colors.whisper}, ${colors.coal});
`

const StyledPageContent = styled.div`
  margin: 0 auto;
`

const StyledBox = styled(Example.Box)`
  width: 100%;
`

;<StyledViewport>
  <StyledPage>
    <Header {...data} />
    <StyledPageBody>
      <StyledPageContent>
        <GridContainer>
          <GridColumn columns={12}>
            <StyledBox />
          </GridColumn>
        </GridContainer>
      </StyledPageContent>
    </StyledPageBody>
  </StyledPage>
</StyledViewport>
```
