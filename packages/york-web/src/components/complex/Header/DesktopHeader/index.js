import React from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { uiPoint, sizes } from 'york-web/utils'
import { View, Separator } from 'york-web/components/primitive'
import { GridContainer, GridColumn } from 'york-web/components/simple'

import Geolocation from '../components/Geolocation'
import { props } from '../assets/data'

import Tabs from './Tabs'
import Phone from './Phone'
import Profile from './Profile'
import Menu from './Menu'

const StyledGridContainer = styled(GridContainer)`
  margin: 0 auto;
`

const StyledMenu = styled.div`
  position: relative;
  z-index: 1;
  background-color: ${colors.white};
`

const StyledTopMenu = styled(View)`
  height: ${uiPoint * 9}px;
  align-items: center;
  justify-content: space-between;
`

const StyledTopMenuItem = styled.div`
  margin-left: ${sizes[3]}px;
`

const StyledStickyMenu = styled.div`
  position: sticky;
  top: 0;
  background-color: ${colors.white};
`

const StyledLevelOneMenu = styled.div`
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`

const StyledLevelTwoMenu = styled.div`
  position: relative;
  z-index: -1;
`

export default function DesktopHeader() {
  const {
    isProfileAvailable,
    isLoggedIn,
    isPlusSubscriber,
    defaultTab,
    selectedRegion,
    selectedLevelOneItem,
    selectedLevelTwoItem,
    components: { Logo },
    content: { phone, tabs, menu },
  } = props

  const levelTwoMenu = selectedLevelOneItem
    ? menu.find(({ name }) => name === selectedLevelOneItem)
    : null
  const levelTwoMenuItems = (levelTwoMenu && levelTwoMenu.items) || []

  return (
    <>
      <StyledMenu>
        <StyledGridContainer>
          <GridColumn columns={12}>
            <StyledTopMenu>
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
                  <StyledTopMenuItem>
                    <Geolocation
                      ////// rework
                      selectedValue={selectedRegion}
                      cities={[
                        { name: 'Санкт-Петербург', value: 'spb' },
                        { name: 'Москва', value: 'msk' },
                      ]}
                    />
                  </StyledTopMenuItem>
                )}
                {phone && (
                  <StyledTopMenuItem>
                    <Phone phone={phone} />
                  </StyledTopMenuItem>
                )}
                {isProfileAvailable && (
                  <StyledTopMenuItem>
                    <Profile {...props} />
                  </StyledTopMenuItem>
                )}
              </View>
            </StyledTopMenu>
          </GridColumn>
        </StyledGridContainer>
      </StyledMenu>
      <StyledStickyMenu>
        <StyledLevelOneMenu>
          <StyledGridContainer>
            <GridColumn columns={12}>
              <Menu
                items={menu}
                selectedItem={selectedLevelOneItem}
                textPreset="link"
              />
            </GridColumn>
          </StyledGridContainer>
        </StyledLevelOneMenu>
        {Boolean(levelTwoMenuItems.length) && (
          <StyledLevelTwoMenu>
            <StyledGridContainer>
              <GridColumn columns={12}>
                <Menu
                  items={levelTwoMenuItems}
                  selectedItem={selectedLevelTwoItem}
                  textPreset="caption"
                />
              </GridColumn>
            </StyledGridContainer>
          </StyledLevelTwoMenu>
        )}
      </StyledStickyMenu>
    </>
  )
}
