import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { uiPoint, sizes, transitions } from 'york-web/utils'
import { Text, View } from 'york-web/components/primitive'

import { menuItemShape, componentsShape, callbacksShape } from '../utils'
import MenuItem from '../MenuItem'

const StyledMenuItem = styled(MenuItem)`
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

export default function Menu({
  components,
  callbacks,
  items,
  selectedItem,
  textPreset,
}) {
  return (
    <View>
      {items.map(item => {
        const { name, title } = item
        const isSelected = selectedItem === name
        return (
          <StyledMenuItem
            key={name}
            isSelected={isSelected}
            item={item}
            components={components}
            callbacks={callbacks}
          >
            <Text preset={textPreset} color="inherit">
              {title}
            </Text>
          </StyledMenuItem>
        )
      })}
    </View>
  )
}

Menu.defaultProps = {
  selectedItem: null,
}

Menu.propTypes = {
  components: componentsShape.isRequired,
  callbacks: callbacksShape.isRequired,
  items: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
  selectedItem: PropTypes.string,
  textPreset: PropTypes.string.isRequired,
}
