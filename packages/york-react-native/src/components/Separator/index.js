import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import * as R from 'ramda'

import { sizes } from 'york-react-native/utils/styles'

const sizesPropTypes = PropTypes.oneOf(R.map(Number, R.keys(sizes)))

/**
 * Используется для создания отступов между элементами. Ширина и высота разделителя может принимать только значения указанные в core/sizes.
 */
const Separator = ({ width, height }) => (
  <View
    style={[
      width && { width: sizes[width] },
      height && { height: sizes[height] },
    ]}
  />
)

Separator.defaultProps = {
  width: 0,
  height: 0,
}

Separator.propTypes = {
  /** Высота разделителя в `uiPoint` */
  width: sizesPropTypes,
  /** Ширина разделителя в `uiPoint` */
  height: sizesPropTypes,
}

export default Separator
