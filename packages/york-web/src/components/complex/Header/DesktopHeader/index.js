import React from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { uiPoint, sizes, transitions } from 'york-web/utils'
import { View, Separator } from 'york-web/components/primitive'
import { GridContainer, GridColumn } from 'york-web/components/simple'

import Geolocation from '../components/Geolocation'
import { props } from '../assets/data'

import Tabs from './Tabs'
import Phone from './Phone'
import Profile from './Profile'

const StyledGridContainer = styled(GridContainer)`
  margin-right: auto;
  margin-left: auto;
`

const StyledMenu = styled.div`
  position: relative;
  z-index: 1;
  background-color: ${colors.white};
`

const StyledStickyMenu = styled.div`
  position: sticky;
  top: 0;
  background-color: ${colors.white};
`

const StyledLevelOne = styled(View)`
  height: ${uiPoint * 9}px;
  align-items: center;
  justify-content: space-between;
`

const StyledLevelTwo = styled.div`
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`

const StyledLevelThree = styled.div`
  position: relative;
  z-index: -1;
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

const StyledMiscMenuItem = styled.div`
  margin-left: ${sizes[3]}px;
`

export default function DesktopHeader({ levelOneMenu, levelTwoMenu, logo }) {
  const [activeLevelTwoMenu, setLevelTwoMenu] = React.useState(0)
  const [activeLevelThreeMenu, setLevelThreeMenu] = React.useState(0)

  const resetLevelThreeMenu = React.useCallback(() => setLevelThreeMenu(0))

  const levelThreeMenu = levelTwoMenu[activeLevelTwoMenu].subMenu

  const {
    isProfileAvailable,
    isLoggedIn,
    isPlusSubscriber,
    defaultTab,
    selectedRegion,
    components: { Logo },
    content: { phone, tabs },
  } = props

  return (
    <>
      <StyledMenu>
        <StyledGridContainer>
          <GridColumn columns={12}>
            <StyledLevelOne>
              <View alignItems="center">
                {Logo && (
                  <>
                    <Logo />
                    <Separator width={3} />
                  </>
                )}
                <Tabs {...props} />
              </View>
              <View alignItems="center">
                {selectedRegion && (
                  <StyledMiscMenuItem>
                    <Geolocation
                      selectedValue={levelOneMenu.geo.selectedValue}
                    />
                  </StyledMiscMenuItem>
                )}
                {phone && (
                  <StyledMiscMenuItem>
                    <Phone phone={phone} />
                  </StyledMiscMenuItem>
                )}
                {isProfileAvailable && (
                  <StyledMiscMenuItem>
                    <Profile {...props} />
                  </StyledMiscMenuItem>
                )}
              </View>
            </StyledLevelOne>
          </GridColumn>
        </StyledGridContainer>
      </StyledMenu>
      <StyledStickyMenu>
        <StyledLevelTwo>
          <StyledGridContainer>
            <GridColumn columns={12}>
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
            </GridColumn>
          </StyledGridContainer>
        </StyledLevelTwo>
        {levelThreeMenu && levelThreeMenu.length > 0 && (
          <StyledLevelThree>
            <StyledGridContainer>
              <GridColumn columns={12}>
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
              </GridColumn>
            </StyledGridContainer>
          </StyledLevelThree>
        )}
      </StyledStickyMenu>
    </>
  )
}
