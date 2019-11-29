```js
import { Pagination, Text, Separator, Icon } from '@qlean/york-react-native'
;<>
  <Header
    title={Example.text.short}
    caption={Example.text.medium}
    leftView={{
      node: <Icon name="back" />,
      onPress: () => {},
    }}
    rightView={{
      node: <Icon name="close" />,
      onPress: () => {},
      isDisabled: true,
    }}
  />
  <Separator height={4} />
  <Header
    centerNode={<Pagination value={2} pagesCount={7} />}
    leftView={{
      node: <Icon name="back" />,
      onPress: () => {},
    }}
  />
</>
```
