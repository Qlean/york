import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as R from 'ramda';

import { GRID_COLUMNS, GRID_GUTTER, media, withResponsiveProps } from '../../utils/styles';

import FlexBase from './FlexBase';

const columnWidth = 100 / GRID_COLUMNS;

const getBaseCss = columns => (
  columns
    ? `width: ${columns * columnWidth}%;`
    : 'display: none;'
);

const StyledFlexColumn = styled.div`
  padding: 0 ${GRID_GUTTER / 2}px;
  box-sizing: border-box;
  ${({ columnsMobile, columnsBase, columnsWide }) => `
    ${media.mobile(getBaseCss(columnsMobile))}
    ${media.base(getBaseCss(columnsBase))}
    ${media.wide(getBaseCss(columnsWide))}
  `}
`;

const FlexColumn = ({ children, ...props }) => (
  <StyledFlexColumn {...props}>
    <FlexBase
      flexDirection="column"
      {...props}
    >
      {children}
    </FlexBase>
  </StyledFlexColumn>
);

FlexColumn.propTypes = {
  children: PropTypes.node,
};

export default withResponsiveProps([
  { name: 'columns', propType: PropTypes.oneOf(R.range(0, 13)), defaultValue: 12 },
])(FlexColumn);
