```js static
import { Page } from '@qlean/york-web'

const ExamplePage = ({ children }) => (
  <Page name="examplePage" analyticsProperties={{ exampleId: 123 }}>
    {children}
  </Page>
)
```
