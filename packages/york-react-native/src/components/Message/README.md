```js
import { Message } from '@qlean/york-react-native'
;<>
  <Message message="Test message" />
  <Message message={{ text: 'Error message', icon:'error' }} />
  <Message message={{ text: 'Success message', icon:'success' }} />
  <Message message={{ text: 'Test message with onPress', onPress: () => console.log('PRESS') }} />
</>
```
