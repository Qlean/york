import React from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { View, Separator, Text } from 'york-web/components/primitive'

import ClearedButton from '../components/ClearedButton'
import IconBurger from '../assets/IconBurger'

// FIXME: иконка с белым фоном, переделать с прозрачным
import IconArrow from '../assets/arrow.svg'

const Root = styled(View)`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
`

const Logo = styled.img`
  display: block;
`

const BurgerButton = styled(ClearedButton)`
  padding: 8px 20px 7px 10px;
`

const Burger = styled(IconBurger)`
  display: block;
  transition: transform 0.3s;
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
`

const MenuItem = styled(Text)`
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
          <TabMenuItem isActive={idx === 0}>{menuItem.title}</TabMenuItem>
        ))}
      </TabsContainer>
      <View flexDirection="column">
        {levelTwoMenu.map((menuItem, idx) => {
          const { subMenu } = menuItem
          const isSubMenuExist = subMenu && !!subMenu.length
          return (
            <View flexDirection="column" key={menuItem.title}>
              <View alignItems="center">
                <View flexDirection="column">
                  <Separator height={2} />
                  <View>
                    <Separator width={4} />
                    <MenuItem>{menuItem.title}</MenuItem>
                  </View>
                  <Separator height={2} />
                </View>
                {isSubMenuExist && (
                  <MenuItemIconWrap>
                    <Separator width={2} />
                    <IconArrow />
                    <Separator width={4} />
                  </MenuItemIconWrap>
                )}
              </View>

              {isSubMenuExist &&
                activeLevelTwoMenu === idx &&
                subMenu.map(subMenuItem => <View>{subMenuItem.title}</View>)}
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
