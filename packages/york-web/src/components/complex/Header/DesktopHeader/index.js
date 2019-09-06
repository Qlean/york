import React from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { media, uiPoint, sizes } from 'york-web/utils'
import { View, Separator } from 'york-web/components/primitive'
import { GridContainer, GridColumn } from 'york-web/components/simple'

import { headerPropTypes } from '../utils'
import Geolocation from '../Geolocation'

import Tabs from './Tabs'
import Phone from './Phone'
import Profile from './Profile'
import Menu from './Menu'

const StyledMenuContainer = styled.div`
  margin: 0 auto;
`

const StyledMenu = styled.div`
  position: relative;
  z-index: 1;
  background-color: ${colors.white};
  ${media.mobile('display:none;')}
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
  ${media.mobile('display:none;')}
`

const StyledLevelOneMenu = styled.div`
  margin: 0 auto;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`

const StyledLevelTwoMenu = styled.div`
  margin: 0 auto;
  position: relative;
  z-index: -1;
`

export default function DesktopHeader({
  isProfileAvailable,
  isLoggedIn,
  isPlusSubscriber,
  selectedProfileItem,
  selectedRegion,
  selectedLevelOneItem,
  selectedLevelTwoItem,
  defaultTab,
  components,
  components: { Logo },
  callbacks,
  content: { phone, menu, tabs, profile },
}) {
  const levelTwoMenu = selectedLevelOneItem
    ? menu.find(({ name }) => name === selectedLevelOneItem)
    : null
  const levelTwoMenuItems = (levelTwoMenu && levelTwoMenu.items) || []

  return (
    <>
      <StyledMenu>
        <StyledMenuContainer>
          <GridContainer>
            <GridColumn columns={12}>
              <StyledTopMenu>
                <View alignItems="center">
                  {Logo && (
                    <>
                      <Logo />
                      <Separator width={3} />
                    </>
                  )}
                  <Tabs defaultTab={defaultTab} tabs={tabs} />
                </View>
                <View alignItems="center">
                  {selectedRegion && (
                    <StyledTopMenuItem>
                      <Geolocation
                        ////// rework
                        /// weird cursor
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
                      <Profile
                        components={components}
                        callbacks={callbacks}
                        isLoggedIn={isLoggedIn}
                        isPlusSubscriber={isPlusSubscriber}
                        items={profile}
                        selectedItem={selectedProfileItem}
                      />
                    </StyledTopMenuItem>
                  )}
                </View>
              </StyledTopMenu>
            </GridColumn>
          </GridContainer>
        </StyledMenuContainer>
      </StyledMenu>
      <StyledStickyMenu>
        <StyledLevelOneMenu>
          <GridContainer>
            <GridColumn columns={12}>
              <Menu
                components={components}
                callbacks={callbacks}
                items={menu}
                selectedItem={selectedLevelOneItem}
                textPreset="link"
              />
            </GridColumn>
          </GridContainer>
        </StyledLevelOneMenu>
        {Boolean(levelTwoMenuItems.length) && (
          <StyledLevelTwoMenu>
            <GridContainer>
              <GridColumn columns={12}>
                <Menu
                  components={components}
                  callbacks={callbacks}
                  items={levelTwoMenuItems}
                  selectedItem={selectedLevelTwoItem}
                  textPreset="caption"
                />
              </GridColumn>
            </GridContainer>
          </StyledLevelTwoMenu>
        )}
      </StyledStickyMenu>
    </>
  )
}

DesktopHeader.propTypes = headerPropTypes
