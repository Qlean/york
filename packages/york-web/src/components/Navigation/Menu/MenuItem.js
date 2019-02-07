import React from 'react';
import styled from 'styled-components';
import { colors } from '@qlean/york-core';

import { media } from 'utils/styles';
// import { getBaseTextCss, textPresets } from 'components/ui';

const getCss = ({ color, hoverColor }) => `
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  color: ${colors[color] || colors.coal};
  font-size: 15px;
  font-weight: 700;
  padding: 10px;
  width: 100%;

  &:hover {
    color: ${colors[hoverColor] || colors.grey};
    text-decoration: none;
  }

  ${media.mobile(`
    padding: 10px 0;
    color: ${colors.coal};
  `)}
`;

const StyledA = styled.a`${getCss}`;
const StyledDiv = styled.div`${getCss}`;

const MenuItem = ({ href, children, LinkComponent, color, hoverColor, ...rest }) => {
  return LinkComponent
    ? (<LinkComponent {...rest} to={href}>
        <StyledDiv color={color} {...rest}>{children}
        </StyledDiv>
      </LinkComponent>)
    : !href
    ? <StyledDiv color={color} hoverColor={hoverColor} {...rest}>{children}</StyledDiv>
    // : href[0] === '/'
    // ? <StyledLink to={href} color={color} {...rest}>{children}!</StyledLink>
    : <StyledA href={href} color={color} {...rest}>{children}</StyledA>;
};

export default MenuItem;
