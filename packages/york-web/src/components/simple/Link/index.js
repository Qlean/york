import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import {
  media,
  transitions,
  normalizeResponsivePreset,
  mergeStyleProps,
} from 'york-web/utils'

import { Text } from 'york-web/components/primitive'

export const presets = {
  green: {
    color: 'green',
    hoverProps: {
      borderBottomColor: 'green',
      color: 'green',
    },
  },
  black: {
    borderBottomColor: 'silver',
    color: 'coal',
    hoverProps: {
      borderBottomColor: 'green',
      color: 'green',
    },
  },
  white: {
    color: 'white',
    hoverProps: {
      borderBottomColor: 'white',
      color: 'white',
    },
  },
  grey: {
    color: 'grey',
    hoverProps: {
      borderBottomColor: 'grey',
      color: 'grey',
    },
  },
}

const getBaseCss = ({ borderBottomColor, color }) => `
  color: ${color ? colors[color] : 'inherit'};
  border-bottom: ${
    borderBottomColor ? `1px solid ${colors[borderBottomColor]}` : 'none'
  };
`

const defaultProps = {
  preset: 'coal',
  textProps: {
    preset: 'text',
  },
}

export const getCss = initialProps => {
  const props = { ...defaultProps, ...initialProps }
  const { mobileProps, baseProps, wideProps } = mergeStyleProps([
    normalizeResponsivePreset(({ preset }) => preset, presets, props),
  ])
  return `
    outline: none !important;
    box-sizing: border-box;
    text-decoration: none;
    cursor: pointer;
    padding: 0;
    transition: ${transitions.short};
    ${media.mobile(getBaseCss(mobileProps))}
    ${media.base(getBaseCss(baseProps))}
    ${media.wide(getBaseCss(wideProps))}

    &:hover, &:focus, &:active {
      text-decoration: none;
      ${media.mobile(getBaseCss(mobileProps.hoverProps))}
      ${media.base(getBaseCss(baseProps.hoverProps))}
      ${media.wide(getBaseCss(wideProps.hoverProps))}
    }
  `
}

const StyledLink = styled.a`
  ${getCss}
`

/**
 * Компонент для оформления ссылки.
 */
export default function Link({ href, children, ...rest }) {
  return (
    <StyledLink href={href} {...rest}>
      <Text {...rest.textProps} color="inherit">
        {children}
      </Text>
    </StyledLink>
  )
}

Link.defaultProps = {
  preset: 'green',
}

Link.propTypes = {
  /** Пресет, устанавливает цвет и состояние ссылки */
  preset: PropTypes.oneOf(Object.keys(presets)),
  /** Путь ссылки */
  href: PropTypes.string.isRequired,
  /** Содержимое ссылки. Если это строка, она будет обернута в `<Text>`. */
  children: PropTypes.node.isRequired,
}
