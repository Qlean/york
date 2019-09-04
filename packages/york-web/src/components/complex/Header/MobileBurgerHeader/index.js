import React from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { View, Separator, Text } from 'york-web/components/primitive'
import { transitions } from 'york-web/utils'

import ClearedButton from '../components/ClearedButton'
import IconBurger from '../assets/IconBurger'

// FIXME: иконка с белым фоном, переделать с прозрачным
import IconArrow from '../assets/arrow.svg'

const Root = styled(View)`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
`

const IconArrowWrap = styled(IconArrow)`
  transition: ${transitions.medium};
  ${({ isActive }) => (isActive ? 'transform: rotate(-180deg);' : '')}
`

const Logo = styled.img`
  display: block;
`

const BurgerButton = styled(ClearedButton)`
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
  ${({ isActive }) => isActive && `box-shadow: 0 1px 0 ${colors.black}`};
  color: ${({ isActive }) => (isActive ? colors.coal : colors.grey)};
  font-weight: 500;
  text-transform: uppercase;
  transition: ${transitions.medium};
`

const MenuItem = styled(Text)`
  color: ${({ isActive }) => (isActive ? colors.green : colors.coal)};
  text-transform: uppercase;
`

const MenuItemIconWrap = styled(View)`
  margin-left: auto;
`

const Footer = styled.div`
  border-top: 1px solid ${colors.silver};
  margin-top: auto;
`

export default function MobileBurgerHeader({
  onCloseHandler,
  logo,
  isOpened,
  levelOneMenu,
  levelTwoMenu,
}) {
  const [activeLevelOneMenu, setLevelOneMenu] = React.useState(0)
  const [activeLevelTwoMenu, setLevelTwoMenu] = React.useState(0)

  return (
    <Root flexDirection="column">
      <View alignItems="center" justifyContent="space-between">
        <View alignItems="center">
          <Separator width={4} />
          <Logo src={logo.url} alt={logo.alt} />
        </View>
        <View alignItems="center">
          <BurgerButton type="button" onClick={onCloseHandler}>
            <Burger isOpen={isOpened} />
          </BurgerButton>
        </View>
      </View>
      <TabsContainer>
        {levelOneMenu.tabs.map((menuItem, idx) => (
          <TabMenuItem
            key={menuItem.title}
            isActive={activeLevelOneMenu === idx}
            onClick={() => setLevelOneMenu(idx)}
          >
            {menuItem.title}
          </TabMenuItem>
        ))}
      </TabsContainer>
      <View flexDirection="column">
        {levelTwoMenu.map((menuItem, idx) => {
          const { subMenu } = menuItem
          const isSubMenuExist = subMenu && !!subMenu.length
          const isCurrentActive = activeLevelTwoMenu === idx
          return (
            <View
              key={menuItem.title}
              flexDirection="column"
              onClick={() => setLevelTwoMenu(isCurrentActive ? -1 : idx)}
            >
              <View alignItems="center">
                <View flexDirection="column">
                  <Separator height={2} />
                  <View>
                    <Separator width={4} />
                    <MenuItem isActive={isCurrentActive}>
                      {menuItem.title}
                    </MenuItem>
                  </View>
                  <Separator height={2} />
                </View>
                {isSubMenuExist && (
                  <MenuItemIconWrap>
                    <Separator width={2} />
                    <IconArrowWrap isActive={isCurrentActive} />
                    <Separator width={4} />
                  </MenuItemIconWrap>
                )}
              </View>

              {isSubMenuExist &&
                isCurrentActive &&
                subMenu.map(subMenuItem => (
                  <View
                    key={subMenuItem.title}
                    onClick={() => console.log('submenu', subMenuItem.title)}
                  >
                    <Separator width={8} />
                    <View flexDirection="column">
                      <Separator height={1} />
                      <Text>{subMenuItem.title}</Text>
                      <Separator height={1} />
                    </View>
                  </View>
                ))}
            </View>
          )
        })}
      </View>

      <Footer>
        <View flexDirection="column">
          <Separator height={2} />
          <View>
            <Separator width={4} />
            <MenuItem>ВОЙТИ</MenuItem>
          </View>
          <Separator height={2} />
        </View>

        <View flexDirection="column">
          <Separator height={2} />
          <View>
            <Separator width={4} />
            <MenuItem>Санкт-петербург</MenuItem>
          </View>
          <Separator height={2} />
        </View>
      </Footer>
    </Root>
  )
}
