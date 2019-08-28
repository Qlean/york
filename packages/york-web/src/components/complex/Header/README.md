```js
const LOGO = {
  url: require('./assets/qlean-logo.svg'),
  alt: 'Логотип Qlean',
}

const LEVEL_ONE_MENU = [{ title: 'Для дома' }, { title: 'Для офиса' }]

const LEVEL_TWO_MENU = [
  { title: 'Уборка' },
  { title: 'Стирка и химчистка' },
  { title: 'Переезды' },
  { title: 'Хранение' },
  { title: 'Qlean' },
]

;<div style={{ fontFamily: '"Museo Sans", sans-serif' }}>
  <Header
    levelOneMenu={LEVEL_ONE_MENU}
    levelTwoMenu={LEVEL_TWO_MENU}
    logo={LOGO}
  />
</div>
```
