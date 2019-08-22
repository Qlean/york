```js
import { Picker, Text, Separator } from '@qlean/york-react-native'

;
<>
  <Header
    title={Example.text.short}
    caption={Example.text.medium}
    leftView={{
      node: <Header.BackIcon />,
      onPress: () => {},
    }}
    rightView={{
      node: <Header.CloseIcon />,
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
      node: <Header.BackIcon />,
      onPress: () => {},
    }}
  />
</>
```
