`import { sizes } from '@qlean/york-core'`

Типовые отступы. Задаются в пунктах интерфейсной сетки. Как правило, один пункт это 5 пикселей.

```js
import { sizes } from '@qlean/york-core'
import { uiPoint } from '@qlean/york-web'
;<Example.Showcase flexDirection="column">
  {Object.values(sizes)
    .filter(a => a)
    .map(size => (
      <Example.ShowcaseItem
        title={`${size} pt / ${size * uiPoint} px`}
        key={size}
      >
        <Example.Box
          style={{
            height: size * uiPoint,
            width: '100%',
          }}
        />
      </Example.ShowcaseItem>
    ))}
</Example.Showcase>
```
