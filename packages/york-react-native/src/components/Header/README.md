```js
import { Icon } from '@qlean/york-react-native'
;<Header
  title={Example.text.short}
  caption={Example.text.medium}
  leftView={{
    view: <Icon name="back" />,
    onPress: () => {},
  }}
  rightView={{
    view: <Icon name="close" />,
    onPress: () => {},
    isDisabled: true,
  }}
/>
```
