import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { media, normalizeResponsiveProps, getResponsivePropTypes } from 'styles'

import View from '../View'
import GridContainer from '../GridContainer'

const { gutter, maxWidths } = GridContainer

const getStaticColumn = ({ columns }, containerWidth) =>
  columns
    ? `width: ${columns * ((containerWidth + gutter) / 12)}px;`
    : 'display: none;'

const getFlexibleColumn = ({ columns }) =>
  columns ? `width: ${(columns * 100) / 12}%;` : 'display: none;'

const getCss = props => {
  const { mobileProps, baseProps, wideProps } = normalizeResponsiveProps(
    ['columns'],
    props,
  )
  if (process.env.NODE_ENV !== 'production' && !props.isChildOfGridContainer) {
    // eslint-disable-next-line no-console
    console.warn('GridColumn should be direct child of GridContainer')
  }
  return `
    padding-left: ${gutter}px;
    box-sizing: border-box;
    flex-shrink: 0;
    ${media.mobile(getFlexibleColumn(mobileProps))}
    ${media.base(getStaticColumn(baseProps, maxWidths.base))}
    ${media.wide(getStaticColumn(wideProps, maxWidths.wide))}
  `
}

const StyledGridColumn = styled(View)`
  ${getCss}
`

/**
 * Колонка для 12-колоночной сетки. Не может быть ребенком ничего кроме `<GridContainer>`. Основана на `<View>` и поддерживает все его пропсы.
 */
const GridColumn = props => (
  <StyledGridColumn flexDirection="column" {...props} />
)

const defaultProps = { columns: 12 }

const propTypes = {
  /** Ширина колонки в двенадцатых долях от ширины контейнера на мобилах и от максимальной ширины контейнера на декстопе */
  columns: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
}

GridColumn.defaultProps = defaultProps

GridColumn.propTypes = {
  ...propTypes,
  ...getResponsivePropTypes(propTypes),
}

export default GridColumn
