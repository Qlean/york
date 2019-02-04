import React from 'react';
import styled from 'styled-components';
import colors from '@qlean/york-core/lib/styles/colors';

import { borderRadiuses, shadows, media } from '../../utils/styles';

import MenuItem from './MenuItem';

const StyledLink = styled(MenuItem)`
  ${media.desktop(`
    &:hover {
      border-radius: ${borderRadiuses.small};
      background: ${colors.smoke};
      color: ${colors.coal};
    }
  `)}
`;

const StyledFloatingMenu = styled.nav`
  display: none;
  flex-direction: column;

  ${media.desktop(`
    position: absolute;
    top: 100%;
    right: 0;
    background: ${colors.white};
    border-radius: ${borderRadiuses.medium};
    box-shadow: ${shadows.strong};
    padding: 20px 10px;
  `)}

  ${media.mobile`
    display: block;
  `}
`;

const FloatingMenu = ({ links, ...rest }) => (
  <StyledFloatingMenu {...rest}>
    {links.map(link => <StyledLink key={link.title} to={link.href}>{link.title}</StyledLink>)}
  </StyledFloatingMenu>
);

export default FloatingMenu;
