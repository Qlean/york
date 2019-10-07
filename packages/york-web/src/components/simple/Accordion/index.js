import React, { useState } from 'react'
import styled from 'styled-components'

import { Text } from 'york-web/components/primitive'
import { sizes } from 'york-web/utils'

const StyledToggler = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${sizes[2]}px 0;
  user-select: none;
`

const Accordion = ({ items }) => {
  const [value, setValue] = useState(null)

  return (
    <>
      {items.map(item => {
        const isActiveItem = item.title === value
        const onClick = () => setValue(isActiveItem ? null : item.title)
        return (
          <div>
            <StyledToggler onClick={onClick}>
              <Text color="grey">{item.title}</Text>
              {item.content && <img src={require('./assets/arrow.svg')} />}
            </StyledToggler>
            {isActiveItem && item.content}
          </div>
        )
      })}
    </>
  )
}

export default Accordion
