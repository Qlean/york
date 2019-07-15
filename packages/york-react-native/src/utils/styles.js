import * as R from 'ramda'
import { sizes as coreSizes } from '@qlean/york-core'

export const uiPoint = 5

export const sizes = R.map(size => size * uiPoint, coreSizes)
