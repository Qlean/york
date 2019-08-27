import React from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

const TopMenuContainer = styled.div`
  display: flex;
`

const TopMenuItem = styled.div`
  padding: 10px;
  text-transform: uppercase;
  margin-right: 15px;
  ${({ isActive }) => isActive && `color: ${colors.green};`}
`

const Header = props => {
  const { data } = props
  return (
    <div>
      <TopMenuContainer>
        {data.map((menuItem, idx) => (
          <TopMenuItem isActive={idx === 0}>{menuItem.title}</TopMenuItem>
        ))}
      </TopMenuContainer>
    </div>
  )
}

export default Header
