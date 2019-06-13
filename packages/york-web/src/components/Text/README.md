```js
import { Example } from '@qlean/york-web'

const presets = [
  {
    caption: 'Заголовок страниц десктопной версии',
    preset: 'header1',
  },
  {
    caption: 'Заголовок блоков страниц в десктопной версии',
    preset: 'header2',
  },
  {
    caption:
      'Заголовок страницы в мобильной версии, выделение контента внутри блока на десктопе',
    preset: 'header3',
  },
  {
    caption:
      'Заголовок блока в мобильной версии, название секций в формах и личном кабинете',
    preset: 'header4',
  },
  {
    caption: 'Заголовок страницы в десктопной версии',
    preset: 'header5',
  },
  {
    caption: 'Текст на лендингах',
    preset: 'textLarge',
  },
  {
    preset: 'textStrong',
  },
  {
    caption: 'Обычный текст',
    preset: 'text',
  },
  {
    preset: 'caption',
  },
]

;<Example.Showcase>
  {presets.map(({ preset, caption }) => (
    <Example.ShowcaseItem key={preset} title={preset} caption={caption}>
      <Text preset={preset}>
        Шнауцеры — крепкие, довольно коренастые собаки квадратного формата с
        чуть наклонной спиной
      </Text>
    </Example.ShowcaseItem>
  ))}
</Example.Showcase>
```
