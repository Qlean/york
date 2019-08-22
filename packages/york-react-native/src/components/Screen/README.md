```js
import { Text, Header, Button } from '@qlean/york-react-native'
;<Screen
  leftView={{
    node: <Header.BackIcon />,
    onPress: () => {},
  }}
  rightView={{
    node: <Header.CloseIcon />,
    onPress: () => {},
    isDisabled: true,
  }}
  footer={
    <Screen.Footer>
      <Button
        isDisabled={false}
        onPress={() => {}}
        name="footer"
        withShadow
        title="Footer"
      />
    </Screen.Footer>
  }
  contentContainerStyle={{ padding: 20 }}
>
  <Text>{Example.text.long}</Text>
</Screen>
```
