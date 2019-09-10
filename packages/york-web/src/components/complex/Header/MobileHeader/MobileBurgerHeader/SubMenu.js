import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { transitions } from 'york-web/utils'
import { Text, View, Separator } from 'york-web/components/primitive'

import { menuItemShape, componentsShape, callbacksShape } from '../../utils'
import MenuItem from '../../MenuItem'

const StyledMenuItem = styled(MenuItem)`
  display: flex;
`

const StyledMenuText = styled(Text)`
  transition: ${transitions.medium};
`

export default function SubMenu({
  components,
  callbacks,
  items,
  selectedItem,
}) {
  return (
    <>
      {items.map(item => {
        const isSelected = item.name === selectedItem
        return (
          <StyledMenuItem
            key={item.name}
            components={components}
            callbacks={callbacks}
            item={item}
          >
            <Separator width={8} />
            <View flexDirection="column">
              <Separator height={1} />
              <StyledMenuText
                isSelected={isSelected}
                color={isSelected ? 'green' : 'coal'}
              >
                {item.title}
              </StyledMenuText>
              <Separator height={1} />
            </View>
          </StyledMenuItem>
        )
      })}
      <Separator height={2} />
    </>
  )
}

SubMenu.defaultProps = {
  selectedItem: null,
}

SubMenu.propTypes = {
  components: componentsShape.isRequired,
  callbacks: callbacksShape.isRequired,
  items: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
  selectedItem: PropTypes.string,
}
