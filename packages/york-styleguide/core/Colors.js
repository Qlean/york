import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors as coreColors } from '@qlean/york-core'
import { Example, sizes, borderRadiuses } from '@qlean/york-web'

const StyledColorBlock = styled.div`
  height: ${sizes[20]}px;
  width: ${sizes[20]}px;
  background-color: ${({ color }) => color};
  border-radius: ${borderRadiuses.medium};
  border: 1px solid ${coreColors.whisper};
`

const Colors = ({ colors }) => (
  <Example.Showcase>
    {Object.entries(colors).map(([name, color]) => (
      <Example.ShowcaseItem title={name} caption={color} key={name}>
        <StyledColorBlock color={color} />
      </Example.ShowcaseItem>
    ))}
  </Example.Showcase>
)

Colors.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
}

export default Colors
