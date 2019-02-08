import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '@qlean/york-core';

import { g, borderRadiuses, shadows, media } from 'utils/styles';

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
    padding: ${g(4)}px ${g(2)}px;
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

FloatingMenu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FloatingMenu;
