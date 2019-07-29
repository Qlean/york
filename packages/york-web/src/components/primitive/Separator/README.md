```js
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { Text } from '@qlean/york-web'

const StyledSeparator = styled(Separator)`
  width: 100% !important;
  background-color: ${colors.blue};
`

;<div>
  <Text preset="header2">{Example.text.short}</Text>
  <StyledSeparator height={2} />
  <Text>{Example.text.medium}</Text>
  <StyledSeparator height={1} />
  <Text>{Example.text.long}</Text>
</div>
```
