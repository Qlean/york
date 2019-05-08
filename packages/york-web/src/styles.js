import PropTypes from 'prop-types'
import * as R from 'ramda'

export const UI_GRID_POINT = 5

export const g = (times = 1) => times * UI_GRID_POINT

export const sizes = {
  0: 0,
  1: g(1),
  2: g(2),
  3: g(3),
  4: g(4),
  6: g(6),
  8: g(8),
  12: g(12),
  16: g(16),
  20: g(20),
  24: g(24),
}

export const shadows = {
  light: '0 1px 2px 0 rgba(0,0,0,0.10)',
  medium: '0 1px 2px rgba(0,0,0,0.25)',
  strong: '0 2px 6px 0 rgba(0,0,0,0.30)',
}

export const transitions = {
  short: 'all 0.1s ease-in-out',
  medium: 'all 0.25s ease-in-out',
  long: 'all 0.4s ease-in-out',
}

export const borderRadiuses = {
  small: '4px',
  medium: '6px',
  round: '100px',
  none: 'none',
}

export const mediaBreakpoints = {
  base: 991,
  wide: 1280,
}

export const mediaMaxWidths = {
  base: 940,
  wide: 1120,
  mobile: 360,
}

export const media = {
  mobile: string => `
    @media (max-width: ${mediaBreakpoints.base}px) {
      ${string}
    }
  `,
  base: string => `
    @media (min-width: ${mediaBreakpoints.base +
      1}px) and (max-width: ${mediaBreakpoints.wide - 1}px) {
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
}

const mediaTypePropNames = ['mobileProps', 'baseProps', 'wideProps']

export const unwrapResponsiveProps = (propsNames, props) => {
  let unwrappedProps = {}
  mediaTypePropNames.forEach(mediaType => {
    unwrappedProps[mediaType] = {}
  })
  propsNames.forEach(propName => {
    mediaTypePropNames.forEach(mediaType => {
      const responsiveValue = R.path([mediaType, propName], props)
      const defaultValue = props[propName]
      const value = R.isNil(responsiveValue) ? defaultValue : responsiveValue
      if (!R.isNil(value)) {
        unwrappedProps = R.assocPath(
          [mediaType, propName],
          R.isNil(responsiveValue) ? defaultValue : responsiveValue,
          unwrappedProps,
        )
      }
    })
  })
  return unwrappedProps
}

export const unwrapResponsivePreset = (presetKey, presets, props) =>
  R.pipe(
    R.map(mediaType => {
      const responsivePresetName = R.path([mediaType, presetKey], props)
      const defaultPresetName = props[presetKey]
      const presetName = R.isNil(responsivePresetName)
        ? defaultPresetName
        : responsivePresetName
      if (!presetName) {
        // eslint-disable-next-line no-console
        console.warn(
          `${presetName} preset name is not found in ${JSON.stringify(
            presets,
          )}`,
        )
      }
      const preset = presets[presetName]
      if (!preset) {
        // eslint-disable-next-line no-console
        console.warn(
          `${presetName} preset is not found in ${JSON.stringify(presets)}`,
        )
      }
      return [mediaType, preset || {}]
    }),
    R.fromPairs,
  )(mediaTypePropNames)

export const mergeStyleProps = R.reduce(
  R.mergeDeepWithKey((key, l, r) => (key === 'css' ? `${l}\n${r}` : r)),
  {},
)

export const getResponsivePropTypes = propTypes => ({
  ...propTypes,
  ...R.pipe(
    R.map(mediaType => [mediaType, PropTypes.shape(propTypes)]),
    R.fromPairs,
  )(mediaTypePropNames),
})
