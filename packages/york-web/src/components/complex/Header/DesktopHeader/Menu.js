import React from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { uiPoint, sizes, transitions } from 'york-web/utils'
import { Text, View } from 'york-web/components/primitive'

const MenuItem = styled(View)`
  display: flex;
  align-items: center;
  height: ${uiPoint * 10}px;
  padding: 0 ${sizes[3]}px;
  transition: ${transitions.medium};
  user-select: none;
  ${({ isSelected }) =>
    isSelected
      ? `color: ${colors.green};`
      : `
        color: ${colors.coal};
        cursor: pointer;
      `}
  :hover, :focus, :active {
    color: ${({ isSelected }) => (isSelected ? colors.green : colors.ash)};
  }
  :first-child {
    padding-left: 0;
  }
`

export default function Menu({ items, selectedItem, textPreset }) {
  return (
    <View>
      {items.map(({ name, title, href }) => {
        const isSelected = selectedItem === name
        return (
          <MenuItem key={name} isSelected={isSelected}>
            <Text preset={textPreset} color="inherit">
              {title}
            </Text>
          </MenuItem>
        )
      })}
    </View>
  )
}
