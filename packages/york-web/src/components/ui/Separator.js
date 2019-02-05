import PropTypes from 'prop-types';
import styled from 'styled-components';
import R from 'ramda';

import { g, withResponsiveProps, legacyMedia } from 'utils/styles';

const sizes = {
  0: 0,
  1: g(1),
  2: g(2),
  3: g(3),
  4: g(4),
  6: g(6),
  8: g(8),
  12: g(12),
  16: g(16),
  20: g(20),
  24: g(24),
};

const Separator = styled.div`
  flex-shrink: 0;
  ${({ heightMobile: height, widthMobile: width }) => legacyMedia.mobile`
    height: ${sizes[height]}px;
    width: ${sizes[width]}px;
  `}
  ${({ heightBase: height, widthBase: width }) => legacyMedia.base`
    height: ${sizes[height]}px;
    width: ${sizes[width]}px;
  `}
  ${({ heightWide: height, widthWide: width }) => legacyMedia.wide`
    height: ${sizes[height]}px;
    width: ${sizes[width]}px;
  `}
`;

const sizesPropTypes = PropTypes.oneOf(R.map(Number, R.keys(sizes)));

export default withResponsiveProps([
  { name: 'height', propType: sizesPropTypes, defaultValue: 0 },
  { name: 'width', propType: sizesPropTypes, defaultValue: 0 },
])(Separator);
