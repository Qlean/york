import React from 'react';
import styled from 'styled-components';
import { colors } from '@qlean/york-core';

import { g, media } from 'utils/styles';

import { Text } from 'components/ui';

const getCss = ({ color, hoverColor }) => `
  display: block;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  color: ${colors[color] || colors.coal};
  padding: ${g(2)}px;
  width: 100%;

  &:hover {
    color: ${colors[hoverColor] || colors.grey};
  }

  ${media.mobile(`
    padding: ${g(2)}px 0;
    color: ${colors.coal};
  `)}
`;

const StyledText = styled(Text)`${getCss}`;

const MenuItem = ({
  LinkComponent, href, color, hoverColor, children, ...rest
}) => {
  if (LinkComponent) {
    return (
      <LinkComponent to={href}>
        <StyledText preset="link" color={color} {...rest}>
          {children}
        </StyledText>
      </LinkComponent>
    );
  }

  return !href
    ? (
      <StyledText preset="link" color={color} hoverColor={hoverColor} {...rest}>
        {children}
      </StyledText>
    ) : (
      <a href={href}>
        <StyledText preset="link" color={color} hoverColor={hoverColor} {...rest}>
          {children}
        </StyledText>
      </a>
    );
};

export default MenuItem;
