import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '@qlean/york-core'
import styled from 'styled-components'
import * as R from 'ramda'

import {
  g,
  sizes,
  media,
  borderRadiuses,
  shadows,
  transitions,
  normalizeResponsivePreset,
  getResponsivePropTypes,
  hexToRgba,
} from 'styles'

import Text from '../Text'

const presets = {
  whiteBackdropRank1: {
    color: 'white',
    backgroundColor: 'green',
    hoverProps: {
      backgroundColor: 'jungle',
    },
    disabledProps: {
      color: 'grey',
      backgroundColor: 'whisper',
    },
  },
  whiteBackdropRank2: {
    color: 'green',
    backgroundColor: 'white',
    borderColor: 'green',
    hoverProps: {
      opacity: 0.5,
    },
    disabledProps: {
      color: 'grey',
      borderColor: 'silver',
    },
  },
  whiteBackdropRank3: {
    color: 'black',
    backgroundColor: 'white',
    borderColor: 'silver',
    hoverProps: {
      borderColor: 'grey',
    },
    disabledProps: {
      color: 'grey',
      borderColor: 'silver',
    },
  },
  darkBackdropRank1: {
    color: 'white',
    backgroundColor: 'black',
    hoverProps: {
      opacity: 0.7,
    },
    disabledProps: {
      opacity: 0.2,
      contentOpacity: 0.5,
    },
  },
  darkBackdropRank2: {
    color: 'white',
    borderColor: 'white',
    opacity: 0.5,
    hoverProps: {
      opacity: 1,
    },
    disabledProps: {
      opacity: 0.2,
      contentOpacity: 0.5,
    },
  },
  lightBackdropRank2: {
    color: 'coal',
    borderColor: 'coal',
    opacity: 0.2,
    hoverProps: {
      opacity: 0.4,
    },
    disabledProps: {
      opacity: 0.1,
      contentOpacity: 0.5,
    },
  },
  blank: {
    backgroundColor: 'transparent',
    disabledProps: {
      color: 'black',
    },
  },
}

const presetsByBackdropColorAndRank = {
  white0: presets.blank,
  white1: presets.whiteBackdropRank1,
  white2: presets.whiteBackdropRank2,
  white3: presets.whiteBackdropRank3,
  dark1: presets.darkBackdropRank1,
  dark2: presets.darkBackdropRank2,
  light1: presets.darkBackdropRank1,
  light2: presets.lightBackdropRank2,
}

const getHeight = size => {
  switch (size) {
    case 's':
      return `${g(8)}px`
    case 'm':
      return `${g(10)}px`
    default:
      return ''
  }
}

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const normalizeColor = (color, opacity) => {
  const hexColor = colors[color]
  if (!hexColor) return 'transparent'
  if (R.isNil(opacity)) return hexColor
  const { red, green, blue } = hexToRgba(hexColor)
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`
}

const getBaseCss = ({
  color,
  backgroundColor,
  borderColor,
  opacity,
  contentOpacity,
}) => {
  const normalizedBackgroundColor = normalizeColor(backgroundColor, opacity)
  const normalizedBorderColor = normalizeColor(borderColor, opacity)
  return `
    color: ${colors[color]};
    background-color: ${normalizedBackgroundColor};
    border: 1px solid ${normalizedBorderColor || normalizedBackgroundColor};
    &>${StyledContent} {
      opacity: ${R.isNil(contentOpacity) ? 1 : contentOpacity};
    }
  `
}

const getMediaCss = ({ hoverProps, disabledProps, isDisabled, ...rest }) => `
  ${getBaseCss(isDisabled ? { ...rest, ...disabledProps } : rest)}
  &:hover, &:focus {
    ${isDisabled ? '' : getBaseCss({ ...rest, ...hoverProps })}
  }
  &:active {
    ${isDisabled ? '' : getBaseCss(rest)}
  }
`

const getCss = props => {
  const {
    normalizedProps: { mobileProps, baseProps, wideProps },
    shadow,
    size,
    borderRadius,
    isDisabled,
  } = props
  return `
    appearance: none !important;
    outline: none;
    user-select: none;
    box-sizing: border-box;
    padding: 0 ${sizes[2]}px;
    transition: ${transitions.short};
    height: ${getHeight(size)};
    width: 100%;
    cursor: ${isDisabled ? 'default' : 'pointer'};
    border-radius: ${borderRadiuses[borderRadius]};
    box-shadow: ${shadows[shadow]};
    ${media.mobile(`
      height: ${getHeight('m')};
      ${getMediaCss({ ...props, ...mobileProps })}
    `)}
    ${media.base(getMediaCss({ ...props, ...baseProps }))}
    ${media.wide(getMediaCss({ ...props, ...wideProps }))}
  `
}

const StyledButton = styled.button`
  ${getCss}
`

const StyledText = styled(Text)`
  color: inherit;
`

const getPreset = ({ backdropColor, rank }) => `${backdropColor}${rank}`

/**
 * Кнопка, используется для всякого кликабельного. Два параметра, отвечающих за ее внеший вид — `rank` и `backdropColor`.
 * Первый отражает важность кнопки на странице, а второй отвечает за текст подложки.
 */
function Button({ isDisabled, isSubmitting, onClick, children, ...rest }) {
  const normalizedProps = normalizeResponsivePreset(
    getPreset,
    presetsByBackdropColorAndRank,
    rest,
  )
  const content =
    typeof children === 'string' ? (
      <StyledText>{isSubmitting ? 'Подождите...' : children}</StyledText>
    ) : (
      children
    )
  return (
    <StyledButton
      {...rest}
      normalizedProps={normalizedProps}
      disabled={isDisabled || isSubmitting}
      isDisabled={isDisabled || isSubmitting}
      onClick={!isDisabled && !isSubmitting ? onClick : null}
    >
      <StyledContent>{content}</StyledContent>
    </StyledButton>
  )
}

const defaultProps = {
  /* eslint-disable react/default-props-match-prop-types */
  rank: 1,
  backdropColor: 'white',
  /* eslint-enable react/default-props-match-prop-types */
  size: 'm',
  borderRadius: 'medium',
  shadow: 'none',
  isSubmitting: false,
}

const propTypes = {
  /** Важность кнопки на странице. Нулевой ранг сбрасывает стили и используется для расширения кнопки */
  rank: PropTypes.oneOf([0, 1, 2, 3]),
  /** Цвет фона на котором будет располагаться кнопка */
  backdropColor: PropTypes.oneOf(['white', 'dark', 'light']),
}

Button.defaultProps = defaultProps

Button.propTypes = {
  ...propTypes,
  ...getResponsivePropTypes(propTypes),
  /** Размер кнопки, влияет только на высоту */
  size: PropTypes.oneOf(['s', 'm']),
  /** Радиус скругления */
  borderRadius: PropTypes.oneOf(Object.keys(borderRadiuses)),
  /** Тень */
  shadow: PropTypes.oneOf(Object.keys(shadows)),
  /** Имя кнопки, используется в автотестах */
  name: PropTypes.string.isRequired,
  /** Содержимое кнопки. Если это строка, она будет обернута в `<Text>` с параметрами по умолчанию. */
  children: PropTypes.node.isRequired,
  /** Активна ли кнопка */
  isDisabled: PropTypes.bool.isRequired,
  /** Идет ли отправка данных. Показывает на кнопке лоадер и дизейблит ее. */
  isSubmitting: PropTypes.bool,
  /** Коллбек, вызываемый по клику. Автоматически отключается, если `isDisabled` или `isSubmitting` заданы как `true`. */
  onClick: PropTypes.func.isRequired,
}

Button.presets = presets

export default Button
