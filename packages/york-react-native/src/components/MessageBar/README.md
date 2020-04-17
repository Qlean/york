```js
import { MessageBar, showMessage, Button } from '@qlean/york-react-native'
;<>
  <MessageBar overlayDuration={1000} duration={2000} />
  <Button title="Show Message" onPress={() => showMessage('Some message')} />
</>
```
