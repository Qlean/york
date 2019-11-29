import React from 'react'
import styled from 'styled-components'

import { getAssetsUrl } from 'york-web/utils'

const StyledLogo = styled.div`
  line-height: 0;
`

export default function Logo() {
  return (
    <StyledLogo>
      <img src={getAssetsUrl('/logo/v1.svg')} />
    </StyledLogo>
  )
}
