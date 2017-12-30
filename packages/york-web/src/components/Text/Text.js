import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'york-core';
import fonts from '../../styles/fonts';

const Text = styled.span`
  ${({ font }) => fonts[font]}
  font-size: ${({ fontSize }) => `${fontSize}px`};
  line-height: ${({ lineHeight }) => `${lineHeight}px`};
  color: ${({ color }) => colors[color] || color};
`;

Text.defaultProps = {
  font: 'normal',
  fontSize: 16,
  lineHeight: 25,
  color: 'nero',
};

Text.propTypes = {
  font: PropTypes.oneOf(['bold', 'normal', 'light']),
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
};

export default Text;
