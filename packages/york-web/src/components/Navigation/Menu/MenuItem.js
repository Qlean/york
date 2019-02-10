import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '@qlean/york-core';

import { g, media } from 'utils/styles';

import { Text, InlineButton } from 'components/ui';

const getCss = ({ color, hoverColor, isAuthButton }) => `
  display: block;
  text-transform: uppercase;
  transition: none;
  text-align: left;
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

    ${isAuthButton ? `
      margin-top: ${g(6)}px;
      margin-bottom: ${g(8)}px;
      color: ${colors.grey};
    ` : ''}
  `)}
`;

const StyledText = styled(Text)`${getCss}`;
const StyledButton = styled(InlineButton)`${getCss}`;

const MenuItem = ({
  LinkComponent, href, onClick, color, hoverColor, children, isAuthButton, ...rest
}) => {
  if (LinkComponent) {
    return (
      <LinkComponent to={href}>
        <StyledText preset="link" color={color} hoverColor={hoverColor} {...rest}>
          {children}
        </StyledText>
      </LinkComponent>
    );
  }

  if (onClick) {
    return (
      <StyledButton
        textPreset="link"
        color={color}
        hoverColor={hoverColor}
        onClick={onClick}
        isAuthButton={isAuthButton}
        {...rest}
      >
        {children}
      </StyledButton>
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

MenuItem.propTypes = {
  LinkComponent: PropTypes.element,
  href: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(Object.keys(colors)).isRequired,
  hoverColor: PropTypes.oneOf(Object.keys(colors)).isRequired,
  children: PropTypes.node.isRequired,
  isAuthButton: PropTypes.bool.isRequired,
};

export default MenuItem;
