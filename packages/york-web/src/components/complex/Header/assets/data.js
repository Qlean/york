import React from 'react'
import { Text, Link } from 'york-web/components/primitive'

export default {
  isProfileAvailable: true,
  isLoggedIn: true,
  isPlusSubscriber: false,
  defaultTab: 'home',
  selectedLevelOneItem: 'cleaning',
  selectedLevelTwoItem: 'general',
  selectedProfileItem: 'profile',
  selectedRegion: 'msk',
  callbacks: {
    onLogout: () => console.log('logout!'),
    onCherdak: () => console.log('cherdak!'),
    onRegionChange: () => {},
  },
  components: {
    Logo: () => <Text preset="textLarge">Q L E A N</Text>,
    Link,
    QleanPlusItem: ({ children }) => (
      <>
        {children}
        <Text preset="link" color="blue">
          &nbsp;ПЛЮС
        </Text>
      </>
    ),
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
        title: 'Выйти',
        callback: 'onLogout',
      },
    ],
    menu: [
      {
        name: 'cleaning',
        href: '/',
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
      {
        name: 'cherdak',
        title: 'Хранение',
        callback: 'onCherdak',
      },
      {
        name: 'plus',
        title: 'Qlean',
        href: '/plus',
        component: 'QleanPlusItem',
      },
    ],
  },
}
