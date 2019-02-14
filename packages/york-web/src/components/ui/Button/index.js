import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '@qlean/york-core';
import styled from 'styled-components';

import { textPresets } from '../index';

import {
  g,
  media,
  borderRadiuses,
  BUTTON_HOVER_STYLES,
  transitions,
  unwrapResponsivePreset,
  unwrapResponsiveProps,
  mergeStyleProps,
  getResponsivePropTypes,
} from '../../../utils/styles';

export const presets = {
  blank: {},
  black: {
    borderRadius: 'small',
    backgroundColor: 'black',
    color: 'white',
    hoverProps: {
      css: BUTTON_HOVER_STYLES.black,
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
  grayLinear: {
    borderColor: 'silver',
    borderRadius: 'small',
    backgroundColor: 'white',
    color: 'coal',
    hoverProps: {
      css: BUTTON_HOVER_STYLES.grayLinear,
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
      css: BUTTON_HOVER_STYLES.greenRound,
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
      css: BUTTON_HOVER_STYLES.whiteRound,
    },
  },
};

const getHeight = (size) => {
  switch (size) {
    case 's': return `${g(8)}px`;
    case 'm': return `${g(10)}px`;
    case 'l': return `${g(12)}px`;
    default: return '';
  }
};

const getBaseCss = ({
  color,
  backgroundColor,
  borderColor,
  borderRadius,
  width,
  fontSize,
  fontWeight,
  css,
}) => `
  color: ${colors[color]};
  background-color: ${colors[backgroundColor] || 'transparent'};
  ${borderRadius ? `border-radius: ${borderRadiuses[borderRadius]}` : ''};
  ${(borderColor || backgroundColor)
    ? `border: 1px solid ${colors[borderColor || backgroundColor]}`
    : 'border: 1px solid'};
  width: ${width};
  font-size: ${fontSize}px;
  font-weight: ${fontWeight};

  ${css || ''};
`;

const getCss = ({
  hoverProps,
  disabledProps,
  isDisabled,
  ...rest
}) => `
  ${getBaseCss(isDisabled ? { ...rest, ...disabledProps } : rest)}
  &:hover {
    ${isDisabled ? '' : getBaseCss({ ...rest, ...hoverProps })}
  }
`;

const StyledButton = styled.button`
  font-family: "Museo Sans";
  transition: ${transitions.short};
  padding: 0;
  appearance: none !important;
  outline: none !important;
  box-sizing: border-box;
  padding: 0 ${g(2)}px;
  line-height: ${g(4)}px;
  height: ${({ size }) => getHeight(size)};
  cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};
  ${({
    mobileProps,
    baseProps,
    wideProps,
    ...rest
  }) => `
    ${media.mobile(`
      height: ${g(10)}px;
      ${getCss({ ...mobileProps, ...rest })}
    `)}
    ${media.base(getCss({ ...baseProps, ...rest }))}
    ${media.wide(getCss({ ...wideProps, ...rest }))}
  `}
`;

const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

/**
 * Компонент кнопки.
 */

function Button({
  size,
  type,
  isDisabled,
  isFetching,
  onClick,
  className,
  children,
  name,
  ...rest
}) {
  return (
    <StyledButton
      {...mergeStyleProps([
        unwrapResponsivePreset('preset', presets, rest),
        unwrapResponsivePreset('textPreset', textPresets, rest),
        unwrapResponsiveProps([
          'color',
          'backgroundColor',
          'borderColor',
          'borderRadius',
          'width',
          'fontSize',
          'fontWeight',
          'css',
          'hoverProps',
          'disabledProps',
        ], rest),
      ])}
      size={size}
      type={type}
      disabled={isDisabled || isFetching}
      isDisabled={isDisabled || isFetching}
      className={className}
      onClick={!isDisabled && !isFetching ? onClick : null}
      name={name}
    >
      <StyledFlex>
        {isFetching ? 'Загрузка' : children}
      </StyledFlex>
    </StyledButton>
  );
}

Button.propTypes = {
  ...getResponsivePropTypes({
    /** Управление preset самой кнопки. */
    preset: PropTypes.oneOf(Object.keys(presets)),
    /** Управление preset шрифта кнопки. */
    textPreset: PropTypes.oneOf(Object.keys(textPresets)),
    /** Управление цветом шрифта кнопки. */
    color: PropTypes.oneOf(Object.keys(colors)),
    /** Управление цветом background кнопки. */
    backgroundColor: PropTypes.oneOf(Object.keys(colors)),
    /** Управление цветом border кнопки. */
    borderColor: PropTypes.oneOf(Object.keys(colors)),
    /** Управление скруглением кнопки. */
    borderRadius: PropTypes.oneOf(Object.keys(borderRadiuses)),
    /** Управление шириной кнопки. */
    width: PropTypes.string,
    /** Управление размером шрифта кнопки. */
    fontSize: PropTypes.number,
    /** Управление жирнотой шрифта кнопки. */
    fontWeight: PropTypes.oneOf([500, 700, 900]),
    /** Управление дополнительными стилями кнопки. */
    css: PropTypes.string,
    css: PropTypes.string,
  }),
  /** Размер кнопки */
  size: PropTypes.oneOf(['s', 'm', 'l']),
  /** Тип кнопки */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  /** Управление возможности взаимодействия с компонентом */
  isDisabled: PropTypes.bool.isRequired,
  /** Управление возможности взаимодействия с компонентом в состоянии загрузки */
  isFetching: PropTypes.bool,
  /** Дополнительный класс */
  className: PropTypes.string,
  /** Имя кнопки в DOM */
  name: PropTypes.string.isRequired,
  /** Обработчик клика по кнопке */
  onClick: PropTypes.func.isRequired,
  /** Дочерние элементы кнопки */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  /** Свойства при hover кнопки */
  hoverProps: PropTypes.obj,
  /** Свойства при disabled кнопки */
  disabledProps: PropTypes.obj
};

Button.defaultProps = {
  isFetching: false,
  preset: 'black',
  textPreset: 'text2',
  width: '100%',
  size: 'm',
  type: 'button',
  hoverProps: {},
  disabledProps: {},
};

export default Button;
