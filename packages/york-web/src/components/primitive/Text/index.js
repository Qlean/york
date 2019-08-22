import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as R from 'ramda'
import { colors } from '@qlean/york-core'

import {
  fontFamily,
  media,
  normalizeResponsivePreset,
  normalizeResponsiveProps,
  mergeStyleProps,
  getResponsivePropTypes,
} from 'york-web/utils'

const presets = {
  header1: {
    fontSize: 50,
    lineHeight: 55,
    fontWeight: 700,
  },
  header2: {
    fontSize: 40,
    lineHeight: 45,
    fontWeight: 700,
  },
  header3: {
    fontSize: 30,
    lineHeight: 35,
    fontWeight: 700,
  },
  header4: {
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 700,
  },
  header5: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 700,
  },
  textStrong: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: 700,
  },
  textLarge: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 500,
  },
  text: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: 500,
  },
  link: {
    fontSize: 15,
    lineHeight: 25,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  caption: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 500,
  },
  captionSmall: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: 500,
  },
}

const getBaseCss = ({
  color,
  fontWeight,
  fontSize,
  lineHeight,
  textAlign,
  fontStyle,
  letterSpacing,
  textTransform,
  textDecoration,
}) => `
  color: ${color === 'inherit' ? 'inherit' : colors[color]};
  font-weight: ${fontWeight};
  font-size: ${fontSize}px;
  line-height: ${lineHeight}px;
  ${textAlign ? `text-align: ${textAlign}` : ''};
  ${fontStyle ? `font-style: ${fontStyle}` : ''};
  ${letterSpacing ? `letter-spacing: ${letterSpacing}px` : ''};
  ${textTransform ? `text-transform: ${textTransform}` : ''};
  ${textDecoration ? `text-decoration: ${textDecoration}` : ''};
`

const defaultProps = {
  preset: 'text',
  color: 'coal',
}

const getCss = initialProps => {
  const props = { ...defaultProps, ...initialProps }
  const { mobileProps, baseProps, wideProps } = mergeStyleProps([
    normalizeResponsivePreset(({ preset }) => preset, presets, props),
    normalizeResponsiveProps(['color'], props),
  ])
  return `
    font-family: ${fontFamily};
    margin: 0;
    ${media.mobile(getBaseCss(mobileProps))}
    ${media.base(getBaseCss(baseProps))}
    ${media.wide(getBaseCss(wideProps))}
  `
}

const StyledText = styled.span`
  ${getCss}
`

/**
 * Компонент для оформления текста, использует шрифт Museo Sans.
 * Для указания html-тэга можно использовать проп `as`
 * https://www.styled-components.com/docs/api#as-polymorphic-prop
 */
export default function Text(props) {
  return <StyledText {...props} />
}

const propTypes = {
  /** Пресет, устанавливает размер, межстрочный интервал, вес и другие стилевые параметры текста */
  preset: PropTypes.oneOf(Object.keys(presets)),
  /** Цвет текста */
  color: PropTypes.oneOf([...Object.keys(colors), 'inherit']),
}

Text.propTypes = {
  ...propTypes,
  ...getResponsivePropTypes(propTypes),
}

Text.defaultProps = defaultProps
