import { Dimensions, Platform } from 'react-native'
import * as R from 'ramda'
import { sizes as coreSizes } from '@qlean/york-core'

export const uiPoint = 5

export const sizes: ReadonlyArray<number> = R.map(
  size => size * uiPoint,
  coreSizes,
)

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
