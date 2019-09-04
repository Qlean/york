export const LOGO = {
  url: require('../assets/qlean-logo.svg'),
  alt: 'Логотип Qlean',
}

export const LEVEL_ONE_MENU = {
  tabs: [{ title: 'Для дома' }, { title: 'Для офиса' }],
  geo: {
    selectedValue: 'Санкт-Петербург',
    cities: [
      { name: 'Санкт-Петербург', value: 'spb' },
      { name: 'Москва', value: 'msk' },
    ],
  },
  profile: [
    { title: 'Бонусы', isSelected: true },
    { title: 'Мои уборки' },
    { title: 'Оплата' },
    { title: 'Настройки профиля' },
    { title: 'Мой Qlean Плюс' },
    { title: 'Выйти' },
  ],
}

export const LEVEL_TWO_MENU = [
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
