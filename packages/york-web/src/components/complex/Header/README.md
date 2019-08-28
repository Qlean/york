```js
const LOGO = {
  url: require('./assets/qlean-logo.svg'),
  alt: 'Логотип Qlean',
}

const LEVEL_ONE_MENU = [{ title: 'Для дома' }, { title: 'для офиса' }]

const LEVEL_TWO_MENU = [
  { title: 'уборка' },
  { title: 'стирка и химчистка' },
  { title: 'переезды' },
  { title: 'ХРАНЕНИЕ' },
  { title: 'qlean' },
]

;<Header
  levelOneMenu={LEVEL_ONE_MENU}
  levelTwoMenu={LEVEL_TWO_MENU}
  logo={LOGO}
/>
```
