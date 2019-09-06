import React from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { View, Separator, Text } from 'york-web/components/primitive'
import { transitions } from 'york-web/utils'

import ClearedButton from './ClearedButton'
import MobileBurgerHeader from './MobileBurgerHeader'
import Geolocation from './Geolocation'
import Modal from './Modal'

import IconProfile from './assets/IconProfile'
import IconBurger from './assets/IconBurger'

import { scrollHelper } from './utils'

import MenuItem from './MenuItem'

const Root = styled.header`
  background-color: ${colors.white};
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
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);

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

const MenuItemWrap = styled(MenuItem)`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 12px 10px 13px;

  &:first-child {
    padding-left: 20px;
  }
`

const StyledMenuItemText = styled(Text)`
  color: ${({ isSelected }) => (isSelected ? colors.green : colors.coal)};
  font-size: 13px;
  transition: ${transitions.medium};
`

const LevelTwoMenuItemText = styled(StyledMenuItemText)`
  text-transform: uppercase;
`

const LevelThreeMenuItemText = styled(StyledMenuItemText)`
  font-weight: normal;
  letter-spacing: 0.4px;
`

const ScrollerItemPlaceholder = styled.div`
  flex-shrink: 0;
  width: 33vw;
`

export default function MobileHeader(props) {
  const {
    isProfileAvailable,
    selectedRegion,
    selectedLevelOneItem,
    selectedLevelTwoItem,
    callbacks,
    components,
    components: { Logo },
    content: { phone, menu },
  } = props

  const [burgerActive, toggleBurger] = React.useState(false)
  const [isModalShow, setModalShow] = React.useState(false)

  const levelTwoContainerRef = React.useRef()
  const levelThreeContainerRef = React.useRef()

  const levelTwoMenu = selectedLevelOneItem
    ? menu.find(({ name }) => name === selectedLevelOneItem)
    : null
  const levelTwoMenuItems = (levelTwoMenu && levelTwoMenu.items) || []

  return (
    <>
      {isModalShow && (
        <Modal>
          <MobileBurgerHeader
            {...props}
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
            {selectedRegion && (
              <Geolocation
                isMobileVersion
                selectedValue={selectedRegion}
                cities={[
                  { name: 'Санкт-Петербург', value: 'spb' },
                  { name: 'Москва', value: 'msk' },
                ]}
                onChangeHandler={() =>
                  console.log('прокинь-ка хендлер, паренёк')
                }
              />
            )}
            {/* {phone && <div>{phone}</div>} */}
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
            {menu.map(menuItem => (
              <MenuItemWrap
                key={menuItem.name}
                components={components}
                callbacks={callbacks}
                item={menuItem}
                onClick={evt =>
                  scrollHelper(levelTwoContainerRef.current, evt.target)
                }
              >
                <LevelTwoMenuItemText
                  preset="link"
                  isSelected={menuItem.name === selectedLevelOneItem}
                >
                  {menuItem.title}
                </LevelTwoMenuItemText>
              </MenuItemWrap>
            ))}
            <ScrollerItemPlaceholder />
          </Scroller>
        </ScrollerContainer>
        {levelTwoMenuItems.length > 0 && (
          <ScrollerContainer>
            <Scroller ref={levelThreeContainerRef}>
              {levelTwoMenuItems.map(item => (
                <MenuItemWrap
                  key={item.name}
                  components={components}
                  callbacks={callbacks}
                  item={item}
                  onClick={evt => {
                    scrollHelper(levelThreeContainerRef.current, evt.target)
                  }}
                >
                  <LevelThreeMenuItemText
                    preset="caption"
                    isSelected={item.name === selectedLevelTwoItem}
                  >
                    {item.title}
                  </LevelThreeMenuItemText>
                </MenuItemWrap>
              ))}
              <ScrollerItemPlaceholder />
            </Scroller>
          </ScrollerContainer>
        )}
      </Root>
    </>
  )
}
