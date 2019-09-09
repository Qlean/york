import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { View, Separator, Text } from 'york-web/components/primitive'
import { Button } from 'york-web/components/simple'
import { uiPoint, sizes, transitions, zIndexes } from 'york-web/utils'

import { headerPropTypes, scrollHelper, hideScrollBar } from './utils'

import MobileBurgerHeader from './MobileBurgerHeader'
import MenuItem from './MenuItem'
import Region from './Region'
import Modal from './Modal'

import LoginIcon from './assets/login.svg'
import BurgerOpenedIcon from './assets/burgerOpened.svg'
import BurgerClosedIcon from './assets/burgerClosed.svg'
import ProfileIcon from './assets/profile.svg'

const StyledMobileHeader = styled.div`
  z-index: ${zIndexes.header};
  position: relative;
  background-color: ${colors.white};
`

const StyledTopMenu = styled(View)`
  background-color: ${colors.white};
`

const StyledLogo = styled.div`
  flex-shrink: 0;
`

const StyledBurgerButton = styled(Button)`
  padding: 0 ${sizes[4]}px 0px ${sizes[2]}px;
`

const StyledScrollerContainer = styled.div`
  position: relative;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  background-color: ${colors.white};

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

const StyledLevelOneScrollerContainer = styled(StyledScrollerContainer)`
  z-index: -1;
`

const StyledLevelTwoScrollerContainer = styled(StyledScrollerContainer)`
  z-index: -2;
`

const StyledScroller = styled.div`
  overflow-x: scroll;
  ${hideScrollBar}
`

const StyledMenu = styled(View)`
  padding: 0 ${sizes[4]}px;
`

const StyledMenuItem = styled(MenuItem)`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: ${uiPoint * 9}px;
  padding: 0 ${sizes[3]}px;
  transition: ${transitions.medium};
  user-select: none;
  :first-child {
    padding-left: 0;
  }
  :last-child {
    padding-right: 0;
  }
`

const StyledMenuItemText = styled(Text)`
  color: ${({ isSelected }) => (isSelected ? colors.green : colors.coal)};
  font-size: 13px;
  transition: ${transitions.medium};
`

const StyledLevelOneMenuItemText = styled(StyledMenuItemText)`
  text-transform: uppercase;
`

const StyledLevelTwoMenuItemText = styled(StyledMenuItemText)`
  letter-spacing: 0.4px;
`

const StyledScrollerItemPlaceholder = styled.div`
  flex-shrink: 0;
  width: 33vw;
`

export default function MobileHeader(props) {
  const {
    isLoggedIn,
    isProfileAvailable,
    selectedRegion,
    defaultTab,
    selectedLevelOneItem,
    selectedLevelTwoItem,
    callbacks,
    callbacks: { onRegionChange },
    components,
    components: { Logo },
    content: { tabs, regions },
  } = props

  const [burgerActive, toggleBurger] = useState(false)
  const [isModalShow, setModalShow] = useState(false)

  const levelTwoContainerRef = useRef()
  const levelThreeContainerRef = useRef()

  const menu = tabs.find(({ name }) => name === defaultTab).items
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
      <StyledMobileHeader>
        <StyledTopMenu alignItems="center" justifyContent="space-between">
          <View alignItems="center">
            <Separator width={4} />
            {Logo && (
              <>
                <StyledLogo>
                  <Logo />
                </StyledLogo>
                <Separator width={2} />
              </>
            )}
            {selectedRegion && (
              <Region
                items={regions}
                selectedItem={selectedRegion}
                onChange={onRegionChange}
                //////// vvvvvv
              />
            )}
            {/* {!selectedRegion && phone && <div>{phone}</div>} */}
          </View>
          <View alignItems="center">
            {isProfileAvailable && (
              <>
                {isLoggedIn ? (
                  <Button
                    rank={0}
                    name="openProfile"
                    isDisabled={false}
                    onClick={() => console.log('btn')}
                  >
                    <ProfileIcon />
                  </Button>
                ) : (
                  <Button
                    rank={0}
                    name="login"
                    isDisabled={false}
                    onClick={() => console.log('btn')}
                  >
                    <LoginIcon />
                  </Button>
                )}
              </>
            )}
            <StyledBurgerButton
              rank={0}
              name="openBurgerMenu"
              isDisabled={false}
              onClick={() => {
                toggleBurger(!burgerActive)
                setModalShow(!isModalShow)
              }}
            >
              {burgerActive ? <BurgerClosedIcon /> : <BurgerOpenedIcon />}
            </StyledBurgerButton>
          </View>
        </StyledTopMenu>
        <StyledLevelOneScrollerContainer>
          <StyledScroller ref={levelTwoContainerRef}>
            <StyledMenu>
              {menu.map(menuItem => (
                <StyledMenuItem
                  key={menuItem.name}
                  components={components}
                  callbacks={callbacks}
                  item={menuItem}
                  onClick={e =>
                    scrollHelper(levelTwoContainerRef.current, e.target)
                  }
                >
                  <StyledLevelOneMenuItemText
                    preset="link"
                    isSelected={menuItem.name === selectedLevelOneItem}
                  >
                    {menuItem.title}
                  </StyledLevelOneMenuItemText>
                </StyledMenuItem>
              ))}
              <StyledScrollerItemPlaceholder />
            </StyledMenu>
          </StyledScroller>
        </StyledLevelOneScrollerContainer>
        {levelTwoMenuItems.length > 0 && (
          <StyledLevelTwoScrollerContainer>
            <StyledScroller ref={levelThreeContainerRef}>
              <StyledMenu>
                {levelTwoMenuItems.map(item => (
                  <StyledMenuItem
                    key={item.name}
                    components={components}
                    callbacks={callbacks}
                    item={item}
                    onClick={e => {
                      scrollHelper(levelThreeContainerRef.current, e.target)
                    }}
                  >
                    <StyledLevelTwoMenuItemText
                      preset="caption"
                      isSelected={item.name === selectedLevelTwoItem}
                    >
                      {item.title}
                    </StyledLevelTwoMenuItemText>
                  </StyledMenuItem>
                ))}
                <StyledScrollerItemPlaceholder />
              </StyledMenu>
            </StyledScroller>
          </StyledLevelTwoScrollerContainer>
        )}
      </StyledMobileHeader>
    </>
  )
}

MobileHeader.propTypes = headerPropTypes
