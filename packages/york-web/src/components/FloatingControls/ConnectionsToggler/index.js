import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import throttle from 'lodash.throttle';

import { colors } from '@qlean/york-core';
import { g, shadows } from 'utils/styles';

import { FlexBase } from 'components/flex';

import MessengersIcon from './messengers.svg';
import Connections from '../Connections';

const StyledIconWrapper = styled(FlexBase)`
  box-shadow: ${shadows.medium};
  background-color: ${colors.white};
  box-shadow: ${shadows.medium};
  flex-shrink: 0;
  border-radius: 50%;
  width: ${g(10)}px;
  height: ${g(10)}px;
  cursor: pointer;

  ${({ togglerColor = '#20A052', togglerColorHovered = '#23B059' }) => `
    & path {
      fill: ${togglerColor};
    }

    &:hover {
      & path {
        fill: ${togglerColorHovered};
      }
    }
  `}
`;

class ConnectionsToggler extends Component {
  static propTypes = {
    extraConnections: PropTypes.arrayOf(PropTypes.func),
    togglerColor: PropTypes.string,
    togglerColorHovered: PropTypes.string,
  }

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
    const { extraConnections, togglerColor, togglerColorHovered } = this.props;

    return (
      <Fragment>
        <StyledIconWrapper
          justifyContent="center"
          alignItems="center"
          name="connectionsToggler"
          onClick={this.onThrottledToggleVisibility}
          togglerColor={togglerColor}
          togglerColorHovered={togglerColorHovered}
        >
          <MessengersIcon width={26} height={25}/>
        </StyledIconWrapper>
        <Connections
          {...this.props}
          onClose={this.onCloseVisibility}
          isVisible={isConnectionsVisible}
          extraConnections={extraConnections}
        />
      </Fragment>
    );
  }
}

export default ConnectionsToggler;
