import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import * as R from 'ramda'

import { sizes } from 'york-react-native/utils/styles'

const sizesPropTypes = PropTypes.oneOf(R.map(Number, R.keys(sizes)))

/**
 * Используется для создания отступов между элементами. Ширина и высота разделителя может принимать только значения указанные в core/sizes.
 */
const Separator = ({ width, height, style, ...rest }) => (
  <View
    style={[{ width: sizes[width] }, { height: sizes[height] }, style]}
    {...rest}
  />
)

Separator.defaultProps = {
  width: 0,
  height: 0,
  style: null,
}

Separator.propTypes = {
  /** Высота разделителя в `uiPoint` */
  width: sizesPropTypes,
  /** Ширина разделителя в `uiPoint` */
  height: sizesPropTypes,
  /** Дополнительные стили */
  ///// style: View.propTypes.style,
}

export default Separator
