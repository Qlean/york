import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  GRID_GUTTER,
  MOBILE_PADDING,
  legacyMedia,
  mediaMaxWidths,
} from 'utils/styles'

import FlexBase from './FlexBase'

const StyledFlexContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  ${legacyMedia.mobile`
    max-width: ${mediaMaxWidths.mobile}px;
    ${({ withoutMobilePadding }) =>
      !withoutMobilePadding &&
      `
      padding: 0 ${MOBILE_PADDING}px;
    `}
  `}
  ${legacyMedia.base`
    max-width: ${mediaMaxWidths.base}px;
  `}
  ${legacyMedia.wide`
    max-width: ${mediaMaxWidths.wide}px;
  `}
`

const StyledContent = styled.div`
  margin: 0 -${GRID_GUTTER / 2}px;
  box-sizing: border-box;
  ${({ withFullHeightContent }) => withFullHeightContent && 'height: 100%'};
`

export default function FlexContainer({
  withoutMobilePadding,
  withFullHeightContent,
  children,
  ...props
}) {
  return (
    <StyledFlexContainer withoutMobilePadding={withoutMobilePadding}>
      <StyledContent withFullHeightContent={withFullHeightContent}>
        <FlexBase {...props}>{children}</FlexBase>
      </StyledContent>
    </StyledFlexContainer>
  )
}

FlexContainer.propTypes = {
  withoutMobilePadding: PropTypes.bool,
  withFullHeightContent: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

FlexContainer.defaultProps = {
  withoutMobilePadding: false,
  withFullHeightContent: false,
}
