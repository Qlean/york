import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import { sizes } from '../../utils/styles'

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
  width: PropTypes.oneOf(Object.keys(sizes)),
  /** Ширина разделителя в `uiPoint` */
  height: PropTypes.oneOf(Object.keys(sizes)),
}

export default Separator
