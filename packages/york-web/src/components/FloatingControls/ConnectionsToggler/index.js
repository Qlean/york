import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import throttle from 'lodash.throttle';
import { colors } from '@qlean/york-core';

import { g, shadows } from 'utils/styles';
import Icon from './messengers.svg';

// import Svg from 'components/Svg';
import { FlexBase } from 'components/flex';
import Connections from '../Connections';

/* eslint-disable import/no-dynamic-require */
const StyledIconWrapper = styled(FlexBase)`
  box-shadow: ${shadows.medium};
  background-color: ${colors.white};
  box-shadow: ${shadows.medium};
  flex-shrink: 0;
  border-radius: 50%;
  width: ${g(10)}px;
  height: ${g(10)}px;
  cursor: pointer;

  &:hover {
    & path {
      fill: #23B059;
    }
  }
`;

class ConnectionsToggler extends Component {
  state = {
    isConnectionsVisible: false,
  }

  onToggleVisibility = () => {
    this.setState({ isConnectionsVisible: !this.state.isConnectionsVisible });
  }

  onCloseVisibility = () => {
    this.setState({ isConnectionsVisible: false });
  }

  onThrottledToggleVisibility = throttle(this.onToggleVisibility, 500);

  render() {
    const { isConnectionsVisible } = this.state;
    return (
      <Fragment>
        <StyledIconWrapper
          justifyContent="center"
          alignItems="center"
          onClick={this.onThrottledToggleVisibility}
        >
          <Icon
            width={26}
            height={25}
          />
        </StyledIconWrapper>
        <Connections
          {...this.props}
          onClose={this.onCloseVisibility}
          isVisible={isConnectionsVisible}
        />
      </Fragment>
    );
  }
}

export default ConnectionsToggler;
