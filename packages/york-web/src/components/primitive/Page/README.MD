```js static
import { Page } from '@qlean/york-web'

const ExamplePage = ({ children }) => (
  <Page name="examplePage" analyticsProps={{ properties: { exampleId: 123 } }}>
    {children}
  </Page>
)
```
