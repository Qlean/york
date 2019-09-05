import React from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { View, Separator } from 'york-web/components/primitive'
import { transitions } from 'york-web/utils'

import ClearedButton from '../components/ClearedButton'
import MobileBurgerHeader from '../MobileBurgerHeader'
import Geolocation from '../components/Geolocation'
import IconProfile from '../assets/IconProfile'
import IconBurger from '../assets/IconBurger'
import Modal from '../components/Modal'

import scrollHelper from './scrollHelper'

const Root = styled.header`
  background-color: ${colors.white};
`

const Logo = styled.img`
  display: block;
`

const ProfileIcon = styled(IconProfile)`
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

const ScrollerContainer = styled.div`
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    pointer-events: none;
  }

  &::before {
    left: 0;
    width: 20px;
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.85) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &::after {
    right: 0;
    width: 40px;
    background-image: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0.85) 0%,
      rgba(255, 255, 255, 0) 100%
    );
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
  transition: ${transitions.medium};

  &:first-child {
    padding-left: 20px;
  }
`

const LevelThreeMenuItem = styled(LevelTwoMenuItem)`
  font-weight: normal;
  text-transform: initial;
  letter-spacing: 0.4px;
`

const ScrollerItemPlaceholder = styled.div`
  flex-shrink: 0;
  width: 33vw;
`

export default function MobileHeader(props) {
  const {
    levelOneMenu,
    levelTwoMenu,
    components: { Logo },
  } = props
  const [burgerActive, toggleBurger] = React.useState(false)
  const [activeLevelTwoMenu, setLevelTwoMenu] = React.useState(0)
  const [activeLevelThreeMenu, setLevelThreeMenu] = React.useState(0)
  const [isModalShow, setModalShow] = React.useState(false)
  const resetLevelThreeMenu = React.useCallback(() => setLevelThreeMenu(0))
  const levelThreeMenu = levelTwoMenu[activeLevelTwoMenu].subMenu

  const levelTwoContainerRef = React.useRef()
  const levelThreeContainerRef = React.useRef()

  return (
    <>
      {isModalShow && (
        <Modal>
          <MobileBurgerHeader
            {...props}
            levelOneMenu={levelOneMenu}
            levelTwoMenu={levelTwoMenu}
            isOpened={isModalShow}
            onCloseHandler={() => {
              setModalShow(false)
              toggleBurger(false)
            }}
          />
        </Modal>
      )}
      <Root>
        <View alignItems="center" justifyContent="space-between">
          <View alignItems="center">
            <Separator width={4} />
            {Logo && <Logo />}
            <Separator width={2} />
            <Geolocation
              isMobileVersion
              selectedValue={levelOneMenu.geo.selectedValue}
              cities={levelOneMenu.geo.cities}
              onChangeHandler={() => console.log('прокинь-ка хендлер, паренёк')}
            />
          </View>
          <View alignItems="center">
            <ClearedButton type="button" onClick={() => console.log('btn')}>
              <ProfileIcon />
            </ClearedButton>
            <BurgerButton
              type="button"
              onClick={() => {
                toggleBurger(!burgerActive)
                setModalShow(!isModalShow)
              }}
            >
              <Burger isOpen={burgerActive} />
            </BurgerButton>
          </View>
        </View>
        <ScrollerContainer>
          <Scroller ref={levelTwoContainerRef}>
            {levelTwoMenu.map((menuItem, idx) => (
              <LevelTwoMenuItem
                key={menuItem.title}
                isActive={idx === activeLevelTwoMenu}
                onClick={evt => {
                  setLevelTwoMenu(idx)
                  resetLevelThreeMenu()
                  scrollHelper(levelTwoContainerRef.current, evt.target)
                }}
              >
                {menuItem.title}
              </LevelTwoMenuItem>
            ))}
            <ScrollerItemPlaceholder />
          </Scroller>
        </ScrollerContainer>
        {levelThreeMenu && levelThreeMenu.length > 0 && (
          <ScrollerContainer>
            <Scroller ref={levelThreeContainerRef}>
              {levelThreeMenu.map((menuItem, idx) => (
                <LevelThreeMenuItem
                  key={menuItem.title}
                  isActive={idx === activeLevelThreeMenu}
                  onClick={evt => {
                    setLevelThreeMenu(idx)
                    scrollHelper(levelThreeContainerRef.current, evt.target)
                  }}
                >
                  {menuItem.title}
                </LevelThreeMenuItem>
              ))}
              <ScrollerItemPlaceholder />
            </Scroller>
          </ScrollerContainer>
        )}
      </Root>
    </>
  )
}
