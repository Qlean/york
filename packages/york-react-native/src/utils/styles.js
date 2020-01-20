import { Dimensions, Platform } from 'react-native'
import * as R from 'ramda'

import { sizes as coreSizes, colors } from '@qlean/york-core'

export const uiPoint = 5

export const sizes = R.map(size => size * uiPoint, coreSizes)

export const fontFamily = 'MuseoSansCyrl-500'
export const fontFamilyBold = 'MuseoSansCyrl-700'

export const borderRadiuses = {
  none: 0,
  small: 4,
  medium: 6,
  large: 10,
}

// Взято из https://github.com/ptelad/react-native-iphone-x-helper
const isIphoneX = () => {
  const { width, height } = Dimensions.get('window')
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 812 || width === 812 || (height === 896 || width === 896))
  )
}

const getSafeAreaPaddingTop = () => {
  if (Platform.OS !== 'ios') return 0
  if (isIphoneX()) return 44
  return 20
}

export const safeAreaPaddingTop = getSafeAreaPaddingTop()
export const safeAreaPaddingBottom = isIphoneX() ? 34 : 0

export const shadows = {
  light: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    elevation: 3,
  },
  medium: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    shadowOpacity: 0.1,
    elevation: 6,
  },
  strong: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 14,
    shadowOpacity: 0.16,
    elevation: 9,
  },
  hard: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 20,
    shadowOpacity: 0.33,
    elevation: 16,
  },
}
