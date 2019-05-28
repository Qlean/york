import React from 'react'
import styled from 'styled-components'

import { colors } from '@qlean/york-core'
import { Example, sizes, borderRadiuses } from '@qlean/york-web'

const StyledColorBlock = styled.div`
  height: ${sizes[20]}px;
  width: ${sizes[20]}px;
  background-color: ${({ code }) => code};
  border-radius: ${borderRadiuses.medium};
  border: 1px solid ${colors.whisper};
`

const StyledColorLabel = styled.div`
  font-family: Museo Sans;
  color: ${colors.coal};
  font-size: 15px;
  line-height: 20px;
  text-transform: capitalize;
  margin-top: ${sizes[1]}px;
`

const ColorsPalette = () => (
  <Example.Palette>
    {Object.entries(colors).map(([name, code]) => (
      <Example.PaletteItem key={name}>
        <StyledColorBlock code={code} />
        <StyledColorLabel>{name}</StyledColorLabel>
        <StyledColorLabel>{code}</StyledColorLabel>
      </Example.PaletteItem>
    ))}
  </Example.Palette>
)

export default ColorsPalette
