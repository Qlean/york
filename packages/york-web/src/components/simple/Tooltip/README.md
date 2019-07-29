```js
import { colors } from '@qlean/york-core'
import { View, Text, Tooltip, Separator } from '@qlean/york-web'

;<>
  <Tooltip tooltip={Example.text.short}>
    <Text>Короткий тултип</Text>
  </Tooltip>
  <Separator height={2} />
  <View justifyContent="center">
    <Tooltip tooltip={Example.text.medium}>
      <Text>Длинный тултип</Text>
    </Tooltip>
  </View>
  <Separator height={2} />
  <View justifyContent="flex-end">
    <Tooltip tooltip={<Text color="yellow">{Example.text.medium}</Text>}>
      <Text>Кастомный тултип</Text>
    </Tooltip>
  </View>
</>
```
