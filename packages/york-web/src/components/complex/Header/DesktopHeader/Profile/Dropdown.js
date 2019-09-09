import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { sizes, borderRadiuses, shadows, transitions } from 'york-web/utils'
import { Text, Separator } from 'york-web/components/primitive'

import { menuItemShape, componentsShape, callbacksShape } from '../../utils'
import MenuItem from '../../MenuItem'

const StyledContentContainer = styled.div`
  pointer-events: none;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 100%;
  transition: ${transitions.short};
  transform: translateY(-${sizes[2]}px);
`

const StyledDropdown = styled.div`
  position: relative;
  &:hover > ${StyledContentContainer} {
    pointer-events: auto;
    opacity: 1;
    transform: translateY(0);
  }
`

const StyledContent = styled.div`
  padding: ${sizes[4]}px ${sizes[2]}px;
  border-radius: ${borderRadiuses.medium};
  box-shadow: ${shadows.strong};
  background-color: ${colors.white};
`

const StyledMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  height: ${sizes[8]}px;
  padding: 0 ${sizes[2]}px;
  border-radius: ${borderRadiuses.medium};
  text-transform: uppercase;
  white-space: nowrap;
  transition: ${transitions.short};
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: ${colors.smoke};
  }
`

export default function Dropdown({
  components,
  callbacks,
  items,
  selectedItem,
  children,
}) {
  return (
    <StyledDropdown>
      {children}
      <StyledContentContainer>
        <Separator height={3} />
        <StyledContent>
          {items.map(item => {
            const isSelected = item.name === selectedItem
            return (
              <StyledMenuItem
                key={item.title}
                item={item}
                components={components}
                callbacks={callbacks}
              >
                <Text color={isSelected ? 'green' : 'coal'} preset="link">
                  {item.title}
                </Text>
              </StyledMenuItem>
            )
          })}
        </StyledContent>
      </StyledContentContainer>
    </StyledDropdown>
  )
}

Dropdown.defaultProps = {
  selectedItem: null,
}

Dropdown.propTypes = {
  components: componentsShape.isRequired,
  callbacks: callbacksShape.isRequired,
  items: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
  selectedItem: PropTypes.string,
  children: PropTypes.node.isRequired,
}
