import React from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { transitions } from '@qlean/york-web'

// не гайдовая тень, "Так надо" © Дизайнер
const Root = styled.header`
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`

const LevelOne = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
`

const LogoWrap = styled.div`
  margin-right: 10px;
`

const Logo = styled.img`
  display: block;
`

const LevelOneMenu = styled.div`
  display: flex;
`

const LevelOneMenuItem = styled.div`
  padding: 2px 8px;
  border-radius: 8px;
  color: ${colors.ash};
  font-size: 11px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: ${transitions.medium};

  ${({ isActive }) =>
    isActive &&
    `
    background-color: ${colors.green};
    color: ${colors.white};
    letter-spacing: 1px;
  `}
`

const LevelTwo = styled.div`
  display: flex;
  margin-left: -10px;
`

const TopMenuItem = styled.div`
  padding: 10px;
  margin-right: 15px;
  color: ${({ isActive }) => (isActive ? colors.green : colors.coal)};
  text-transform: uppercase;
  transition: ${transitions.medium};
  cursor: pointer;

  :hover {
    color: ${colors.ash};
  }
`

const Header = props => {
  const { levelOneMenu, levelTwoMenu, logo } = props

  const [activeLevelOneMenu, setLevelOneMenu] = React.useState(0)
  const [activeLevelTwoMenu, setLevelTwoMenu] = React.useState(0)

  return (
    <Root>
      <LevelOne>
        <LogoWrap>
          <Logo src={logo.url} width="62" height="22" alt={logo.alt} />
        </LogoWrap>
        <LevelOneMenu>
          {levelOneMenu.map((menuItem, idx) => (
            <LevelOneMenuItem
              key={menuItem.title}
              isActive={idx === activeLevelOneMenu}
              onClick={() => setLevelOneMenu(idx)}
            >
              {menuItem.title}
            </LevelOneMenuItem>
          ))}
        </LevelOneMenu>
      </LevelOne>
      <LevelTwo>
        {levelTwoMenu.map((menuItem, idx) => (
          <TopMenuItem
            key={menuItem.title}
            isActive={idx === activeLevelTwoMenu}
            onClick={() => setLevelTwoMenu(idx)}
          >
            {menuItem.title}
          </TopMenuItem>
        ))}
      </LevelTwo>
    </Root>
  )
}

export default Header
