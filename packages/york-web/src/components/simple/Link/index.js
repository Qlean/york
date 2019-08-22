import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, rgbaColors } from '@qlean/york-core'
import * as R from 'ramda'

import { media, transitions, normalizeResponsivePreset } from 'york-web/utils'

import { Text } from 'york-web/components/primitive'

const presets = {
  whiteBackdropRank1: {
    color: 'green',
    hoverProps: {
      borderBottomColor: 'green',
      color: 'green',
    },
  },
  whiteBackdropRank2: {
    borderBottomColor: 'silver',
    color: 'coal',
    hoverProps: {
      borderBottomColor: 'green',
      color: 'green',
    },
  },
  darkBackdropRank1: {
    color: 'white',
    hoverProps: {
      borderBottomColor: 'white',
      color: 'white',
    },
  },
  darkBackdropRank2: {
    color: 'grey',
    hoverProps: {
      borderBottomColor: 'grey',
      color: 'grey',
    },
  },
  blank: {
    color: 'coal',
    hoverProps: {
      borderBottomColor: 'coal',
      color: 'coal',
    },
  },
}

const normalizeColor = (color, opacity) => {
  const rgbaColor = rgbaColors[color]
  if (!rgbaColor || !rgbaColor.a) return colors.transparent
  if (R.isNil(opacity)) return colors[color]
  const { r, g, b } = rgbaColor
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

const presetsByBackdropColorAndRank = {
  white0: presets.blank,
  white1: presets.whiteBackdropRank1,
  white2: presets.whiteBackdropRank2,
  dark1: presets.darkBackdropRank1,
  dark2: presets.darkBackdropRank2,
}

const getBaseCss = ({ color, borderBottomColor, opacity }) => {
  const normalizedColor = normalizeColor(color, opacity)
  const normalizedBorderBottomColor = normalizeColor(borderBottomColor, opacity)
  return `
    color: ${normalizedColor};
    border-bottom: ${
      normalizedBorderBottomColor
        ? `1px solid ${normalizedBorderBottomColor}`
        : 'none'
    };
  `
}

const getMediaCss = ({ hoverProps, ...rest }) => `
${getBaseCss(rest)}
  &:hover, &:focus {
    ${getBaseCss({ ...rest, ...hoverProps })}
  }
`

const getCss = props => {
  const {
    normalizedProps: { mobileProps, baseProps, wideProps },
  } = props
  return `
    outline: none !important;
    box-sizing: border-box;
    text-decoration: none;
    cursor: pointer;
    padding: 0;
    transition: ${transitions.short};
    ${media.mobile(getMediaCss(mobileProps))}
    ${media.base(getMediaCss(baseProps))}
    ${media.wide(getMediaCss(wideProps))}
    &:hover, &:focus, &:active {
      text-decoration: none;
      ${media.mobile(getMediaCss(mobileProps.hoverProps))}
      ${media.base(getMediaCss(baseProps.hoverProps))}
      ${media.wide(getMediaCss(wideProps.hoverProps))}
    }
  `
}

const getPreset = (mediaProps, props) => {
  const rank = !R.isNil(mediaProps.rank) ? mediaProps.rank : props.rank
  const backdropColor = mediaProps.backdropColor
    ? mediaProps.backdropColor
    : props.backdropColor
  return `${backdropColor}${rank}`
}

const StyledLink = styled.a`
  ${getCss}
`

/**
 * Компонент для оформления ссылки.
 */
function Link({ href, children, ...rest }) {
  const normalizedProps = normalizeResponsivePreset(
    getPreset,
    presetsByBackdropColorAndRank,
    rest,
  )
  return (
    <StyledLink href={href} normalizedProps={normalizedProps} {...rest}>
      <Text color="inherit">{children}</Text>
    </StyledLink>
  )
}

Link.defaultProps = {
  rank: 1,
  backdropColor: 'white',
}

Link.propTypes = {
  /** Важность ссылки на странице. Нулевой ранг сбрасывает стили и используется для расширения ссылки */
  rank: PropTypes.oneOf([0, 1, 2, 3]),
  /** Цвет фона на котором будет располагаться ссылки */
  backdropColor: PropTypes.oneOf(['white', 'dark']),
  /** Путь ссылки */
  href: PropTypes.string.isRequired,
  /** Содержимое ссылки. Если это строка, она будет обернута в `<Text>`. */
  children: PropTypes.node.isRequired,
}

Link.presets = presets

export default Link
