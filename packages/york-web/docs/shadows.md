`import { shadows } from '@qlean/york-web'`

Константы для теней.

```js
import { shadows } from '@qlean/york-web'
;<Example.Showcase>
  {Object.entries(shadows).map(([key, value]) => (
    <Example.ShowcaseItem key={key} title={key}>
      <Example.Box style={{ boxShadow: value }} width={16} />
    </Example.ShowcaseItem>
  ))}
</Example.Showcase>
```
