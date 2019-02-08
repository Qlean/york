import React from 'react';
import styled from 'styled-components';
import { colors } from '@qlean/york-core';

import { borderRadiuses, shadows, media } from 'utils/styles';

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

const FloatingMenu = ({ children, ...rest }) => (
  <StyledFloatingMenu {...rest}>
    {children}
  </StyledFloatingMenu>
);

export default FloatingMenu;
