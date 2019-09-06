import React from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { View, Separator, Text } from 'york-web/components/primitive'
import { Button } from 'york-web/components/simple'
import { transitions } from 'york-web/utils'

import LoginIcon from './assets/login.svg'
import ProfileIcon from './assets/profile.svg'
import MobileGeoIcon from './assets/mobileGeo.svg'
import IconBurger from './assets/IconBurger'
import MenuItem from './MenuItem'

// FIXME: иконка с белым фоном, переделать с прозрачным
import IconArrow from './assets/arrow.svg'

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
const Burger = styled(IconBurger)`
  display: block;
  transition: ${transitions.medium};
  ${({ isOpen }) => (isOpen ? 'transform: rotate(-270deg);' : '')}
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
  display: flex;
  align-items: center;
`

const StyledInnerMenuItem = styled(MenuItem)`
  display: flex;
`

const StyledInnerMenuText = styled(Text)`
  color: ${({ isSelected }) => (isSelected ? colors.green : colors.coal)};
  transition: ${transitions.medium};
`

export default function MobileBurgerHeader(props) {
  const {
    isLoggedIn,
    onCloseHandler,
    isOpened,
    selectedLevelOneItem,
    selectedLevelTwoItem,
    callbacks,
    components,
    components: { Logo },
    defaultTab,
    content: { tabs, menu },
    selectedRegion,
  } = props
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
            isDisable
            onClick={onCloseHandler}
          >
            <Burger isOpen={isOpened} />
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

              {isSubMenuExist &&
                isCurrentActive &&
                item.items.map(subMenuItem => (
                  <StyledInnerMenuItem
                    key={subMenuItem.name}
                    components={components}
                    callbacks={callbacks}
                    item={subMenuItem}
                  >
                    <Separator width={8} />
                    <View flexDirection="column">
                      <Separator height={1} />
                      <StyledInnerMenuText
                        isSelected={subMenuItem.name === selectedLevelTwoItem}
                        color={
                          subMenuItem.name === selectedLevelTwoItem
                            ? 'green'
                            : undefined
                        }
                      >
                        {subMenuItem.title}
                      </StyledInnerMenuText>
                      <Separator height={1} />
                    </View>
                  </StyledInnerMenuItem>
                ))}
            </View>
          )
        })}
      </View>

      <Footer>
        <View flexDirection="column">
          <Separator height={2} />
          {isLoggedIn ? (
            <View>
              <Separator width={4} />
              <ProfileIcon />
              <Separator width={2} />
              <MenuItemText>Профиль</MenuItemText>
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
          <View flexDirection="column">
            <Separator height={2} />
            <View>
              <Separator width={4} />
              <MobileGeoIcon />
              <Separator width={2} />

              <select onChange={() => {}} value={selectedRegion}>
                {[
                  { name: 'Санкт-Петербург', value: 'spb' },
                  { name: 'Москва', value: 'msk' },
                ].map(item => (
                  <option key={item.value} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>

              <MenuItemText>Санкт-петербург</MenuItemText>
            </View>
            <Separator height={2} />
          </View>
        )}
      </Footer>
    </Root>
  )
}
