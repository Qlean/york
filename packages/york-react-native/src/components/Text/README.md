```js
const presets = [
  {
    caption: 'Заголовок экрана, саксесс скрины',
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
  {presets.map(({ preset, caption }) => {
    const { fontSize, lineHeight } = Text.presets[preset]
    return (
      <Example.ShowcaseItem
        key={preset}
        title={`${preset} ${fontSize}/${lineHeight}`}
        caption={caption}
      >
        <Text preset={preset}>{Example.text.medium}</Text>
      </Example.ShowcaseItem>
    )
  })}
</Example.Showcase>
```
