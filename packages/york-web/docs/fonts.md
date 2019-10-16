```html
<link
  rel="stylesheet"
  href="http://storage.googleapis.com/pltf-prod-plus-static-bucket/platform-libraries-shared-static/master/fonts/fonts.css"
/>
```

Шрифты и CSS к ним не лежат в Йорке физически, здесь только документация к ним. Сами файлы находятся в хранилище статики и полключаются через линковку CSS-файла в `<head>`.

В качестве основной гарнитуры используется Museo Sans. Доступно пять насыщенностей: 100, 300, 500, 700 и 900, из которых широко используются только 300, 500 и 700 и два начертания — прямое и наклонное.

Шрифты поставляются в форматах `woff2` и `woff`.

CSS-свойства `-webkit-font-smoothing` и `-moz-osx-font-smoothing` должны быть отключены. Они работают только на macOS, а мы хотим видеть сайт так, как его видит большая часть пользователей.

```js
import styled from 'styled-components'

import { Text } from '@qlean/york-web'

const fontWeights = [100, 300, 500, 700, 900]

const StyledText = styled(Text)`
  ${({ fontWeight, fontStyle }) => `
    font-weight: ${fontWeight};
    font-style: ${fontStyle};
  `}
`

;<Example.Showcase>
  {fontWeights.map(weight => (
    <Example.ShowcaseItem key={String(weight)} title={weight}>
      <StyledText fontWeight={weight} fontStyle="normal">
        {Example.text.medium}
      </StyledText>
      <br />
      <StyledText fontWeight={weight} fontStyle="italic">
        {Example.text.medium}
      </StyledText>
    </Example.ShowcaseItem>
  ))}
</Example.Showcase>
```
