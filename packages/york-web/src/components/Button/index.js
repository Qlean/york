import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '@qlean/york-core'
import styled from 'styled-components'

import {
  g,
  sizes,
  media,
  borderRadiuses,
  shadows,
  transitions,
  unwrapResponsivePreset,
  getResponsivePropTypes,
} from 'styles'

import Text from '../Text'

const presets = {
  blank: {},
  transparent: {
    color: 'green',
    borderColor: 'transparent',
    hoverProps: {
      css: `
        color: #5FC083;
      `,
    },
    disabledProps: {
      css: `
        color: #A2DDB8;
      `,
    },
  },
  primary: {
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
  transparentLinear: {
    borderColor: 'silver',
    borderRadius: 'small',
    backgroundColor: 'transparent',
    color: 'coal',
    hoverProps: {
      css: `
        border-color: ${colors.grey};
        color: ${colors.coal};
      `,
    },
    disabledProps: {
      color: 'grey',
      css: 'border-color: #efefef;',
    },
  },
  black: {
    borderRadius: 'small',
    backgroundColor: 'black',
    color: 'white',
    hoverProps: {
      css: `
        background-color: ${colors.coal};
        color: ${colors.white};
      `,
    },
    disabledProps: {
      backgroundColor: 'grey',
    },
  },
  green: {
    borderRadius: 'small',
    backgroundColor: 'green',
    color: 'white',
    hoverProps: {
      css: `
        background-color: #23B059;
        border-color: #23B059;
      `,
    },
    disabledProps: {
      css: `
        background-color: #8AD4A6;
        border-color: #8AD4A6;
      `,
    },
  },
  grey: {
    borderColor: 'grey',
    borderRadius: 'small',
    backgroundColor: 'grey',
    color: 'white',
    hoverProps: {
      css: `
        filter: brightness(110%);
        color: ${colors.white};
      `,
    },
    disabledProps: {
      color: 'white',
      css: `border-color: ${colors.grey};`,
    },
  },
  grayLinear: {
    borderColor: 'silver',
    borderRadius: 'small',
    backgroundColor: 'white',
    color: 'coal',
    hoverProps: {
      css: `
        border-color: ${colors.grey};
        color: ${colors.coal};
      `,
    },
    disabledProps: {
      color: 'grey',
      css: 'border-color: #efefef;',
    },
  },
  greenLinear: {
    borderColor: 'green',
    borderRadius: 'small',
    color: 'green',
    hoverProps: {
      css: `
        border-color: #5FC083;
        color: #5FC083;
      `,
    },
    disabledProps: {
      css: `
        border-color: #A2DDB8;
        color: #A2DDB8;
      `,
    },
  },
  greenRound: {
    borderRadius: 'round',
    backgroundColor: 'green',
    color: 'white',
    hoverProps: {
      css: `
        transform: translateY(-3px);
        box-shadow: 0 10px 10px 0 rgba(0,59,23,0.10);
        color: ${colors.white};
      `,
    },
  },
  greenRoundLinear: {
    borderColor: 'green',
    borderRadius: 'round',
    color: 'green',
    hoverProps: {
      css: `
        transform: translateY(-3px);
        box-shadow: 0 10px 10px 0 rgba(0,59,23,0.10);
        color: ${colors.green};
      `,
    },
    disabledProps: {
      css: `
        border-color: #A2DDB8;
        color: #A2DDB8;
      `,
    },
  },
  whiteRound: {
    borderRadius: 'round',
    backgroundColor: 'white',
    color: 'coal',
    hoverProps: {
      css: `
        transform: translateY(-3px);
        box-shadow: 0 10px 10px 0 rgba(0,59,23,0.10);
        color: ${colors.coal};
      `,
    },
  },
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

const getBaseCss = ({ color, backgroundColor, borderColor, css }) => `
  color: ${colors[color]};
  background-color: ${colors[backgroundColor] || 'transparent'};
  ${
    borderColor || backgroundColor
      ? `border: 1px solid ${colors[borderColor || backgroundColor]};`
      : 'border: 1px solid;'
  }
  ${css || ''};
`

const getMediaCss = ({ hoverProps, disabledProps, isDisabled, ...rest }) => `
  ${getBaseCss(isDisabled ? { ...rest, ...disabledProps } : rest)}
  &:hover {
    ${isDisabled ? '' : getBaseCss({ ...rest, ...hoverProps })}
  }
`

const getCss = props => {
  const { size, borderRadius, isDisabled } = props
  const { mobileProps, baseProps, wideProps } = unwrapResponsivePreset(
    'preset',
    presets,
    props,
  )
  return `
    appearance: none !important;
    outline: none !important;
    box-sizing: border-box;
    padding: 0 ${sizes[2]}px;
    transition: ${transitions.short};
    height: ${getHeight(size)};
    width: 100%;
    cursor: ${isDisabled ? 'default' : 'pointer'};
    border-radius: ${borderRadiuses[borderRadius]};
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

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const StyledText = styled(Text)`
  color: inherit;
`

function Button({ isDisabled, isSubmitting, onClick, children, ...rest }) {
  return (
    <StyledButton
      {...rest}
      disabled={isDisabled || isSubmitting}
      isDisabled={isDisabled || isSubmitting}
      onClick={!isDisabled && !isSubmitting ? onClick : null}
    >
      <StyledContent>
        <StyledText>{isSubmitting ? 'Загрузка...' : children}</StyledText>
      </StyledContent>
    </StyledButton>
  )
}

const defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  preset: 'black',
  size: 'm',
  borderRadius: 'medium',
  shadow: 'none',
  isSubmitting: false,
}

const propTypes = {
  /** Пресет, определяет общий вид кнопки */
  preset: PropTypes.oneOf(Object.keys(presets)),
}

Button.defaultProps = defaultProps

Button.propTypes = {
  ...propTypes,
  ...getResponsivePropTypes(propTypes),
  /** Размер кнопки, влияет только на высоту */
  size: PropTypes.oneOf(['m', 'l']),
  borderRadius: PropTypes.oneOf(Object.keys(borderRadiuses)),
  shadow: PropTypes.oneOf(Object.keys(shadows)),
  /** Имя кнопки, используется в автотестах */
  name: PropTypes.string.isRequired,
  /** Текст на кнопке */
  children: PropTypes.string.isRequired,
  /** Активна ли кнопка */
  isDisabled: PropTypes.bool.isRequired,
  /** Идет ли отправка данных. Показывает на кнопке лоадер и дизейблит ее. */
  isSubmitting: PropTypes.bool,
  /** Коллбек, вызываемый по клику. Автоматически отключается, если `isDisabled` или `isSubmitting` заданы как `true`. */
  onClick: PropTypes.func.isRequired,
}

Button.presets = presets

export default Button
