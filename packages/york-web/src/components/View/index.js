import PropTypes from 'prop-types'
import styled from 'styled-components'

import { media, normalizeResponsiveProps, getResponsivePropTypes } from 'styles'

const getBaseCss = ({
  flexDirection,
  alignItems,
  justifyContent,
  flexWrap,
}) => `
  ${flexDirection ? `flex-direction: ${flexDirection};` : ''}
  ${alignItems ? `align-items: ${alignItems};` : ''}
  ${justifyContent ? `justify-content: ${justifyContent};` : ''}
  ${flexWrap ? `flex-wrap: ${flexWrap};` : ''}
`

const getCss = props => {
  const { mobileProps, baseProps, wideProps } = normalizeResponsiveProps(
    ['flexDirection', 'alignItems', 'justifyContent', 'flexWrap'],
    props,
  )
  return `
    display: flex;
    ${media.mobile(getBaseCss(mobileProps))}
    ${media.base(getBaseCss(baseProps))}
    ${media.wide(getBaseCss(wideProps))}
  `
}

/**
 * Универсальный контейнер, аналог `<View>` из React Native.
 */
const View = styled.div`
  ${getCss}
`

const propTypes = {
  /** Аналог `flex-direction` */
  flexDirection: PropTypes.oneOf([
    'column',
    'column-reverse',
    'row',
    'row-reverse',
  ]),
  /** Аналог `align-items` */
  alignItems: PropTypes.oneOf(['stretch', 'center', 'flex-start', 'flex-end']),
  /** Аналог `justify-content` */
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'space-between',
  ]),
  /** Аналог `flex-wrap` */
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
}

View.propTypes = {
  ...propTypes,
  ...getResponsivePropTypes(propTypes),
}

/** @component */
export default View
