import React from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { transitions } from 'york-web/utils'
import { Text, View, Separator } from 'york-web/components/primitive'

import MenuItem from '../MenuItem'

const StyledInnerMenuItem = styled(MenuItem)`
  display: flex;
`

const StyledInnerMenuText = styled(Text)`
  color: ${({ isSelected }) => (isSelected ? colors.green : colors.coal)};
  transition: ${transitions.medium};
`

export default function MenuRow({
  components,
  callbacks,
  items,
  selectedItem,
}) {
  return items.map(item => {
    return (
      <StyledInnerMenuItem
        key={item.name}
        components={components}
        callbacks={callbacks}
        item={item}
      >
        <Separator width={8} />
        <View flexDirection="column">
          <Separator height={1} />
          <StyledInnerMenuText
            isSelected={item.name === selectedItem}
            color={item.name === selectedItem ? 'green' : undefined}
          >
            {item.title}
          </StyledInnerMenuText>
          <Separator height={1} />
        </View>
      </StyledInnerMenuItem>
    )
  })
}
