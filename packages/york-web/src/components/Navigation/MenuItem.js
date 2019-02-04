import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import colors from '@qlean/york-core/lib/styles/colors';

import { media } from '../../utils/styles';

const css = `
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  color: ${colors.coal};
  font-size: 15px;
  font-weight: 700;
  padding: 10px;
  width: 100%;

  &:hover {
    color: ${colors.grey};
    text-decoration: none;
  }

  ${media.mobile`
    padding: 10px 0;
  `}
`;

const StyledLink = styled(Link)`${css}`;
const StyledA = styled.a`${css}`;
const StyledDiv = styled.div`${css}`;

const MenuItem = ({ href, children, ...rest }) => {
  return !href
    ? <StyledDiv {...rest}>{children}</StyledDiv>
    : href[0] === '/'
    ? <StyledLink to={href} {...rest}>{children}</StyledLink>
    : <StyledA href={href} {...rest}>{children}</StyledA>;
};

export default MenuItem;
