import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import { colors } from '@qlean/york-core';

import Logo from './logo.svg';

const StyledLogo = styled(Logo)`
  ${({ color }) => `
    fill: ${colors[color] || colors.green};
  `}
`;

export default function HeaderLogo({ logoIsUnclickable, color }) {
  const logoComponent = (
    <StyledLogo
      color={color}
      width={83}
      height={30}
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
