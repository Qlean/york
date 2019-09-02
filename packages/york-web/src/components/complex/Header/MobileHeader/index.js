import React from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { transitions } from '@qlean/york-web'

import Geolocation from '../components/Geolocation'
import ClearedButton from '../components/ClearedButton'
import IconProfile from '../assets/IconProfile'
import IconBurger from '../assets/IconBurger'

const Root = styled.header`
  background-color: ${colors.white};
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
`

const LeftSlot = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`

const RightSlot = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.img`
  display: block;
`

const GeolocationWrap = styled.div`
  margin-left: 10px;
`

const ProfileIcon = styled(IconProfile)`
  display: block;
`

const ProfileButton = styled(ClearedButton)``

const BurgerButton = styled(ClearedButton)`
  padding: 8px 20px 7px 10px;
`

const Burger = styled(IconBurger)`
  display: block;
  transition: transform 0.3s;
  ${({ isOpen }) => (isOpen ? 'transform: rotate(-270deg);' : '')}
`

export default function MobileHeader(props) {
  const [burgerActive, toggleBurger] = React.useState(false)
  const { logo, levelOneMenu } = props

  return (
    <Root>
      <Inner>
        <LeftSlot>
          <Logo src={logo.url} alt={logo.alt} />
          <GeolocationWrap>
            <Geolocation
              isMobileVersion
              selectedValue={levelOneMenu.geo.selectedValue}
            />
          </GeolocationWrap>
        </LeftSlot>
        <RightSlot>
          <ProfileButton type="button" onClick={() => console.log('btn')}>
            <ProfileIcon />
          </ProfileButton>
          <BurgerButton
            type="button"
            onClick={() => toggleBurger(!burgerActive)}
          >
            <Burger isOpen={burgerActive} />
          </BurgerButton>
        </RightSlot>
      </Inner>
    </Root>
  )
}
