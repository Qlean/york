import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { View, Separator, Text } from 'york-web/components/primitive'

import ClearedButton from './ClearedButton'
import IconBurger from '../assets/IconBurger'

const Root = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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
  padding: 10px;
  ${({ isActive }) => isActive && `box-shadow: 0 1px 0 ${colors.black}`};
  color: ${({ isActive }) => (isActive ? colors.coal : colors.grey)};
  font-weight: 500;
  text-transform: uppercase;
`

const Modal = ({ onCloseHandler, logo, isOpened, levelOneMenu }) =>
  ReactDOM.createPortal(
    <Root aria-modal aria-hidden tabIndex={-1} role="dialog">
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
      <TabsContainer justifyContent="space-around">
        {levelOneMenu.tabs.map((menuItem, idx) => (
          <TabMenuItem isActive={idx === 0}>{menuItem.title}</TabMenuItem>
        ))}
      </TabsContainer>
    </Root>,
    document.body,
  )

export default Modal
