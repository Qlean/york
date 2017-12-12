import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const backgroundImage = {
  yellow: 'linear-gradient(180deg, #FAE12E 0%, #FAC22E 100%)',
  blue: 'linear-gradient(180deg, #4298E6 0%, #1363AC 100%)',
};

const sharedPropTypes = {
  rounded: PropTypes.bool,
  color: PropTypes.oneOf(['yellow', 'blue']),
  children: PropTypes.node,
};

const Button = styled.button`
  font-size: 16px;
  max-height: 100%;
  height: 50px;
  max-width: 320px;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  border-radius: ${({ rounded }) => (rounded ? '100px' : '0')};
  background-image: ${({ color }) => backgroundImage[color]};
`;

Button.propTypes = sharedPropTypes;

const Link = Button.withComponent('a').extend`
  display: block;
`;

Link.propTypes = {
  href: PropTypes.string.isRequired,
  ...sharedPropTypes,
};

// eslint-disable-next-line react/prop-types
export default ({ href, children, ...rest }) => (
  href
    ? <Link href={href} {...rest}>{children}</Link>
    : <Button {...rest}>{children}</Button>
);
