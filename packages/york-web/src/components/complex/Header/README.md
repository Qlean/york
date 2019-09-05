```js
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { uiPoint, mediaBreakpoints } from '@qlean/york-web'

import { props } from './assets/data'

const viewportHeight = uiPoint * 100

const StyledViewport = styled.div`
  overflow: auto;
  height: ${viewportHeight}px;
`

const StyledPage = styled.div`
  width: ${mediaBreakpoints.base}px;
`

const StyledPageContent = styled.div`
  height: ${viewportHeight * 2}px;
  background: linear-gradient(${colors.grey}, ${colors.coal});
`

;<StyledViewport>
  <StyledPage>
    <Header {...props} />
    <StyledPageContent />
  </StyledPage>
</StyledViewport>
```
