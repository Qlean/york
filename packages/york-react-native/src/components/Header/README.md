```js
import { Stepper, Text, Separator } from '@qlean/york-react-native'

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
    centerNode={<Stepper maxSteps={7} step={2} />}
    leftView={{
      node: <Header.BackIcon />,
      onPress: () => {},
    }}
  />
</>
```
