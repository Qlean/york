```js static
import { Page } from '@qlean/york-web'

const ExamplePage = ({ children }) => (
  <Page name="examplePage" analyticsData={{ exempleId: 123 }}>
    {children}
  </Page>
)
```
