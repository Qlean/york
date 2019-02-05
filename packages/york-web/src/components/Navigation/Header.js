import React from 'react';
import styled from 'styled-components';
import { colors } from '@qlean/york-core';

import { media } from 'utils/styles';
import { FlexBase } from 'components/flex';
// import HeaderLogo from 'components/Header/HeaderLogo';

import Toggler from './Toggler';

const StyledHeaderWrapper = styled.div`
  z-index: 1;
  padding: 0 30px;
  ${({ isMenuOpened }) => `
    ${media.mobile(`
      background: ${isMenuOpened ? colors.white : 'none'};
    `)};
  `};
`;

const StyledHeader = styled(FlexBase)`
  height: 60px;
  ${({ isMenuOpened }) => `
    ${media.mobile(`
      border-bottom: 1px solid ${isMenuOpened ? colors.silver : 'transparent'};
    `)};
  `};
`;

const StyledToggler = styled(Toggler)`
  display: none;
  ${media.mobile`
    display: block;
  `};
`;

const Header = ({ isMenuOpened, toggleMenu }) => (
  <StyledHeaderWrapper isMenuOpened={isMenuOpened}>
    <StyledHeader
      alignItems="center"
      justifyContentMobile="space-between"
      isMenuOpened={isMenuOpened}
    >
      {/* <HeaderLogo/> */}
      <StyledToggler isActive={isMenuOpened} onClick={toggleMenu}/>
    </StyledHeader>
  </StyledHeaderWrapper>
);

export default Header;
