import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { uiPoint, sizes } from 'york-web/utils'
import { View, Separator } from 'york-web/components/primitive'
import { GridContainer, GridColumn } from 'york-web/components/simple'

import Geolocation from '../components/Geolocation'
import { props } from '../assets/data'
import { menuItemShape } from '../utils'

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
    selectedRegion,
    selectedLevelOneItem,
    selectedLevelTwoItem,
    components: { Logo },
    content: { phone, menu },
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
                {...props}
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
                  {...props}
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

DesktopHeader.defaultProps = {
  selectedLevelOneItem: null,
  selectedLevelTwoItem: null,
  selectedProfileItem: null,
  selectedRegion: null,
  callbacks: {},
  components: {},
}

DesktopHeader.propTypes = {
  isProfileAvailable: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isPlusSubscriber: PropTypes.bool.isRequired,
  defaultTab: PropTypes.string.isRequired,
  selectedLevelOneItem: PropTypes.string,
  selectedLevelTwoItem: PropTypes.string,
  selectedProfileItem: PropTypes.string,
  selectedRegion: PropTypes.string,
  callbacks: PropTypes.objectOf(PropTypes.func.isRequired),
  components: PropTypes.objectOf(PropTypes.elementType.isRequired),
  content: PropTypes.shape({
    phone: PropTypes.string,
    ///// proper shape
    regions: PropTypes.array.isRequired,
    tabs: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
    profile: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
    menu: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
  }).isRequired,
}
