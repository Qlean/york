import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { Text, Separator } from 'york-web/components/primitive'

import { getAssetsUrl } from 'york-web/utils'

import { menuItemShape } from '../utils'

const StyledRegion = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`

const StyledArrowIcon = styled.img`
  flex-shrink: 0;
`

const StyledTextContainer = styled.div`
  overflow: hidden;
  color: ${colors.grey};
  white-space: nowrap;
  text-overflow: ellipsis;
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

export default function Region({ items, selectedItem, onChange }) {
  return (
    <StyledRegion>
      <StyledArrowIcon src={getAssetsUrl('/regionArrow/v1.svg')} />
      <Separator width={1} />
      <StyledTextContainer>
        <Text preset="caption" color="inherit">
          {items.find(item => item.name === selectedItem).title}
        </Text>
      </StyledTextContainer>
      <StyledSelect
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
  selectedItem: null,
}

Region.propTypes = {
  items: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
  selectedItem: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}
