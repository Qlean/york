import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { transitions, g, shadows, media } from 'utils/styles';
import { messengersShape } from 'utils/propTypes';

import { FlexBase } from 'components/ui/flex';
import { Button, Separator } from 'components/ui';
import { presets } from 'components/ui/Button';

import ConnectionsToggler from './ConnectionsToggler';

const StyledFloatingControlsWrapper = styled(FlexBase)`
  z-index: 10;
  position: fixed;
  right: ${g(4)}px;
  bottom: ${g(4)}px;
  @media (max-width: 420px) {
    right: ${g(2)}px;
    left: ${g(2)}px;
  }
  ${media.mobile(`
    bottom: ${g(2)}px;
  `)}
`;

const StyledButtonWrapper = styled.div`
  width: ${g(48)}px;
  position: relative;
  bottom: ${({ isVisible }) => (isVisible ? '0' : `${-g(20)}px`)};
  transition: ${transitions.medium};
  @media (max-width: 420px) {
    width: 100%;
    bottom: ${({ isVisible }) => (isVisible ? '0' : `${-g(20)}px`)};
  }
`;

const StyledButton = styled(Button)`
  box-shadow: ${shadows.medium};
`;

const buttonHoverStyles = `
  ${presets.green.hoverProps.css};
  transform: none;
  box-shadow: none;
`;

export default function FloatingControls({
  isVisible,
  withConnections = true,
  location,
  onClick,
  messengers,
  buttonTitle,
  connectionsTitle,
  extraConnections,
  extraButtonCss,
  togglerColor,
  togglerColorHovered,
}) {
  return (
    <StyledFloatingControlsWrapper>
      <StyledButtonWrapper isVisible={isVisible}>
        <StyledButton
          name="promocodeTimerButton"
          preset={extraButtonCss ? 'blank' : 'greenRound'}
          isDisabled={false}
          onClick={onClick}
          hoverProps={{
            css: buttonHoverStyles,
          }}
          css={extraButtonCss}
        >
          {buttonTitle}
        </StyledButton>
      </StyledButtonWrapper>
      {withConnections && (
        <Fragment>
          <Separator width={2} />
          <ConnectionsToggler
            location={location}
            messengers={messengers}
            connectionsTitle={connectionsTitle}
            extraConnections={extraConnections}
            togglerColor={togglerColor}
            togglerColorHovered={togglerColorHovered}
          />
        </Fragment>
      )}
    </StyledFloatingControlsWrapper>
  );
}

FloatingControls.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  withConnections: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  messengers: PropTypes.arrayOf(PropTypes.shape(messengersShape).isRequired).isRequired,
  buttonTitle: PropTypes.string.isRequired,
  connectionsTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  extraConnections: PropTypes.arrayOf(PropTypes.func),
  extraButtonCss: PropTypes.string,
  togglerColor: PropTypes.string,
  togglerColorHovered: PropTypes.string,
};
