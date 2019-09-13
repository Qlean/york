import React from 'react'
import styled from 'styled-components'

import LogoImage from './assets/logo.svg'

const StyledLogo = styled.div`
  line-height: 0;
`

export default function Logo() {
  return (
    <StyledLogo>
      <LogoImage />
    </StyledLogo>
  )
}
