import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { View, Separator, Text } from 'york-web/components/primitive'
import { Button } from 'york-web/components/simple'
import { transitions } from 'york-web/utils'

import { headerPropTypes } from '../utils'
import MenuRow from './MenuRow'

import LoginIcon from '../assets/login.svg'
import ProfileIcon from '../assets/profile.svg'
import MobileGeoIcon from '../assets/mobileGeo.svg'
import BurgerOpened from '../assets/burgerOpened.svg'
import BurgerClosed from '../assets/burgerClosed.svg'

import MenuItem from '../MenuItem'

// FIXME: иконка с белым фоном, переделать с прозрачным
import IconArrow from '../assets/arrow.svg'

const Root = styled(View)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 1px;
  background-color: ${colors.white};
  overflow-y: auto;
`

const IconArrowWrap = styled(View)`
  transition: ${transitions.medium};
  ${({ isSelected }) => (isSelected ? 'transform: rotate(-180deg);' : '')}
`

const BurgerButton = styled(Button)`
  padding: 8px 20px 7px 10px;
`

const TabsContainer = styled(View)`
  border-bottom: 1px solid ${colors.silver};
`

const TabMenuItem = styled(Text)`
  flex-flow: 1;
  padding: 10px;
  ${({ isSelected }) => isSelected && `box-shadow: 0 1px 0 ${colors.black}`};
  color: ${({ isSelected }) => (isSelected ? colors.coal : colors.grey)};
  transition: ${transitions.medium};
`

const MenuItemText = styled(Text)`
  color: ${({ isSelected }) => (isSelected ? colors.green : colors.coal)};
  text-transform: uppercase;
`

const MenuItemIconWrap = styled(View)`
  margin-left: auto;
`

const Footer = styled.div`
  border-top: 1px solid ${colors.silver};
  margin-top: auto;
`

const StyledMenuItem = styled(MenuItem)`
  flex-grow: 1;
  display: flex;
  align-items: center;
`

// FIXME: убрать дублирование кода.
// Регион сильно схож с десктопным, нужно придумать общий компонент чтоле
const RegionWrap = styled(View)`
  position: relative;
`

const RegionSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  font-size: 14px;
  cursor: pointer;
`

export default function MobileBurgerHeader({
  isOpened,
  onCloseHandler,
  isLoggedIn,
  isProfileAvailable,
  selectedRegion,
  defaultTab,
  selectedLevelOneItem,
  selectedLevelTwoItem,
  selectedProfileItem,
  callbacks,
  callbacks: { onRegionChange },
  components,
  components: { Logo },
  content: { tabs, regions, profile },
}) {
  const menu = tabs.find(({ name }) => name === defaultTab).items

  const [isProfileActive, setProfileActive] = useState(false)

  return (
    <Root flexDirection="column">
      <View alignItems="center" justifyContent="space-between">
        <View alignItems="center">
          <Separator width={4} />
          {Logo && <Logo />}
        </View>
        <View alignItems="center">
          <BurgerButton
            rank={0}
            name="closeBurgerMenu"
            isDisabled={false}
            onClick={onCloseHandler}
          >
            {isOpened ? <BurgerClosed /> : <BurgerOpened />}
          </BurgerButton>
        </View>
      </View>
      <TabsContainer justifyContent="center">
        {tabs.map(({ name, title, href }) => (
          <TabMenuItem
            preset="link"
            key={name}
            href={href}
            isSelected={defaultTab === name}
          >
            {title}
          </TabMenuItem>
        ))}
      </TabsContainer>
      <View flexDirection="column">
        {menu.map(item => {
          const isSubMenuExist = item.items && !!item.items.length
          const isCurrentActive = item.name === selectedLevelOneItem

          return (
            <View key={item.name} flexDirection="column">
              <View>
                <StyledMenuItem
                  components={components}
                  callbacks={callbacks}
                  item={item}
                >
                  <View flexDirection="column">
                    <Separator height={2} />
                    <View>
                      <Separator width={4} />
                      <MenuItemText isSelected={isCurrentActive}>
                        {item.title}
                      </MenuItemText>
                    </View>
                    <Separator height={2} />
                  </View>
                  {isSubMenuExist && (
                    <MenuItemIconWrap>
                      <Separator width={2} />
                      <IconArrowWrap isSelected={isCurrentActive}>
                        <IconArrow />
                      </IconArrowWrap>
                      <Separator width={4} />
                    </MenuItemIconWrap>
                  )}
                </StyledMenuItem>
              </View>
              <View flexDirection="column">
                {isSubMenuExist && isCurrentActive && (
                  <MenuRow
                    components={components}
                    callbacks={callbacks}
                    items={item.items}
                    selectedItem={selectedLevelTwoItem}
                  />
                )}
              </View>
            </View>
          )
        })}
      </View>

      <Footer>
        <View flexDirection="column">
          <Separator height={2} />
          {isLoggedIn ? (
            <View flexDirection="column">
              <View
                onClick={() => setProfileActive(!isProfileActive)}
                alignItems="center"
              >
                <View flexDirection="column">
                  <Separator height={2} />
                  <View>
                    <Separator width={4} />
                    <ProfileIcon />
                    <Separator width={2} />
                    <MenuItemText>Профиль</MenuItemText>
                  </View>
                  <Separator height={2} />
                </View>
                <MenuItemIconWrap>
                  <Separator width={2} />
                  <IconArrowWrap isSelected={isProfileActive}>
                    <IconArrow />
                  </IconArrowWrap>
                  <Separator width={4} />
                </MenuItemIconWrap>
              </View>
              {isProfileActive && (
                <View>
                  <Separator width={3} />
                  <View flexDirection="column">
                    <MenuRow
                      components={components}
                      callbacks={callbacks}
                      items={profile}
                      selectedItem={selectedProfileItem}
                    />
                  </View>
                </View>
              )}
            </View>
          ) : (
            <View>
              <Separator width={4} />
              <LoginIcon />
              <Separator width={2} />
              <MenuItemText>Войти</MenuItemText>
            </View>
          )}
          <Separator height={2} />
        </View>

        {selectedRegion && (
          <RegionWrap flexDirection="column">
            <Separator height={2} />
            <View>
              <Separator width={4} />
              <MobileGeoIcon />
              <Separator width={2} />
              <RegionSelect
                onChange={evt => onRegionChange(evt.target.value)}
                value={selectedRegion}
              >
                {regions.map(region => (
                  <option key={region.name} value={region.name}>
                    {region.title}
                  </option>
                ))}
              </RegionSelect>
              <MenuItemText>
                {regions.find(region => region.name === selectedRegion).title}
              </MenuItemText>
            </View>
            <Separator height={2} />
          </RegionWrap>
        )}
      </Footer>
    </Root>
  )
}

MobileBurgerHeader.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  onCloseHandler: PropTypes.func.isRequired,
  ...headerPropTypes,
}
