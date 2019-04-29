import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '@qlean/york-core';

import { g, media } from 'utils/styles';
import { FlexBase } from 'components/ui/flex';

import HeaderLogo from './HeaderLogo';
import Toggler from './Toggler';
import { presets } from '../utils';

const StyledHeaderWrapper = styled.div`
  z-index: 1;
  padding: 0 ${g(6)}px;
  ${({ isMenuOpened }) => `
    ${media.mobile(`
      background: ${isMenuOpened ? colors.white : 'none'};
    `)};
  `};
`;

const StyledHeader = styled(FlexBase)`
  height: ${g(12)}px;
  ${({ withBorder }) => `
    ${media.mobile(`
      border-bottom: 1px solid ${withBorder ? colors.silver : 'transparent'};
    `)};
  `};
`;

const StyledToggler = styled(Toggler)`
  display: none;
  ${media.mobile`
    display: block;
  `};
`;

const Header = ({
  isMenuOpened, toggleMenu, preset, presetMobile, withBorder,
}) => (
  <StyledHeaderWrapper isMenuOpened={isMenuOpened}>
    <StyledHeader
      alignItems="center"
      justifyContentMobile="space-between"
      withBorder={withBorder || isMenuOpened}
    >
      <HeaderLogo
        color={isMenuOpened ? 'black' : presets[preset].logo}
        colorMobile={isMenuOpened ? 'black' : presets[presetMobile].logo}
      />
      <StyledToggler
        color={isMenuOpened ? 'black' : presets[presetMobile].toggler}
        isActive={isMenuOpened}
        onClick={toggleMenu}
      />
    </StyledHeader>
  </StyledHeaderWrapper>
);

Header.propTypes = {
  isMenuOpened: PropTypes.bool.isRequired,
  withBorder: PropTypes.bool,
  toggleMenu: PropTypes.func.isRequired,
  preset: PropTypes.oneOf(['lightBackground', 'darkBackground']),
  presetMobile: PropTypes.oneOf(['lightBackground', 'darkBackground']),
};

export default Header;
