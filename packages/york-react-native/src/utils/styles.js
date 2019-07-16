import * as R from 'ramda'
import { sizes as coreSizes } from '@qlean/york-core'

export const uiPoint = 5

export const sizes = R.map(size => size * uiPoint, coreSizes)

export const fontFamily = 'MuseoSansCyrl-500, "Museo Sans"'
export const fontFamilyBold = 'MuseoSansCyrl-700, "Museo Sans"'
