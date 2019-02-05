import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import { colors } from '@qlean/york-core';

import { media } from 'utils/styles';

const getCss = ({ color }) => `
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  color: ${colors[color] || colors.coal};
  font-size: 15px;
  font-weight: 700;
  padding: 10px;
  width: 100%;
  transition: all .3s ease;

  &:hover {
    color: ${colors.grey};
    text-decoration: none;
  }

  ${media.mobile(`
    padding: 10px 0;
    color: ${colors.coal};
  `)}
`;

const StyledLink = styled(Link)`${getCss}`;
const StyledA = styled.a`${getCss}`;
const StyledDiv = styled.div`${getCss}`;

const MenuItem = ({ href, children, color, ...rest }) => {
  return !href
    ? <StyledDiv color={color} {...rest}>{children}</StyledDiv>
    : href[0] === '/'
    ? <StyledLink to={href} color={color} {...rest}>{children}</StyledLink>
    : <StyledA href={href} color={color} {...rest}>{children}</StyledA>;
};

export default MenuItem;
