import React from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { sizes, borderRadiuses, shadows } from 'york-web/utils'
import { Text, View } from 'york-web/components/primitive'

const StyledDropdown = styled.div`
  position: relative;
`

const StyledContent = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + ${sizes[3]}px);
  padding: ${sizes[4]}px ${sizes[2]}px;
  border-radius: ${borderRadiuses.medium};
  box-shadow: ${shadows.strong};
  background-color: ${colors.white};
`

const StyledItem = styled(View)`
  height: ${sizes[8]}px;
  padding: 0 ${sizes[2]}px;
  border-radius: ${borderRadiuses.medium};
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: ${colors.smoke};
  }
`

export default function Dropdown({ items, children }) {
  return (
    <StyledDropdown>
      {children}
      <StyledContent>
        {items.map(item => (
          <StyledItem key={item.title} alignItems="center">
            <Text color={item.isSelected ? 'green' : 'coal'} preset="link">
              {item.title}
            </Text>
          </StyledItem>
        ))}
      </StyledContent>
    </StyledDropdown>
  )
}
