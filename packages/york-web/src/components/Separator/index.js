import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as R from 'ramda'

import {
  g,
  unwrapResponsiveProps,
  media,
  getResponsivePropTypes,
} from '../../utils/styles'

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
}

const sizesPropTypes = PropTypes.oneOf(R.map(Number, R.keys(sizes)))

const defaultProps = {
  height: 0,
  width: 0,
}

export const getBaseCss = ({ height, width }) => `
  height: ${sizes[height]}px;
  width: ${sizes[width]}px;
`

export const getCss = initialProps => {
  const props = { ...defaultProps, ...initialProps }
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

const Separator = styled.div`
  ${getCss}
`

Separator.propTypes = {
  height: sizesPropTypes,
  width: sizesPropTypes,
  ...getResponsivePropTypes({
    height: sizesPropTypes,
    width: sizesPropTypes,
  }),
}

export default Separator
