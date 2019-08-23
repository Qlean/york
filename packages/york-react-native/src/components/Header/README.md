```js
import { Picker, Text, Separator, Icon } from '@qlean/york-react-native'

;
<>
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
    centerNode={
      <Picker
        name="example"
        options={Example.options}
        value={Example.options[0].value}
        isDisabled={false}
        onChange={() => {}}
      />
    }
    leftView={{
      node: <Icon name="back" />,
      onPress: () => {},
    }}
  />
</>
```
