import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '@qlean/york-core';

import { media } from 'utils/styles';

import Logo from './assets/logo.svg';

const StyledLogo = styled(Logo)`
  ${({ color, colorMobile }) => `
    fill: ${colors[color] || colors.green};
    ${media.mobile(`
      fill: ${colors[colorMobile] || colors.green};
    `)}
  `}
`;

const HeaderLogo = ({ color, colorMobile, ...rest }) => (
  <a href="/?noredirect=true" name="logo">
    <StyledLogo
      color={color}
      colorMobile={colorMobile}
      width={83}
      height={30}
      {...rest}
    />
  </a>
);

HeaderLogo.propTypes = {
  color: PropTypes.oneOf(Object.keys(colors)).isRequired,
  colorMobile: PropTypes.oneOf(Object.keys(colors)).isRequired,
};

export default HeaderLogo;
