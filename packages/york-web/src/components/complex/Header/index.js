import React from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { transitions } from '@qlean/york-web'

// TODO: возможно, стоит это сделать через ".svg", но не разобрался как их импортировать
import IconGeo from './assets/IconGeo'
import IconLogin from './assets/IconLogin'

const Root = styled.header``

const RootContentInner = styled.div`
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
`

// не гайдовая тень, "Так надо" © Дизайнер
const MainContent = styled.div`
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`

const LevelOne = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
`

const LevelOneFirstSection = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`

const LevelOneSecondSection = styled.div`
  display: flex;
  align-items: center;
  margin-right: -15px;
`

const LevelOneSecondSectionSlot = styled.div`
  margin-right: 15px;
`

const LogoWrap = styled.div`
  margin-right: 15px;
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
  margin-right: 4px;
  color: ${colors.ash};
  font-size: 11px;
  line-height: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: ${transitions.medium};
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    `
    background-color: ${colors.green};
    color: ${colors.white};
    letter-spacing: 1px;
  `}
`

const MenuItemContainer = styled.div`
  display: flex;
  margin-left: -10px;
`

const MenuItem = styled.div`
  padding: 10px;
  margin-right: 15px;
  color: ${({ isActive }) => (isActive ? colors.green : colors.coal)};
  transition: ${transitions.medium};
  cursor: pointer;

  :hover {
    ${({ isActive }) => !isActive && `color: ${colors.ash};`}
  }
`

const LevelTwoMenuItem = styled(MenuItem)`
  text-transform: uppercase;
  font-size: 15px;
  line-height: 20px;
`

const LevelThreeMenuItem = styled(MenuItem)`
  font-size: 14px;
  line-height: 20px;
`

const TopMenuGeolocation = styled.div`
  display: flex;
  align-items: center;
`

const TopMenuGeolocationIcon = styled(IconGeo)`
  margin-right: 5px;
`

const TopMenuGeolocationText = styled.div`
  color: ${colors.grey};
  font-size: 14px;
  line-height: 20px;
`

const TopMenuTelephone = styled.div`
  color: ${colors.coal};
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.5px;
`

const TopMenuLogin = styled.div`
  display: flex;
  align-items: center;
`

const TopMenuLoginIcon = styled(IconLogin)`
  margin-right: 5px;
`

const TopMenuLoginText = styled.div`
  color: ${colors.coal};
  font-size: 14px;
  line-height: 20px;
`

const TMP_TOM_RIGHT_MENU = [
  <TopMenuGeolocation>
    <TopMenuGeolocationIcon />
    <TopMenuGeolocationText>Санкт-Петербург</TopMenuGeolocationText>
  </TopMenuGeolocation>,
  <TopMenuTelephone>+7 495 646-82-59</TopMenuTelephone>,
  <TopMenuLogin>
    <TopMenuLoginIcon />
    <TopMenuLoginText>Войти</TopMenuLoginText>
  </TopMenuLogin>,
]

const Header = props => {
  const { levelOneMenu, levelTwoMenu, levelThreeMenu, logo } = props

  const [activeLevelOneMenu, setLevelOneMenu] = React.useState(0)
  const [activeLevelTwoMenu, setLevelTwoMenu] = React.useState(0)
  const [activeLevelThreeMenu, setLevelThreeMenu] = React.useState(0)

  return (
    <Root>
      <MainContent>
        <RootContentInner>
          <LevelOne>
            <LevelOneFirstSection>
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
            </LevelOneFirstSection>

            <LevelOneSecondSection>
              {TMP_TOM_RIGHT_MENU.map((item, idx) => (
                <LevelOneSecondSectionSlot key={idx}>
                  {item}
                </LevelOneSecondSectionSlot>
              ))}
            </LevelOneSecondSection>
          </LevelOne>
          <MenuItemContainer>
            {levelTwoMenu.map((menuItem, idx) => (
              <LevelTwoMenuItem
                key={menuItem.title}
                isActive={idx === activeLevelTwoMenu}
                onClick={() => setLevelTwoMenu(idx)}
              >
                {menuItem.title}
              </LevelTwoMenuItem>
            ))}
          </MenuItemContainer>
        </RootContentInner>
      </MainContent>
      <RootContentInner>
        <MenuItemContainer>
          {levelThreeMenu.map((menuItem, idx) => (
            <LevelThreeMenuItem
              key={menuItem.title}
              isActive={idx === activeLevelThreeMenu}
              onClick={() => setLevelThreeMenu(idx)}
            >
              {menuItem.title}
            </LevelThreeMenuItem>
          ))}
        </MenuItemContainer>
      </RootContentInner>
    </Root>
  )
}

export default Header
