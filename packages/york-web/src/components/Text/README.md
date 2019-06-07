```js
import { Separator } from '@qlean/york-web'
const presets = [
  {
    title: 'Header 1',
    caption: 'Заголовок страниц десктопной версии',
    preset: 'header1',
  },
  {
    title: 'Header 2',
    caption: 'Заголовок блоков страниц в десктопной версии',
    preset: 'header2',
  },
  {
    title: 'Header 3',
    caption:
      'Заголовок страницы в мобильной версии, выделение контента внутри блока на десктопе',
    preset: 'header3',
  },
  {
    title: 'Header 4',
    caption:
      'Заголовок блока в мобильной версии, название секций в формах и личном кабинете',
    preset: 'header4',
  },
  {
    title: 'Header 5',
    caption: 'Заголовок страницы в десктопной версии',
    preset: 'header5',
  },
  {
    title: 'Text Large',
    caption: 'Текст на лендингах',
    preset: 'textLarge',
  },
  {
    title: 'Text Strong',
    preset: 'textStrong',
  },
  {
    title: 'Text',
    caption: 'Обычный текст',
    preset: 'text',
  },
  {
    title: 'Caption',
    preset: 'caption',
  },
]

;<>
  {presets.map((text, index) => (
    <div key={index}>
      <Text htmlTag="div" preset="text">
        {text.title}
      </Text>
      <Text htmlTag="div" color="grey"preset="text">
        {text.caption}
      <Text htmlTag="div" preset={text.preset}>
        Шнауцеры — крепкие, довольно коренастые собаки квадратного формата с чуть наклонной спиной
      </Text>
      </Text>
      <Separator height={8} />
    </div>
  ))}
</>
```
