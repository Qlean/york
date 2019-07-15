import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import { sizes } from '../../utils/styles'

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
  width: PropTypes.oneOf(sizes),
  height: PropTypes.oneOf(sizes),
}

export default Separator
