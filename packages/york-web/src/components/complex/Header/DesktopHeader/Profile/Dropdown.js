import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { sizes, borderRadiuses, shadows, transitions } from 'york-web/utils'
import { Text, Separator } from 'york-web/components/primitive'

import { menuItemShape, componentsShape, callbacksShape } from '../../utils'
import MenuItem from '../../MenuItem'

const StyledContentWrapper = styled.div`
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
  &:hover > ${StyledContentWrapper} {
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
  cursor: pointer;
  user-select: none;
  transition: ${transitions.short};
  &:hover {
    background-color: ${colors.smoke};
  }
`

export default function Dropdown({ components, callbacks, items, children }) {
  return (
    <StyledDropdown>
      {children}
      <StyledContentWrapper>
        <Separator height={3} />
        <StyledContent>
          {items.map(item => (
            <StyledMenuItem
              key={item.title}
              item={item}
              components={components}
              callbacks={callbacks}
            >
              <Text color={item.isSelected ? 'green' : 'coal'} preset="link">
                {item.title}
              </Text>
            </StyledMenuItem>
          ))}
        </StyledContent>
      </StyledContentWrapper>
    </StyledDropdown>
  )
}

Dropdown.propTypes = {
  components: componentsShape.isRequired,
  callbacks: callbacksShape.isRequired,
  items: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
  children: PropTypes.node.isRequired,
}
