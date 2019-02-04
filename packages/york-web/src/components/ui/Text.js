import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import R from 'ramda';
import { colors } from '@qlean/york-core';

import {
  media,
  unwrapResponsivePreset,
  unwrapResponsiveProps,
  mergeStyleProps,
  getResponsivePropTypes,
} from '../../utils/styles';

export const htmlTags = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'div',
  'span',
];

export const presets = {
  ph1: {
    fontSize: 70,
    lineHeight: 75,
    fontWeight: 700,
  },
  ph2: {
    fontSize: 60,
    lineHeight: 65,
    fontWeight: 700,
  },
  ph3: {
    fontSize: 50,
    lineHeight: 55,
    fontWeight: 700,
  },
  h1: {
    fontSize: 40,
    lineHeight: 45,
    fontWeight: 700,
  },
  h2: {
    fontSize: 30,
    lineHeight: 35,
    fontWeight: 700,
  },
  h3: {
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 700,
  },
  h4: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 700,
  },
  h5: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: 700,
  },
  text1: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 500,
  },
  text2: {
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
  caption1: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 500,
  },
  caption2: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: 500,
  },
};

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
`;

const defaultProps = {
  preset: 'text2',
  color: 'coal',
};

export const getCss = (initialProps) => {
  const props = { ...defaultProps, ...initialProps };
  const {
    mobileProps,
    baseProps,
    wideProps,
  } = mergeStyleProps([
    unwrapResponsivePreset('preset', presets, props),
    unwrapResponsiveProps([
      'color',
      'fontWeight',
      'fontSize',
      'textAlign',
      'lineHeight',
      'textDecoration',
      'textTransform',
    ], props),
  ]);
  return `
    font-family: "Museo Sans";
    margin: 0;
    ${media.mobile(getBaseCss(mobileProps))}
    ${media.base(getBaseCss(baseProps))}
    ${media.wide(getBaseCss(wideProps))}
  `;
};

const StyledText = styled.span`
  ${getCss}
`;

const components = R.pipe(
  R.map(tag => [tag, StyledText.withComponent(tag)]),
  R.fromPairs,
)(htmlTags);

export default function Text({ htmlTag, ...rest }) {
  const StyledTextComponent = components[htmlTag];
  return <StyledTextComponent {...rest}/>;
}

Text.propTypes = {
  htmlTag: PropTypes.oneOf(htmlTags),
  ...getResponsivePropTypes({
    preset: PropTypes.oneOf(Object.keys(presets)),
    color: PropTypes.oneOf([...Object.keys(colors), 'inherit']),
    fontWeight: PropTypes.oneOf([500, 700, 900]),
    textAlign: PropTypes.oneOf(['left', 'center', 'right']),
    lineHeight: PropTypes.number,
    fontSize: PropTypes.number,
  }),
};

Text.defaultProps = {
  htmlTag: 'span',
};
