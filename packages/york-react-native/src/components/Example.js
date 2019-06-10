import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '@qlean/york-core'

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 280px)',
  gridColumnGap: '15px',
  padding: '10px',
}

const Grid = ({ backgroundColor, children, ...rest }) => {
  return (
    <div
      style={{ ...gridStyle, backgroundColor: colors[backgroundColor] }}
      {...rest}
    >
      {children}
    </div>
  )
}

Grid.defaultProps = {
  backgroundColor: 'transparent',
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.oneOf(Object.keys(colors)),
}

const Example = {
  Grid,
}

export default Example
