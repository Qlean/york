import React from 'react'

export const LOGO = {
  url: '',
  alt: 'Логотип Qlean',
}

export const LEVEL_ONE_MENU = {
  tabs: [{ title: 'Для дома' }, { title: 'Для офиса' }],
  geo: {
    selectedValue: 'spb',
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
  selectedLevelOneItem: 'cleaning',
  selectedLevelTwoItem: 'general',
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
        items: [
          { name: 'basic', title: 'Поддерживающая', href: '/basic' },
          { name: 'general', title: 'Генеральная', href: '/general' },
          { name: 'epic', title: 'После ремонта', href: '/epic' },
          { name: 'house', title: 'Загородные дома', href: '/house' },
          { name: 'windows', title: 'Мытьё окон', href: '/windows' },
          { name: 'furniture', title: 'Химчистка мебели', href: '/furniture' },
        ],
      },
      {
        name: 'laundry',
        href: '/laundry',
        title: 'Стирка и химчистка',
        items: [
          { name: 'shirts', title: 'Рубашки', href: '/shirts' },
          { name: 'linen', title: 'Постельное белье', href: '/linen' },
          { name: 'sneakers', title: 'Кроссовки', href: '/sneakers' },
          { name: 'socks', title: 'Носки', href: '/socks' },
        ],
      },
      { name: 'moving', title: 'Переезды', href: '/moving' },
      { name: 'cherdak', title: 'Хранение', href: '/cherdak' },
      { name: 'plus', title: 'Qlean', href: '/plus' },
    ],
  },
}
