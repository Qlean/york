```js
import { Text, Header, Button, Icon } from '@qlean/york-react-native'
;<Screen
  name="exampleScreen"
  analyticsPayload={{ exampleId: 123 }}
  leftView={{
    node: <Icon name="back" />,
    onPress: () => {},
  }}
  rightView={{
    node: <Icon name="close" />,
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
