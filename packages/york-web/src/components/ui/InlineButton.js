import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '@qlean/york-core';
import styled from 'styled-components';

import { transitions } from '../../utils/styles';
import { textPresets } from '../ui';

const StyledInlineButton = styled.button`
  font-family: "Museo Sans";
  transition: ${transitions.short};
  appearance: none !important;
  outline: none !important;
  display: inline;
  border: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  color: ${({ color }) => colors[color]};
  cursor: pointer;
  &:hover {
    color: #23B059;
  }
  ${({ isDisabled, textPreset }) => `
    font-size: ${textPresets[textPreset].fontSize}px;
    font-weight: ${textPresets[textPreset].fontWeight};
    line-height: ${textPresets[textPreset].lineHeight}px;
    ${isDisabled && `
      color: ${colors.silver};
      cursor: default;
    `};
  `}
`;

function InlineButton(props) {
  return (
    <StyledInlineButton
      disabled={props.isDisabled}
      {...props}
    />
  );
}

InlineButton.propTypes = {
  textPreset: PropTypes.oneOf(Object.keys(textPresets)),
  color: PropTypes.oneOf(Object.keys(colors)),
  isDisabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

InlineButton.defaultProps = {
  textPreset: 'text2',
  color: 'green',
};

export default InlineButton;
