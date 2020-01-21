import React from 'react'
import { View, ViewProps } from 'react-native'
import { sizes as coreSizes } from '@qlean/york-core'

import { sizes } from 'york-react-native/utils/styles'

type Props = {
  /** Высота разделителя в `uiPoint` */
  width?: keyof typeof coreSizes
  /** Ширина разделителя в `uiPoint` */
  height?: keyof typeof coreSizes
} & ViewProps

/**
 * Используется для создания отступов между элементами. Ширина и высота разделителя может принимать только значения указанные в core/sizes.
 */
const Separator = ({ width = 0, height = 0, style, ...rest }: Props) => (
  <View
    style={[{ width: sizes[width] }, { height: sizes[height] }, style]}
    {...rest}
  />
)

export default Separator
