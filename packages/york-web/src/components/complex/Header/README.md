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

const LEVEL_THREE_MENU = [
  { title: 'Поддерживающая' },
  { title: 'Генеральная' },
  { title: 'После ремонта' },
  { title: 'Загородные дома' },
  { title: 'Мытьё окон' },
  { title: 'Химчистка мебели' },
]

;<div style={{ fontFamily: '"Museo Sans", sans-serif' }}>
  <Header
    levelOneMenu={LEVEL_ONE_MENU}
    levelTwoMenu={LEVEL_TWO_MENU}
    levelThreeMenu={LEVEL_THREE_MENU}
    logo={LOGO}
  />
</div>
```
