import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'york-core';
import fonts from '../../styles/fonts';

const Text = styled.span`
  ${({ fontWeight }) => fonts[fontWeight]}
  font-size: ${({ fontSize }) => `${fontSize}px`};
  line-height: ${({ lineHeight }) => `${lineHeight}px`};
  color: ${({ color }) => colors[color] || color};
`;

Text.defaultProps = {
  fontWeight: 'normal',
  fontSize: 16,
  lineHeight: 25,
  color: 'coal',
};

Text.propTypes = {
  fontWeight: PropTypes.oneOf(['bold', 'normal', 'light']),
  fontSize: PropTypes.number,
  lineHeight: PropTypes.number,
  color: PropTypes.string,
};

export default Text;
