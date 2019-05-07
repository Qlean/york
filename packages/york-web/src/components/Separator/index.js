import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as R from 'ramda'

import {
  sizes,
  media,
  unwrapResponsiveProps,
  getResponsivePropTypes,
} from 'styles'

const sizesPropTypes = PropTypes.oneOf(R.map(Number, R.keys(sizes)))

const defaultProps = {
  height: 0,
  width: 0,
}

const getBaseCss = ({ height, width }) => `
  height: ${sizes[height]}px;
  width: ${sizes[width]}px;
`

const getCss = props => {
  const { mobileProps, baseProps, wideProps } = unwrapResponsiveProps(
    ['height', 'width'],
    props,
  )

  return `
    flex-shrink: 0;
    ${media.mobile(getBaseCss(mobileProps))}
    ${media.base(getBaseCss(baseProps))}
    ${media.wide(getBaseCss(wideProps))}
  `
}

/**
 * Используется для создания отступов между элементами. Ширина и высота разделителя может принимать только значения указанные в core/sizes.
 */
const Separator = styled.div`
  ${getCss}
`

const propTypes = {
  /** Высота разделителя в `UI_GRID_POINT` */
  height: sizesPropTypes,
  /** Ширина разделителя в `UI_GRID_POINT` */
  width: sizesPropTypes,
}

Separator.defaultProps = defaultProps

Separator.propTypes = {
  ...propTypes,
  ...getResponsivePropTypes(propTypes),
}

/** @component */
export default Separator
