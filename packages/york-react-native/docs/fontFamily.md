`import { fontFamily, fontFamilyBold } from '@qlean/york-react-native'`

Константа со значением `fontFamily`, которое используется в проекте. Для жирного начертания используется `fontFamilyBold`, так как `react-native` не поддерживает `fontWeight` для кастомных шрифтов.

```js
import { Text, Separator, fontFamily, fontFamilyBold } from '@qlean/york-react-native'
;<>
  <Text>{fontFamily}, {fontFamilyBold}</Text>
  <Text></Text>
</>
```
