```js
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { Text } from '@qlean/york-react-native'

const style = {
  width: 'auto',
  backgroundColor: colors.blue,
}

;<div>
  <Text preset="header1">{Example.text.short}</Text>
  <Separator height={2} style={style} />
  <Text>{Example.text.medium}</Text>
  <Separator height={1} style={style} />
  <Text>{Example.text.long}</Text>
</div>
```
