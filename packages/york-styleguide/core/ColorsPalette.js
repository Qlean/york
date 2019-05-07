import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from '@qlean/york-core'

const StyledColorBlock = styled.div`
  height: 140px;
  width: 140px;
  background-color: ${({ code }) => code};
  border-radius: 5px;
  border: 1px solid ${colors.whisper};
`

const StyledColorLabel = styled.div`
  font-family: Museo Sans;
  color: ${colors.coal};
  font-size: 15px;
  line-height: 20px;
  text-transform: capitalize;
  margin-top: 5px;
`

const StyledColors = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledColor = styled.div`
  margin: 10px;
`

const Color = ({ name, code }) => (
  <StyledColor>
    <StyledColorBlock code={code} />
    <StyledColorLabel>{name}</StyledColorLabel>
    <StyledColorLabel>{code}</StyledColorLabel>
  </StyledColor>
)

Color.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
}

const ColorsPalette = () => (
  <StyledColors>
    {Object.entries(colors).map(([name, code]) => (
      <Color name={name} code={code} key={name} />
    ))}
  </StyledColors>
)

export default ColorsPalette
