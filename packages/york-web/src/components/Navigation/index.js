import React, { Component } from 'react';
import styled from 'styled-components';

import { FlexBase } from 'components/flex';

import Menu from './Menu';
import Header from './Header';
import { withResponsiveProps } from '../../utils/styles';

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
    const { menuItems, preset, presetMobile } = this.props;
    return (
      <StyledNavigation
        justifyContent="space-between"
        justifyContentMobile="flex-start"
        flexDirectionMobile="column"
      >
        <Header preset={preset} presetMobile={presetMobile} isMenuOpened={isMenuOpened} toggleMenu={this.toggleMenu}/>
        <Menu preset={preset} isMenuOpened={isMenuOpened} links={menuItems}/>
      </StyledNavigation>
    );
  }
}

export default withResponsiveProps([
  { name: 'preset', defaultValue: 'lightBackground' },
])(NewNavigation);
