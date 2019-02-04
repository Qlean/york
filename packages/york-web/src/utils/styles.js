import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import { colors } from '@qlean/york-core';
import R from 'ramda';

export const UI_GRID_POINT = 5;

export const g = (times = 1) => times * UI_GRID_POINT;

export const GRID_COLUMNS = 12;
export const GRID_GUTTER = g(4);
export const MOBILE_PADDING = g(6);

export const BUTTON_HOVER_STYLES = {
  black: `background-color: ${colors.coal}; color: ${colors.white};`,
  green: `filter: brightness(110%); color: ${colors.white};`,
  grayLinear: `border-color: ${colors.grey}; color: ${colors.coal};`,
  greenLinear: `filter: brightness(130%) saturate(60%); color: ${colors.green};`,
  greenRound: `transform: translateY(-3px); box-shadow: 0 10px 10px 0 rgba(0,59,23,0.10); color: ${colors.white};`,
  greenRoundLinear: `transform: translateY(-3px); box-shadow: 0 10px 10px 0 rgba(0,59,23,0.10); color: ${colors.green};`,
  whiteRound: `transform: translateY(-3px); box-shadow: 0 10px 10px 0 rgba(0,59,23,0.10); color: ${colors.coal};`,
};

export const shadows = {
  light: '0 1px 2px 0 rgba(0,0,0,0.10)',
  medium: '0 1px 2px rgba(0,0,0,0.25)',
  strong: '0 2px 6px 0 rgba(0,0,0,0.30)',
};

export const transitions = {
  short: 'all 0.1s ease-in-out',
  medium: 'all 0.25s ease-in-out',
  long: 'all 0.4s ease-in-out',
};

export const borderRadiuses = {
  small: '4px',
  medium: '6px',
  round: '100px',
  none: 'none',
};

export const mediaBreakpoints = {
  base: 991,
  wide: 1280,
};

export const mediaMaxWidths = {
  base: 940,
  wide: 1120,
  mobile: 360,
};

export const footerHeights = {
  base: g(61),
  mobile: g(102),
};

export const headerHeight = g(12);

export const scrollToConfig = {
  duration: 750,
  smooth: true,
};

export const media = {
  mobile: string => `
    @media (max-width: ${mediaBreakpoints.base}px) {
      ${string}
    }
  `,
  base: string => `
    @media (min-width: ${mediaBreakpoints.base + 1}px) and (max-width: ${mediaBreakpoints.wide - 1}px) {
      ${string}
    }
  `,
  wide: string => `
    @media (min-width: ${mediaBreakpoints.wide}px) {
      ${string}
    }
  `,
  desktop: string => `
    @media (min-width: ${mediaBreakpoints.base + 1}px) {
      ${string}
    }
  `,
};

export const legacyMedia = {
  mobile: (...args) => css`
    @media (max-width: ${mediaBreakpoints.base}px) {
      ${css(...args)}
    }
  `,
  base: (...args) => css`
    @media (min-width: ${mediaBreakpoints.base + 1}px) and (max-width: ${mediaBreakpoints.wide - 1}px) {
      ${css(...args)}
    }
  `,
  wide: (...args) => css`
    @media (min-width: ${mediaBreakpoints.wide}px) {
      ${css(...args)}
    }
  `,
};

const mediaTypes = ['Mobile', 'Base', 'Wide'];

export const withResponsiveProps = responsivePropsNames => (WrappedComponent) => {
  class HigherOrderComponent extends PureComponent {
    render() {
      const responsiveProps = R.pipe(
        R.map(({ name, defaultValue }) => R.map((mediaType) => {
          const propName = `${name}${mediaType}`;
          return [propName, this.props[propName] || this.props[name] || defaultValue];
        }, mediaTypes)),
        R.reduce(R.concat, []),
        R.fromPairs,
      )(responsivePropsNames);
      return <WrappedComponent {...responsiveProps} {...this.props}/>;
    }
  }
  HigherOrderComponent.displayName = `WithResponsiveProps(${WrappedComponent.name})`;
  HigherOrderComponent.propTypes = R.pipe(
    R.map(({ name, propType }) => R.pipe(
      R.map(mediaType => (
        [`${name}${mediaType}`, propType]
      )),
      R.append([name, propType]),
    )(mediaTypes)),
    R.reduce(R.concat, []),
    R.fromPairs,
  )(responsivePropsNames);
  return HigherOrderComponent;
};

export const getResponsiveProps = (propName, props) =>
  R.pick(R.map(mediaType => `${propName}${mediaType}`, mediaTypes), props);

const mediaTypePropNames = [
  'mobileProps',
  'baseProps',
  'wideProps',
];

export const unwrapResponsiveProps = (propsNames, props) => {
  let unwrappedProps = {};
  propsNames.forEach((propName) => {
    mediaTypePropNames.forEach((mediaType) => {
      const responsiveValue = R.path([mediaType, propName], props);
      const defaultValue = props[propName];
      const value = R.isNil(responsiveValue) ? defaultValue : responsiveValue;
      if (!R.isNil(value)) {
        unwrappedProps = R.assocPath(
          [mediaType, propName],
          R.isNil(responsiveValue) ? defaultValue : responsiveValue,
          unwrappedProps,
        );
      }
    });
  });
  return unwrappedProps;
};

export const unwrapResponsivePreset = (presetKey, presets, props) => R.pipe(
  R.map((mediaType) => {
    const responsivePresetName = R.path([mediaType, presetKey], props);
    const defaultPresetName = props[presetKey];
    const presetName = R.isNil(responsivePresetName) ? defaultPresetName : responsivePresetName;
    if (!presetName) {
      // eslint-disable-next-line no-console
      console.warn(`${presetName} preset name is not found in ${JSON.stringify(presets)}`);
    }
    const preset = presets[presetName];
    if (!preset) {
      // eslint-disable-next-line no-console
      console.warn(`${presetName} preset is not found in ${JSON.stringify(presets)}`);
    }
    return [mediaType, preset || {}];
  }),
  R.fromPairs,
)(mediaTypePropNames);

export const mergeStyleProps = R.reduce(
  R.mergeDeepWithKey((key, l, r) => (key === 'css' ? `${l}\n${r}` : r)),
  {},
);

export const getResponsivePropTypes = propTypes => ({
  ...propTypes,
  ...R.pipe(
    R.map(mediaType => [mediaType, PropTypes.shape(propTypes)]),
    R.fromPairs,
  )(mediaTypePropNames),
});
