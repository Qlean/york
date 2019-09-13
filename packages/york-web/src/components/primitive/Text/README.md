```js
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
    caption: 'Пункты в меню, некоторые ссылки',
    preset: 'link',
  },
  {
    caption: 'Подписи в кнопках, тултипы',
    preset: 'caption',
  },
  {
    caption: 'Пояснение под кнопками, юридический текст',
    preset: 'captionSmall',
  },
]

;<Example.Showcase overflow="hidden">
  {presets.map(({ preset, caption }) => (
    <Example.ShowcaseItem key={preset} title={preset} caption={caption}>
      <Text preset={preset}>{Example.text.medium}</Text>
    </Example.ShowcaseItem>
  ))}
</Example.Showcase>
```
