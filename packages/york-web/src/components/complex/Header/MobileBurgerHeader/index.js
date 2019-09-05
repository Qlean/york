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
  min-height: 100vh;
  height: 1px;
  background-color: ${colors.white};
  overflow-y: auto;
`

const IconArrowWrap = styled(View)`
  transition: ${transitions.medium};
  ${({ isActive }) => (isActive ? 'transform: rotate(-180deg);' : '')}
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
  ${({ isSelected }) => isSelected && `box-shadow: 0 1px 0 ${colors.black}`};
  color: ${({ isSelected }) => (isSelected ? colors.coal : colors.grey)};
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

export default function MobileBurgerHeader(props) {
  const {
    onCloseHandler,
    isOpened,
    selectedLevelOneItem,
    selectedLevelTwoItem,
    components: { Logo },
    defaultTab,
    content: { tabs, menu },
  } = props
  return (
    <Root flexDirection="column">
      <View alignItems="center" justifyContent="space-between">
        <View alignItems="center">
          <Separator width={4} />
          {Logo && <Logo />}
        </View>
        <View alignItems="center">
          <BurgerButton type="button" onClick={onCloseHandler}>
            <Burger isOpen={isOpened} />
          </BurgerButton>
        </View>
      </View>
      <TabsContainer justifyContent="center">
        {tabs.map(({ name, title, href }) => (
          <TabMenuItem key={name} href={href} isSelected={defaultTab === name}>
            {title}
          </TabMenuItem>
        ))}
      </TabsContainer>
      <View flexDirection="column">
        {menu.map(item => {
          const isSubMenuExist = item.items && !!item.items.length
          const isCurrentActive = item.name === selectedLevelOneItem

          return (
            <View
              key={item.name}
              flexDirection="column"
              // onClick={() => setLevelTwoMenu(isCurrentActive ? -1 : idx)}
            >
              <View alignItems="center">
                <View flexDirection="column">
                  <Separator height={2} />
                  <View>
                    <Separator width={4} />
                    <MenuItem isActive={isCurrentActive}>{item.title}</MenuItem>
                  </View>
                  <Separator height={2} />
                </View>
                {isSubMenuExist && (
                  <MenuItemIconWrap>
                    <Separator width={2} />
                    <IconArrowWrap isActive={isCurrentActive}>
                      <IconArrow />
                    </IconArrowWrap>
                    <Separator width={4} />
                  </MenuItemIconWrap>
                )}
              </View>

              {isSubMenuExist &&
                isCurrentActive &&
                item.items.map(subMenuItem => (
                  <View
                    key={subMenuItem.name}
                    // onClick={() => console.log('submenu', subMenuItem.title)}
                  >
                    <Separator width={8} />
                    <View flexDirection="column">
                      <Separator height={1} />
                      <Text
                        color={
                          subMenuItem.name === selectedLevelTwoItem
                            ? 'green'
                            : undefined
                        }
                      >
                        {subMenuItem.title}
                      </Text>
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
