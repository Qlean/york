import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '@qlean/york-core';

import { g } from 'utils/styles';

const StyledToggler = styled.div`
  transition: all linear .2s;
  position: relative;
  cursor: pointer;
  height: ${g(4)}px;
  width: ${g(4)}px;
  z-index: 1;

  &:before,
  &:after {
    transition: all ease .2s;
    position: absolute;
    margin-left: -13px;
    content: "";
    width: 24px;
    height: 3px;
    border-radius: 1.5px;
    left: 50%;
    top: 50%;
    background-color: ${({ color }) => colors[color] || colors.black};
  }

  &:before {
    margin-top: -7px;
  }

  &:after {
    margin-top: 3px;
  }


  ${({ isActive }) => (isActive ? `
    &:before, &:after {
      margin-top: -2px;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  ` : '')}
`;

export default function HeaderMobileMenuToggler(props) {
  const {
    onClick,
    isActive,
    color,
    ...rest
  } = props;
  return (
    <StyledToggler
      isActive={isActive}
      onClick={onClick}
      color={color}
      {...rest}
    />
  );
}

HeaderMobileMenuToggler.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  color: PropTypes.oneOf(Object.keys(colors)).isRequired,
};
