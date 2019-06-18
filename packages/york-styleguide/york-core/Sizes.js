import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Example, UI_POINT } from '@qlean/york-web'

const StyledBox = styled(Example.Box)`
  height: ${({ size }) => size * UI_POINT}px;
  width: 100%;
`

const Sizes = ({ sizes }) => (
  <Example.Showcase flexDirection="column">
    {Object.values(sizes)
      .filter(a => a)
      .map(size => (
        <Example.ShowcaseItem title={`${size} pt / ${size * 5} px`} key={size}>
          <StyledBox size={size} />
        </Example.ShowcaseItem>
      ))}
  </Example.Showcase>
)

Sizes.propTypes = {
  sizes: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
}

export default Sizes
