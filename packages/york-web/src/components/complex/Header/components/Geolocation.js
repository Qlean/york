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

// FIXME: не хавает текст
const Select = styled.select`
  position: relative;
  top: 1px;
  border: 0;

  background-color: transparent;
  color: ${colors.grey};
  font-family: 'Museo Sans';
  font-size: ${({ isMobileVersion }) => (isMobileVersion ? 12 : 14)}px;
  line-height: ${({ isMobileVersion }) => (isMobileVersion ? 15 : 20)}px;

  -webkit-appearance: none;
`

// FIXME: isMobileVersion - переделать с булеана на хеш
export default function Geolocation({
  selectedValue,
  isMobileVersion,
  cities,
  onChangeHandler,
}) {
  return (
    <TopMenuGeolocation>
      <TopMenuGeolocationIcon />
      <Select
        onChange={onChangeHandler}
        isMobileVersion={isMobileVersion}
        value={selectedValue}
      >
        {cities.map(item => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </Select>
    </TopMenuGeolocation>
  )
}
