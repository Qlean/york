`import { shadows } from '@qlean/york-core'`

Константы для теней.

```js
import { Example, shadows } from '@qlean/york-web'
;<Example.Showcase>
  {Object.entries(shadows).map(([key, value]) => (
    <Example.ShowcaseItem key={key} title={key}>
      <Example.Box style={{ boxShadow: value }} width={16} />
    </Example.ShowcaseItem>
  ))}
</Example.Showcase>
```
