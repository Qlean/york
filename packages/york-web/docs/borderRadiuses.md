`import { borderRadiuses } from '@qlean/york-web'`

Константы для скругленных углов.

```js
import { Example, borderRadiuses } from '@qlean/york-web'
;<Example.Showcase>
  {Object.entries(borderRadiuses).map(([key, value]) => (
    <Example.ShowcaseItem key={key} title={key}>
      <Example.Box style={{ borderRadius: value }} width={16} />
    </Example.ShowcaseItem>
  ))}
</Example.Showcase>
```
