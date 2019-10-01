import React from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { media, uiPoint, sizes, zIndexes } from 'york-web/utils'
import { View, Separator } from 'york-web/components/primitive'
import { GridContainer, GridColumn } from 'york-web/components/simple'

import { headerPropTypes } from '../utils'
import Region from '../Region'

import Tabs from './Tabs'
import Phone from './Phone'
import Profile from './Profile'
import Menu from './Menu'

const StyledMenuContainer = styled.div`
  margin: 0 auto;
`

const StyledMenu = styled.div`
  z-index: ${zIndexes.header};
  position: relative;
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
  z-index: ${zIndexes.stickyHeader};
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  ${media.mobile('display:none;')}
`

const StyledLevelOneMenu = styled.div`
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`

const StyledLevelTwoMenu = styled.div`
  border-bottom: 1px solid ${colors.whisper};
`

export default function DesktopHeader({
  isProfileAvailable,
  isLoggedIn,
  isPlusSubscriber,
  selectedProfileItem,
  selectedRegion,
  phone,
  defaultTab,
  selectedLevelOneItem,
  selectedLevelTwoItem,
  components,
  components: { Link, Logo },
  callbacks,
  callbacks: { onRegionChange },
  content: { tabs, regions, profile },
}) {
  const tab = tabs.find(({ name }) => name === defaultTab)
  const menu = tab.items
  const levelTwoMenu = selectedLevelOneItem
    ? menu.find(({ name }) => name === selectedLevelOneItem)
    : null
  const levelTwoMenuItems = (levelTwoMenu && levelTwoMenu.items) || []

  return (
    <>
      <StyledMenu name="desktopHeaderTop">
        <StyledMenuContainer>
          <GridContainer>
            <GridColumn columns={12}>
              <StyledTopMenu>
                <View alignItems="center">
                  <Link href="/">
                    <Logo />
                  </Link>
                  <Separator width={3} />
                  <Tabs defaultTab={defaultTab} tabs={tabs} />
                </View>
                <View alignItems="center">
                  {selectedRegion && (
                    <StyledTopMenuItem>
                      <Region
                        items={regions}
                        selectedItem={selectedRegion}
                        onChange={onRegionChange}
                      />
                    </StyledTopMenuItem>
                  )}
                  {phone && (
                    <StyledTopMenuItem>
                      <Phone phone={phone} />
                    </StyledTopMenuItem>
                  )}
                  <StyledTopMenuItem>
                    <Profile
                      components={components}
                      callbacks={callbacks}
                      isLoggedIn={isLoggedIn}
                      isPlusSubscriber={isPlusSubscriber}
                      isProfileAvailable={isProfileAvailable}
                      items={profile}
                      selectedItem={selectedProfileItem}
                    />
                  </StyledTopMenuItem>
                </View>
              </StyledTopMenu>
            </GridColumn>
          </GridContainer>
        </StyledMenuContainer>
      </StyledMenu>
      <StyledStickyMenu name="desktopHeaderSticky">
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
