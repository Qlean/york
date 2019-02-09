import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { menuItemsShape } from 'utils/propTypes';

import { FlexBase } from 'components/flex';

import Menu from './Menu';
import Header from './Header';
import { presets } from './utils';

const StyledNavigation = styled(FlexBase)`
  z-index: 1001;
`;

class NewNavigation extends Component {
  static propTypes = {
    menuItems: menuItemsShape.isRequired,
    preset: PropTypes.oneOf(Object.keys(presets)),
    presetMobile: PropTypes.oneOf(Object.keys(presets)),
  }

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
        <Header
          preset={preset}
          presetMobile={presetMobile}
          isMenuOpened={isMenuOpened}
          toggleMenu={this.toggleMenu}
        />
        <Menu preset={preset} isMenuOpened={isMenuOpened} menuItems={menuItems}/>
      </StyledNavigation>
    );
  }
}

export default NewNavigation;
