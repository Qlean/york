import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { media, unwrapResponsiveProps, getResponsivePropTypes } from 'styles'

import View from '../View'
import GridContainer from '../GridContainer'

const columnWidth = 100 / 12

const getBaseCss = ({ columns }) =>
  columns ? `width: ${columns * columnWidth}%;` : 'display: none;'

const getCss = props => {
  const { mobileProps, baseProps, wideProps } = unwrapResponsiveProps(
    ['columns'],
    props,
  )
  return `
    padding-left: ${GridContainer.GUTTER}px;
    box-sizing: border-box;
    flex-shrink: 0;
    ${media.mobile(getBaseCss(mobileProps))}
    ${media.base(getBaseCss(baseProps))}
    ${media.wide(getBaseCss(wideProps))}
  `
}

const StyledGridColumn = styled(View)`
  ${getCss}
`

/**
 * Колонка для 12-колоночной сетки. Не может быть ребенком ничего кроме GridContainer. Основана на View и поддерживает все его пропсы.
 */
const GridColumn = props => (
  <StyledGridColumn flexDirection="column" {...props} />
)

const defaultProps = { columns: 12 }

const propTypes = {
  /** Ширина колонки в двенадцатых долях от максимальной ширины контейнера */
  columns: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
}

GridColumn.defaultProps = defaultProps

GridColumn.propTypes = {
  ...propTypes,
  ...getResponsivePropTypes(propTypes),
}

export default GridColumn
