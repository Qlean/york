import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '@qlean/york-core';

const presets = {
  ph1: {
    fontSize: 70,
    lineHeight: 75,
    fontWeight: 700,
  },
  ph2: {
    fontSize: 60,
    lineHeight: 65,
    fontWeight: 700,
  },
  ph3: {
    fontSize: 50,
    lineHeight: 55,
    fontWeight: 700,
  },
  h1: {
    fontSize: 40,
    lineHeight: 45,
    fontWeight: 700,
  },
  h2: {
    fontSize: 30,
    lineHeight: 35,
    fontWeight: 700,
  },
  h3: {
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 700,
  },
  h4: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 700,
  },
  text1: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 500,
  },
  text2: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: 500,
  },
  link: {
    fontSize: 15,
    lineHeight: 25,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  caption1: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 500,
  },
  caption2: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: 500,
  },
};

const StyledText = styled.span`
  font-family: MuseoSansCyrl;
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  line-height: ${({ lineHeight }) => `${lineHeight}px`};
  color: ${({ color }) => colors[color] || color};
  ${({ fontStyle }) => fontStyle && `font-style: ${fontStyle};`}
  ${({ letterSpacing }) => letterSpacing !== undefined && `letter-spacing: ${letterSpacing}${letterSpacing !== 0 ? 'px' : ''};`}
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
`;

StyledText.defaultProps = {
  color: 'coal',
};

StyledText.propTypes = {
  fontWeight: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired,
  lineHeight: PropTypes.number.isRequired,
  color: PropTypes.string,
  fontStyle: PropTypes.oneOf(['normal', 'italic']),
  textTransform: PropTypes.oneOf(['uppercase', 'lowercase', 'capitalize', 'none']),
  letterSpacing: PropTypes.number,
};

const Text = ({ preset = 'text2', ...rest }) => <StyledText {...presets[preset]} {...rest}/>;

Text.propTypes = {
  preset: PropTypes.oneOf(Object.keys(presets)),
};

export default Text;
