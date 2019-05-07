import React from 'react'
import styled from 'styled-components'

import { colors } from '@qlean/york-core'
import { sizes } from '@qlean/york-web'

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
    {Object.values(sizes).map(size => (
      <StyledSpace height={size} key={size} />
    ))}
  </div>
)

export default Spaces
