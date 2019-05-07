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

const getCss = initialProps => {
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

/** @component */
export default Separator
