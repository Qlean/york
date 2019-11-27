import PropTypes from 'prop-types'
import * as R from 'ramda'
import { sizes as coreSizes, colors, rgbaColors } from '@qlean/york-core'

export const uiPoint = 5

export const sizes = R.map(size => size * uiPoint, coreSizes)

export const shadows = {
  none: 'none',
  light: '0 1px 2px 0 rgba(0,0,0,0.10)',
  medium: '0 1px 2px rgba(0,0,0,0.25)',
  strong: '0 2px 6px 0 rgba(0,0,0,0.30)',
}

export const transitionTimings = {
  short: 0.1,
  medium: 0.25,
  long: 0.4,
}

export const transitions = {
  short: `all ${transitionTimings.short}s ease-in-out`,
  medium: `all ${transitionTimings.medium}s ease-in-out`,
  long: `all ${transitionTimings.long}s ease-in-out`,
}

export const borderRadiuses = {
  none: 'none',
  small: '4px',
  medium: '6px',
  round: '100px',
}

export const zIndexes = {
  stickyHeader: 19,
  header: 20,
  dropdown: 50,
  modal: 100,
}

export const minScreenWidth = 320

export const mobileHorizontalPadding = sizes[6]

export const fontFamily = '"Museo Sans", sans-serif'

export const mediaBreakpoints = {
  base: 990,
  wide: 1280,
}

export const media = {
  mobile: string => `
    @media (max-width: ${mediaBreakpoints.base - 1}px) {
      ${string}
    }
  `,
  base: string => `
    @media (min-width: ${mediaBreakpoints.base}px)
    and (max-width: ${mediaBreakpoints.wide - 1}px) {
      ${string}
    }
  `,
  wide: string => `
    @media (min-width: ${mediaBreakpoints.wide}px) {
      ${string}
    }
  `,
  desktop: string => `
    @media (min-width: ${mediaBreakpoints.base}px) {
      ${string}
    }
  `,
}

const mediaTypePropNames = ['mobileProps', 'baseProps', 'wideProps']

export const normalizeResponsiveProps = (propsNames, props) => {
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

export const normalizeResponsivePreset = (presetGetter, presets, props) =>
  R.pipe(
    R.map(mediaType => {
      const defaultPresetName = presetGetter(props, props)
      const responsivePresetName = presetGetter(props[mediaType] || {}, props)
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

export const normalizeColor = (color, opacity) => {
  const rgbaColor = rgbaColors[color]
  if (!rgbaColor || !rgbaColor.a) return colors.transparent
  if (R.isNil(opacity)) return colors[color]
  const { r, g, b } = rgbaColor
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

export const hideScrollBar = `
  -ms-overflow-style: none;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`
