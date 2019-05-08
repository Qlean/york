```js
import { colors } from '@qlean/york-core'
import { View, Separator } from '@qlean/york-web'

const Box = () => (
  <div
    style={{
      width: 50,
      height: 50,
      backgroundColor: colors.blue,
    }}
  />
)

;<View mobileProps={{ flexDirection: 'column' }}>
  <Box />
  <Separator width={2} height={2} />
  <Box />
  <Separator width={2} height={2} />
  <Box />
</View>
```
