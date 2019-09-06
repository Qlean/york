import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Text, Separator } from 'york-web/components/primitive'

import { menuItemShape } from '../utils'

import ArrowIcon from './assets/arrow.svg'

const StyledRegion = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

const StyledSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  font-size: 14px;
  cursor: pointer;
`

export default function Region({ isMobile, items, selectedItem, onChange }) {
  return (
    <StyledRegion>
      <ArrowIcon />
      <Separator width={1} />
      <Text preset="caption" color="grey">
        {items.find(item => item.name === selectedItem).title}
      </Text>
      <StyledSelect
        isMobile={isMobile}
        value={selectedItem}
        onChange={e => onChange(e.target.value)}
      >
        {items.map(item => (
          <option key={item.name} value={item.name}>
            {item.title}
          </option>
        ))}
      </StyledSelect>
    </StyledRegion>
  )
}

Region.defaultProps = {
  isMobile: false,
  selectedItem: null,
}

Region.propTypes = {
  isMobile: PropTypes.bool,
  items: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
  selectedItem: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}
