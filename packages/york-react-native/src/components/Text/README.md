```js
import { Example } from '@qlean/york-web'

const presets = [
  {
    caption: 'Заголовок экрана, саксесс скрины, онбординг',
    preset: 'header1',
  },
  {
    caption: 'Заголовки разделов',
    preset: 'header2',
  },
  {
    caption: 'Заголовок в хедерах, названия блоков',
    preset: 'header3',
  },
  {
    caption: 'Обычный текст',
    preset: 'text',
  },
  {
    caption: 'Подписи к действия, подсказки, алерты',
    preset: 'caption',
  },
  {
    caption: 'Юридический текст',
    preset: 'captionSmall',
  },
]

;<Example.Showcase overflow="hidden">
  {presets.map(({ preset, caption }) => (
    <Example.ShowcaseItem key={preset} title={preset} caption={caption}>
      <Text preset={preset}>
        Аляскинский маламут — достаточно крупная собака аборигенного типа,
        предназначенная для работы в упряжке, одна из древнейших пород собак.
      </Text>
    </Example.ShowcaseItem>
  ))}
</Example.Showcase>
```
