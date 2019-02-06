import React, { Component } from 'react';
import styled from 'styled-components';

import { FlexBase } from 'components/flex';

import Menu from './Menu';
import Header from './Header';
import { withResponsiveProps } from '../../utils/styles';

const links = [
  {
    title: 'Услуги',
    items: [
      { title: 'Стандартная уборка', href: '/' },
      { title: 'Генеральная уборка', href: '/' },
      { title: 'После ремонта', href: '/' },
    ],
  },
  {
    title: 'Все услуги',
    hidden: true,
    hiddenMobile: true,
    items: [
      { title: 'Поддерживающая уборка', href: '/' },
      { title: 'Офисы', href: '/' },
      { title: 'Химчистка квартиры', href: '/' },
    ],
  },
  // {
  //   title: 'Личный кабинет',
  //   hidden: true,
  //   items: [
  //     { title: 'Скидка за друзей', href: '/' },
  //     { title: 'Мои заказы', href: '/' },
  //     { title: 'Мои клинеры', href: '/' },
  //     { title: 'Оплата', href: '/' },
  //     { title: 'Настройки профиля', href: '/' },
  //   ],
  // },
];

const StyledNavigation = styled(FlexBase)`
  z-index: 1001;
`;

class NewNavigation extends Component {
  state = {
    isMenuOpened: false,
  };

  toggleMenu = () => this.setState(prevState => ({ isMenuOpened: !prevState.isMenuOpened }))

  render() {
    const { isMenuOpened } = this.state;
    const { preset, presetMobile } = this.props;
    return (
      <StyledNavigation
        justifyContent="space-between"
        justifyContentMobile="flex-start"
        flexDirectionMobile="column"
      >
        <Header preset={preset} presetMobile={presetMobile} isMenuOpened={isMenuOpened} toggleMenu={this.toggleMenu}/>
        <Menu preset={preset} isMenuOpened={isMenuOpened} links={links}/>
      </StyledNavigation>
    );
  }
}

export default withResponsiveProps([
  { name: 'preset', defaultValue: 'lightBackground' },
])(NewNavigation);
