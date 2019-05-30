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
  primary: {
    color: 'white',
    backgroundColor: 'green',
    hoverProps: {
      backgroundColor: 'jungle',
    },
    activeProps: {
      backgroundColor: 'green',
    },
    disabledProps: {
      color: 'grey',
      backgroundColor: 'whisper',
    },
  },
  secondary: {
    color: 'green',
    backgroundColor: 'white',
    borderColor: 'green',
    hoverProps: {
      color: 'white',
      backgroundColor: 'jungle',
    },
    activeProps: {
      color: 'white',
      backgroundColor: 'green',
    },
    disabledProps: {
      color: 'grey',
      borderColor: 'silver',
    },
  },
  tertiary: {
    color: 'black',
    backgroundColor: 'white',
    borderColor: 'silver',
    hoverProps: {
      backgroundColor: 'smoke',
    },
    activeProps: {
      backgroundColor: 'white',
    },
    disabledProps: {
      color: 'grey',
      borderColor: 'silver',
    },
  },
  blank: {
    backgroundColor: 'transparent',
    disabledProps: {
      color: 'black',
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

const getBaseCss = ({ color, backgroundColor, borderColor }) => `
  color: ${colors[color]};
  background-color: ${colors[backgroundColor] || 'transparent'};
  border: 1px solid ${colors[borderColor || backgroundColor]};
`

const getMediaCss = ({
  hoverProps,
  activeProps,
  disabledProps,
  isDisabled,
  ...rest
}) => `
  ${getBaseCss(isDisabled ? { ...rest, ...disabledProps } : rest)}
  &:hover {
    ${isDisabled ? '' : getBaseCss({ ...rest, ...hoverProps })}
  }
  &:active {
    ${isDisabled ? '' : getBaseCss({ ...rest, ...activeProps })}
  }
`

const getCss = props => {
  const { shadow, size, borderRadius, isDisabled } = props
  const { mobileProps, baseProps, wideProps } = unwrapResponsivePreset(
    'preset',
    presets,
    props,
  )
  return `
    appearance: none !important;
    box-sizing: border-box;
    padding: 0 ${sizes[2]}px;
    transition: ${transitions.short};
    height: ${getHeight(size)};
    width: 100%;
    cursor: ${isDisabled ? 'default' : 'pointer'};
    border-radius: ${borderRadiuses[borderRadius]};
    box-shadow: ${shadows[shadow]};
    :focus {
      outline: 2px solid ${colors.silver};
    }
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
  size: PropTypes.oneOf(['s', 'm']),
  /** Радиус скругления */
  borderRadius: PropTypes.oneOf(Object.keys(borderRadiuses)),
  /** Тень */
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
