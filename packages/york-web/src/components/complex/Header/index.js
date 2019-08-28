import React from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { transitions } from '@qlean/york-web'

// не гайдовая тень, "Так надо" © Дизайнер
const Root = styled.header`
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`

const TopMenuContainer = styled.div`
  display: flex;
`

const TopMenuItem = styled.div`
  padding: 10px;
  margin-right: 15px;
  text-transform: uppercase;
  color: ${({ isActive }) => (isActive ? colors.green : colors.coal)};
  cursor: pointer;
  transition: ${transitions};

  :hover {
    color: ${colors.ash};
  }
`

const Header = props => {
  const { data } = props
  return (
    <Root>
      <TopMenuContainer>
        {data.map((menuItem, idx) => (
          <TopMenuItem isActive={idx === 0}>{menuItem.title}</TopMenuItem>
        ))}
      </TopMenuContainer>
    </Root>
  )
}

export default Header
