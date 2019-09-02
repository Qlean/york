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

const LevelOneContainer = styled.div`
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

const ScrollerContainer = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 40px;
    background-image: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0.85) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    pointer-events: none;
  }
`

const Scroller = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const LevelTwoMenuItem = styled.div`
  flex-shrink: 0;
  padding: 12px 10px 13px;
  color: ${({ isActive }) => (isActive ? colors.green : colors.coal)};
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  text-transform: uppercase;
  cursor: pointer;

  &:first-child {
    padding-left: 20px;
  }
`

const LevelThreeMenuItem = styled(LevelTwoMenuItem)`
  font-weight: normal;
  text-transform: initial;
  letter-spacing: 0.4px;
`

export default function MobileHeader(props) {
  const { logo, levelOneMenu, levelTwoMenu } = props
  const [burgerActive, toggleBurger] = React.useState(false)
  const [activeLevelTwoMenu, setLevelTwoMenu] = React.useState(0)
  const [activeLevelThreeMenu, setLevelThreeMenu] = React.useState(0)
  const resetLevelThreeMenu = React.useCallback(() => setLevelThreeMenu(0))
  const levelThreeMenu = levelTwoMenu[activeLevelTwoMenu].subMenu

  return (
    <Root>
      <LevelOneContainer>
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
      </LevelOneContainer>
      <ScrollerContainer>
        <Scroller>
          {levelTwoMenu.map((menuItem, idx) => (
            <LevelTwoMenuItem
              key={menuItem.title}
              isActive={idx === activeLevelTwoMenu}
              onClick={() => {
                setLevelTwoMenu(idx)
                resetLevelThreeMenu()
              }}
            >
              {menuItem.title}
            </LevelTwoMenuItem>
          ))}
        </Scroller>
      </ScrollerContainer>
      {levelThreeMenu && levelThreeMenu.length > 0 && (
        <ScrollerContainer>
          <Scroller>
            {levelThreeMenu.map((menuItem, idx) => (
              <LevelThreeMenuItem
                key={menuItem.title}
                isActive={idx === activeLevelThreeMenu}
                onClick={() => setLevelThreeMenu(idx)}
              >
                {menuItem.title}
              </LevelThreeMenuItem>
            ))}
          </Scroller>
        </ScrollerContainer>
      )}
    </Root>
  )
}
