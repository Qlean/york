import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { menuItemsShape } from 'utils/propTypes';

import { FlexBase } from 'components/flex';

import Menu from './Menu';
import Header from './Header';
import { presets } from './utils';

const StyledNavigation = styled(FlexBase)`
  z-index: 9999;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

class Navigation extends Component {
  static propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.shape(menuItemsShape).isRequired).isRequired,
    preset: PropTypes.oneOf(Object.keys(presets)),
    presetMobile: PropTypes.oneOf(Object.keys(presets)),
    withBorder: PropTypes.bool,
  }

  state = {
    isMenuOpened: false,
  };

  toggleMenu = () => this.setState(prevState => ({ isMenuOpened: !prevState.isMenuOpened }))

  render() {
    const { isMenuOpened } = this.state;
    const {
      menuItems, preset, presetMobile, withBorder,
    } = this.props;
    return (
      <StyledNavigation
        justifyContent="space-between"
        justifyContentMobile="flex-start"
        flexDirectionMobile="column"
        name="headerNavigation"
      >
        <Header
          preset={preset}
          presetMobile={presetMobile}
          isMenuOpened={isMenuOpened}
          toggleMenu={this.toggleMenu}
          withBorder={withBorder}
        />
        <Menu
          preset={preset}
          toggleMenu={this.toggleMenu}
          isMenuOpened={isMenuOpened}
          menuItems={menuItems}
        />
      </StyledNavigation>
    );
  }
}

export default Navigation;
