import React from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import IconGeo from '../assets/IconGeo'

const TopMenuGeolocation = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const TopMenuGeolocationIcon = styled(IconGeo)`
  margin-right: 5px;
`

const TopMenuGeolocationText = styled.div`
  color: ${colors.grey};
  font-size: ${({ isMobileVersion }) => (isMobileVersion ? 12 : 14)}px;
  line-height: ${({ isMobileVersion }) => (isMobileVersion ? 15 : 20)}px;
`

export default function Geolocation(props) {
  const { selectedValue, isMobileVersion } = props

  return (
    <TopMenuGeolocation>
      <TopMenuGeolocationIcon />
      <TopMenuGeolocationText isMobileVersion={isMobileVersion}>
        {selectedValue}
      </TopMenuGeolocationText>
    </TopMenuGeolocation>
  )
}
