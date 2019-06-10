import React from 'react'
import PropTypes from 'prop-types'

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 280px)',
  gridColumnGap: '15px',
}

const Grid = ({ children, ...rest }) => {
  return (
    <div style={gridStyle} {...rest}>
      {children}
    </div>
  )
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
}

const Example = {
  Grid,
}

export default Example
