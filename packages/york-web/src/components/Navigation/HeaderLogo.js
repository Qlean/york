import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import { colors } from '@qlean/york-core';

import { media } from 'utils/styles';

import Logo from './logo.svg';

const StyledLogo = styled(Logo)`
  ${({ color, colorMobile }) => `
    fill: ${colors[color] || colors.green};
    ${media.mobile(`
      fill: ${colors[colorMobile] || colors.green};
    `)}
  `}
`;

export default function HeaderLogo({ logoIsUnclickable, color, colorMobile, ...rest }) {
  const logoComponent = (
    <StyledLogo
      color={color}
      colorMobile={colorMobile}
      width={83}
      height={30}
      {...rest}
    />
  );

  if (logoIsUnclickable) {
    return logoComponent;
  }

  return (
    <Link to="/?noredirect=true">
      {logoComponent}
    </Link>
  );
}
