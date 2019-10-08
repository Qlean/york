import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Text } from 'york-web/components/primitive'
import { sizes, transitions } from 'york-web/utils'

import ArrowIcon from './assets/arrow.svg'

const StyledArrowIconContainer = styled.div`
  flex-shrink: 0;
  transition: ${transitions.medium};
  ${({ isActive }) => !isActive && 'transform: rotate(-180deg);'}
`

const StyledToggler = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${sizes[2]}px 0;
  user-select: none;
`

const Accordion = ({ items, ...rest }) => {
  const [value, setValue] = useState(null)

  return (
    <div {...rest}>
      {items.map(item => {
        const isActive = item.title === value
        const onClick = () => setValue(isActive ? null : item.title)
        return (
          <div>
            <StyledToggler onClick={onClick}>
              <Text color="grey">{item.title}</Text>
              {item.content && (
                <StyledArrowIconContainer isActive={isActive}>
                  <ArrowIcon />
                </StyledArrowIconContainer>
              )}
            </StyledToggler>
            {isActive && item.content}
          </div>
        )
      })}
    </div>
  )
}

Accordion.propTypes = {
  items: PropTypes.exact({
    title: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
  }).isRequired,
}

export default Accordion
