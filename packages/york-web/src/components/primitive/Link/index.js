import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as R from 'ramda'
import { colors } from '@qlean/york-core'
import {
  AnalyticsContext,
  getAnalyticsName,
  eventActionTypes,
} from '@qlean/york-analytics'

import { media, transitions, normalizeResponsivePreset } from 'york-web/utils'

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
    borderBottomColor: 'none',
    color: 'none',
    hoverProps: {
      borderBottomColor: 'none',
      color: 'none',
    },
  },
}

const presetsByBackdropColorAndRank = {
  white0: presets.blank,
  white1: presets.whiteBackdropRank1,
  white2: presets.whiteBackdropRank2,
  dark1: presets.darkBackdropRank1,
  dark2: presets.darkBackdropRank2,
}

const getBaseCss = ({ color, borderBottomColor = 'transparent' }) => `
  ${color === 'none' ? '' : `color: ${colors[color]};`}
  ${
    borderBottomColor === 'none'
      ? ''
      : `border-bottom: 1px solid ${colors[borderBottomColor]};`
  }
`

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
  // cursor: pointer сделан на случай использования в качестве ссылки чего-то кроме <a>
  return `
    cursor: pointer;
    outline: none;
    text-decoration: none;
    transition: ${transitions.short};
    ${media.mobile(getMediaCss(mobileProps))}
    ${media.base(getMediaCss(baseProps))}
    ${media.wide(getMediaCss(wideProps))}
    &:hover, &:focus, &:active {
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
 * Компонент для оформления ссылок.
 */
function Link({ href, children, name, onClick, ...rest }) {
  const normalizedProps = normalizeResponsivePreset(
    getPreset,
    presetsByBackdropColorAndRank,
    rest,
  )

  const analyticsContext = useContext(AnalyticsContext)
  const linkName = getAnalyticsName(name, analyticsContext)

  const handleClick = ({ ...args }) => {
    if (analyticsContext) {
      const { trackEvent, category, properties } = analyticsContext
      if (typeof category === 'string' && typeof trackEvent === 'function') {
        trackEvent({
          category,
          label: linkName,
          action: eventActionTypes.click,
          properties: {
            ...properties,
            href,
          },
        })
      }
    }
    if (onClick) onClick(args)
  }

  return (
    <StyledLink
      href={href}
      name={linkName}
      normalizedProps={normalizedProps}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </StyledLink>
  )
}

Link.defaultProps = {
  rank: 0,
  backdropColor: 'white',
  onClick: null,
}

Link.propTypes = {
  /** Важность ссылки на странице. Нулевой ранг сбрасывает стили и используется для расширения ссылки */
  rank: PropTypes.oneOf([0, 1, 2]),
  /** Цвет фона на котором будeт располагаться ссылка */
  backdropColor: PropTypes.oneOf(['white', 'dark']),
  /** Путь ссылки */
  href: PropTypes.string.isRequired,
  /** Имя ссылки. Используется для аналитики и тестов */
  name: PropTypes.string.isRequired,
  /** Функция, которая срабатывает при клике. */
  onClick: PropTypes.func,
  /** Содержимое ссылки */
  children: PropTypes.node.isRequired,
}

Link.presets = presets

export default Link
