import React from 'react'

export const LOGO = {
  url: require('../assets/qlean-logo.svg'),
  alt: 'Логотип Qlean',
}

export const LEVEL_ONE_MENU = {
  tabs: [{ title: 'Для дома' }, { title: 'Для офиса' }],
  geo: { selectedValue: 'Санкт-Петербург' },
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

// const Line = () => <div style={{ height: 1, backgroundColor: 'grey' }} />

// const Tab = ({ Container, containerProps, Item, itemProps, href }) => (
//   <a href={href}>
//     <Container {...containerProps}>
//       <Item {...itemProps} />
//     </Container>
//   </a>
// )

// const QleanPlusItem = ({ children }) => (
//   <>
//     {children}
//     <Separator width={1} />
//     <QleanPlusIcon />
//   </>
// )

export const props = {
  isProfileAvailable: true,
  isLoggedIn: false,
  isPlusSubscriber: false,
  defaultTab: 'home',
  selectedMenuItem: 'cleaning',
  selectedSecondMenuItem: 'general',
  selectedProfileItem: null,
  selectedRegion: 'msk',
  callbacks: {
    onLogout: () => {},
    onRegionChange: () => {},
  },
  components: {
    Logo: () => <div>L O G O</div>,
    // LinkComponent: Link,
  },
  // Static JSON from Contentful
  content: {
    phone: '74951234567',
    regions: [],
    tabs: [
      {
        name: 'home',
        title: 'Для дома',
        href: '/home',
      },
      {
        name: 'office',
        title: 'Для офиса',
        href: '/office',
      },
    ],
    profile: [
      {
        name: 'profile',
        title: 'Профиль',
        href: '/profile',
      },
      {
        name: 'logout',
        title: 'Для офиса',
        callback: 'onLogout',
      },
    ],
    menu: [
      {
        name: 'cleaning',
        title: 'Уборка',
        href: 'https://qlean.ru',
      },
      {
        name: 'plus',
        title: 'Qlean Плюс',
        href: 'https://plus.qlean.ru',
        component: 'QleanPlusItem',
      },
    ],
  },
}
