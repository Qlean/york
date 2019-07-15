import { sizes as coreSizes } from '@qlean/york-core'

export const uiPoint = 5

export const sizes = coreSizes.map(size => size * uiPoint)
