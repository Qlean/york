```js { "props": { "style": {"width":"100vw","position":"relative","left":"50%","right":"50%","marginLeft":"-50vw","marginRight":"-50vw","padding":"20px 0","border":"0","backgroundImage":"linear-gradient(45deg, #f5f5f5 25%, transparent 25%), linear-gradient(\n      -45deg,\n      #f5f5f5 25%,\n      transparent 25%\n    ), linear-gradient(45deg, transparent 75%, #f5f5f5 75%), linear-gradient(-45deg, transparent 75%, #f5f5f5\n        75%)","backgroundSize":"16px 16px","backgroundPosition":"0 0, 0 8px, 8px -8px, -8px 0px"} } }
const LOGO = {
  url: require('./assets/qlean-logo.svg'),
  alt: 'Логотип Qlean',
}

const LEVEL_ONE_MENU = [{ title: 'Для дома' }, { title: 'Для офиса' }]

const LEVEL_TWO_MENU = [
  {
    title: 'Уборка',
    subMenu: [
      { title: 'Поддерживающая' },
      { title: 'Генеральная' },
      { title: 'После ремонта' },
      { title: 'Загородные дома' },
      { title: 'Мытьё окон' },
      { title: 'Химчистка мебели' },
    ],
  },
  {
    title: 'Стирка и химчистка',
    subMenu: [
      { title: 'Рубашки' },
      { title: 'Постельное белье' },
      { title: 'Кроссовки' },
      { title: 'Носки' },
    ],
  },
  { title: 'Переезды', subMenu: [] },
  { title: 'Хранение' },
  { title: 'Qlean' },
]

;<div style={{ fontFamily: '"Museo Sans", sans-serif' }}>
  <DesktopHeader
    levelOneMenu={LEVEL_ONE_MENU}
    levelTwoMenu={LEVEL_TWO_MENU}
    logo={LOGO}
  />
</div>
```
