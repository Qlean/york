import React from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { transitions } from 'york-web/utils'
import { Text, View, Separator } from 'york-web/components/primitive'

import Geolocation from '../components/Geolocation'

import LoginIcon from '../assets/login.svg'

const ContainerBase = styled.div`
  background-color: ${colors.white};
`

const ContainerInner = styled.div`
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
`

const ContainerLevelOne = styled(ContainerBase)`
  position: relative;
  z-index: 1;
`

const StickyStage = styled(ContainerBase)`
  position: sticky;
  top: 0;
`

// не гайдовая тень, "Так надо" © Дизайнер
const ContainerLevelTwo = styled(ContainerBase)`
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`

const ContainerLevelThree = styled(ContainerBase)`
  position: relative;
  z-index: -1;
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

const StyledTopMenuPhone = styled(Text)`
  display: block;
  letter-spacing: 0.5px;
`

export default function DesktopHeader({ levelOneMenu, levelTwoMenu, logo }) {
  const [activeLevelOneMenu, setLevelOneMenu] = React.useState(0)
  const [activeLevelTwoMenu, setLevelTwoMenu] = React.useState(0)
  const [activeLevelThreeMenu, setLevelThreeMenu] = React.useState(0)

  const resetLevelThreeMenu = React.useCallback(() => setLevelThreeMenu(0))

  const levelThreeMenu = levelTwoMenu[activeLevelTwoMenu].subMenu

  const TMP_TOM_RIGHT_MENU = [
    <Geolocation selectedValue={levelOneMenu.geo.selectedValue} />,
    <StyledTopMenuPhone preset="caption">+7 495 646-82-59</StyledTopMenuPhone>,
    <View alignItems="center">
      <LoginIcon />
      <Separator width={1} />
      <Text preset="caption">Войти</Text>
    </View>,
  ]

  return (
    <>
      <ContainerLevelOne>
        <ContainerInner>
          <LevelOne>
            <LevelOneFirstSection>
              <LogoWrap>
                <Logo src={logo.url} width="62" height="22" alt={logo.alt} />
              </LogoWrap>
              <LevelOneMenu>
                {levelOneMenu.tabs.map((menuItem, idx) => (
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
        </ContainerInner>
      </ContainerLevelOne>
      <StickyStage>
        <ContainerLevelTwo>
          <ContainerInner>
            <MenuItemContainer>
              {levelTwoMenu.map((menuItem, idx) => (
                <LevelTwoMenuItem
                  key={menuItem.title}
                  isActive={idx === activeLevelTwoMenu}
                  onClick={() => {
                    setLevelTwoMenu(idx)
                    resetLevelThreeMenu()
                  }}
                >
                  {menuItem.title}
                </LevelTwoMenuItem>
              ))}
            </MenuItemContainer>
          </ContainerInner>
        </ContainerLevelTwo>
        {levelThreeMenu && levelThreeMenu.length > 0 && (
          <ContainerLevelThree>
            <ContainerInner>
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
            </ContainerInner>
          </ContainerLevelThree>
        )}
      </StickyStage>
    </>
  )
}
