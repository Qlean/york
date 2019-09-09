import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Text, Separator } from 'york-web/components/primitive'

import { menuItemShape } from '../utils'

import ArrowIcon from './assets/arrow.svg'

const StyledRegion = styled.div`
  flex-shrink: 9999;
  display: flex;
  align-items: center;
  position: relative;
  min-width: 0;
`

const IconWrap = styled.div`
  flex-shrink: 0;
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

const OverflowedText = styled(Text)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export default function Region({ isMobile, items, selectedItem, onChange }) {
  return (
    <StyledRegion>
      <IconWrap>
        <ArrowIcon />
      </IconWrap>
      <Separator width={1} />
      <OverflowedText preset="caption" color="grey">
        {items.find(item => item.name === selectedItem).title}
      </OverflowedText>
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
