`import { colors } from '@qlean/york-core'`

Палитра цветов. Во всех других компонентах используются только они.

```js
import { colors } from '@qlean/york-core'
import { Example, sizes, borderRadiuses } from '@qlean/york-web'
;<Example.Showcase>
  {Object.entries(colors).map(([name, color]) => (
    <Example.ShowcaseItem title={name} caption={color} key={name}>
      <div
        style={{
          height: sizes[20],
          width: sizes[20],
          backgroundColor: color,
          borderRadius: borderRadiuses.medium,
          border: `1px solid ${colors.whisper}`,
        }}
      />
    </Example.ShowcaseItem>
  ))}
</Example.Showcase>
```
