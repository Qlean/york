import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { messengersShape } from 'utils/propTypes';
import { g, media } from 'utils/styles';

const messengersColors = {
  facebook: '#0084FF',
  vk: '#5C81B3',
  telegram: '#2CA5E0',
  viber: '#7C529E',
};
/* eslint-disable import/no-dynamic-require */
const StyledMessengers = styled.div`
  width: 100%;

  @media (max-width: 1160px) {
    text-align: left;
  }

  ${({ withMobileFullWidth }) => media.mobile(`
    min-width: ${withMobileFullWidth ? '100%' : `${g(52)}px`};
    width: ${withMobileFullWidth ? '100%' : '80%'};
    max-width: ${g(60)}px;
    margin: 0 auto;
    text-align: center;
  `)}

  &.full-width {
    width: 100%;
    max-width: 100%;
  }
`;

const StyledMessenger = styled.a`
  position: relative;
  display: inline-block;
  height: ${g(8)}px;
  width: 100%;
  vertical-align: middle;
  transition: background ease .3s;
  border-radius: ${g(20)}px;
  padding-left: ${g(3)}px;
  line-height: ${g(8)}px;
  letter-spacing: 0;
  text-align: center;
  font-size: 16px;
  color: white;
  background-color: ${({ code }) => messengersColors[code]};

  &:not(:last-child) {
    margin-bottom: ${g(2)}px;
  }

  ${media.mobile(`
    display: block;
    width: auto;
    height: ${g(10)}px;
    line-height: ${g(10)}px;
    margin: 0;
    padding: 0;

    &:not(:first-child) {
      margin-top: ${g(2)}px;
    }
  `)}

  @media (min-width: 1281px) {
    height: ${g(10)}px;
    line-height: ${g(10)}px;
  }

  &:hover, &:focus {
    text-decoration: none;
    color: white;
  }

  &:after {
    background-repeat: no-repeat;
    background-position: center;
    /* background-image: ${({ code }) => `url(${require(`./assets/${code}.svg`)})`}; */
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    content: "";
    left: ${g(2)}px;
    top: 50%;
    height: ${g(4)}px;
    width: ${g(5)}px;

    ${media.mobile(`
      height: ${g(6)}px;
      width: ${g(6)}px;
    `)}
  }

  &:hover {
    background-color: lighten($color, 10%);
    background-color: ${({ code }) => `lighten(${messengersColors[code]}, 10%)`};
  }
`;

export default function Messengers({
  location,
  messengers,
  withMobileFullWidth,
}) {
  return (
    <StyledMessengers withMobileFullWidth={withMobileFullWidth}>
      {(messengers || []).map(messenger => (
        <StyledMessenger
          name="messengerButton"
          data-url={location.pathname}
          data-name={`footer-${messenger.code}`}
          href={messenger.url}
          rel="noopener noreferrer"
          target="_blank"
          key={messenger.code}
          code={messenger.code}
        >
          {messenger.name}
        </StyledMessenger>
        ))}
    </StyledMessengers>
  );
}

Messengers.defaultProps = {
  withMobileFullWidth: false,
};

Messengers.propTypes = {
  withMobileFullWidth: PropTypes.bool,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  messengers: messengersShape,
};
