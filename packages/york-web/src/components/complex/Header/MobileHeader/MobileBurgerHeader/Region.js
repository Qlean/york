import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { View, Separator, Text } from 'york-web/components/primitive'
import { uiPoint, getAssetsUrl } from 'york-web/utils'

import { menuItemShape } from '../../utils'

const StyledRegion = styled(View)`
  align-items: center;
  position: relative;
  height: ${uiPoint * 9}px;
`

const StyledRegionSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  font-size: 14px;
`

const StyledMobileGeoIcon = styled.img`
  flex-shrink: 0;
`

const StyledMenuItemText = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export default function Region({ regions, selectedRegion, onRegionChange }) {
  return (
    <StyledRegion>
      <Separator width={4} />
      <StyledMobileGeoIcon src={getAssetsUrl('/mobileGeo/v1.svg')} />
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
      <StyledMenuItemText preset="link">
        {regions.find(region => region.name === selectedRegion).title}
      </StyledMenuItemText>
      <Separator width={4} />
    </StyledRegion>
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
