import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { View, Separator, Text } from 'york-web/components/primitive'
import { menuItemShape } from '../utils'
import MobileGeoIcon from '../assets/mobileGeo.svg'

const StyledRegionWrap = styled(View)`
  position: relative;
`

const StyledRegionSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  font-size: 14px;
  cursor: pointer;
`

const StyledMenuItemText = styled(Text)`
  color: ${({ isSelected }) => (isSelected ? colors.green : colors.coal)};
  text-transform: uppercase;
`

export default function Region({ regions, selectedRegion, onRegionChange }) {
  return (
    <StyledRegionWrap flexDirection="column">
      <Separator height={2} />
      <View>
        <Separator width={4} />
        <MobileGeoIcon />
        <Separator width={2} />
        <StyledRegionSelect
          onChange={evt => onRegionChange(evt.target.value)}
          value={selectedRegion}
        >
          {regions.map(region => (
            <option key={region.name} value={region.name}>
              {region.title}
            </option>
          ))}
        </StyledRegionSelect>
        <StyledMenuItemText>
          {regions.find(region => region.name === selectedRegion).title}
        </StyledMenuItemText>
      </View>
      <Separator height={2} />
    </StyledRegionWrap>
  )
}

Region.defaultProps = {
  selectedRegion: null,
}

Region.propTypes = {
  regions: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
  selectedRegion: PropTypes.string,
  onRegionChange: PropTypes.func.isRequired,
}
