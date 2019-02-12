import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { messengersShape } from 'utils/propTypes';
import { g, media } from 'utils/styles';

import FacebookIcon from './assets/facebook.svg';
import TelegramIcon from './assets/telegram.svg';
import ViberIcon from './assets/viber.svg';
import VkIcon from './assets/vk.svg';

const messengerUtils = {
  facebook: {
    color: '#0084FF',
    icon: <FacebookIcon/>,
  },
  vk: {
    color: '#5C81B3',
    icon: <VkIcon/>,
  },
  telegram: {
    color: '#2CA5E0',
    icon: <TelegramIcon/>,
  },
  viber: {
    color: '#7C529E',
    icon: <ViberIcon/>,
  },
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
  background-color: ${({ messengerCode }) => messengerUtils[messengerCode].color};

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

  & svg {
    background-repeat: no-repeat;
    background-position: center;
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
    background-color: ${({ messengerCode }) => `lighten(${messengerUtils[messengerCode].color}, 10%)`};
  }
`;

export default function Messengers({
  location,
  messengers,
  withMobileFullWidth,
}) {
  return (
    <StyledMessengers withMobileFullWidth={withMobileFullWidth}>
      {messengers.map(messenger => (
        <StyledMessenger
          name="messengerButton"
          data-url={location.pathname}
          data-name={`footer-${messenger.code}`}
          href={messenger.url}
          rel="noopener noreferrer"
          target="_blank"
          key={messenger.code}
          messengerCode={messenger.code}
        >
          {messengerUtils[messenger.code].icon}
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
  messengers: messengersShape.isRequired,
};
