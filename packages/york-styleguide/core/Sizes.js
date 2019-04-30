import React from 'react'
import styled from 'styled-components'

import colors from '../../york-core/src/styles/colors'
import sizes from '../../york-core/src/styles/sizes'

const StyledSpace = styled.div`
  background-color: ${colors.blue};
  height: ${({ height }) => height}px;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`

const Spaces = () => (
  <div>
    {Object.values(sizes).map((size, index) => (
      <StyledSpace height={size} key={index} />
    ))}
  </div>
)

export default Spaces
