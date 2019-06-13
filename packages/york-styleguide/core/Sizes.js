import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Example, g } from '@qlean/york-web'

const StyledBox = styled(Example.Box)`
  height: ${({ size }) => g(size)}px;
  width: 100%;
`

const Sizes = ({ sizes }) => (
  <Example.Showcase flexDirection="column">
    {Object.values(sizes)
      .filter(a => a)
      .map(size => (
        <Example.ShowcaseItem title={String(size)} key={size}>
          <StyledBox size={size} />
        </Example.ShowcaseItem>
      ))}
  </Example.Showcase>
)

Sizes.propTypes = {
  sizes: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
}

export default Sizes
