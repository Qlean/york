```js static
import { Page } from '@qlean/york-web'

const ExamplePage = ({ children }) => (
  <Page name="examplePage" analyticsPayload={{ exempleId: 123 }}>
    {children}
  </Page>
)
```
