`import { borderRadiuses } from '@qlean/york-react-native'`

Константы для скругленных углов.

```js
import { borderRadiuses } from '@qlean/york-react-native'
;<Example.Showcase>
  {Object.entries(borderRadiuses).map(([key, value]) => (
    <Example.ShowcaseItem key={key} title={key}>
      <Example.Box style={{ borderRadius: value }} width={16} />
    </Example.ShowcaseItem>
  ))}
</Example.Showcase>
```
