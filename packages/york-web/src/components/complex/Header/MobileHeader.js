import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { View, Separator, Text } from 'york-web/components/primitive'
import { Button } from 'york-web/components/simple'
import { sizes, transitions } from 'york-web/utils'

import { headerPropTypes, scrollHelper } from './utils'

import MobileBurgerHeader from './MobileBurgerHeader'
import MenuItem from './MenuItem'
import Region from './Region'
import Modal from './Modal'

import LoginIcon from './assets/login.svg'
import BurgerOpened from './assets/burgerOpened.svg'
import BurgerClosed from './assets/burgerClosed.svg'
import IconProfile from './assets/profile.svg'

const StyledMobileHeader = styled.header`
  background-color: ${colors.white};
`

const StyledBurgerButton = styled(Button)`
  padding: 0 ${sizes[4]}px 0px ${sizes[2]}px;
`

const StyledScrollerContainer = styled.div`
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

const StyledScroller = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const StyledMenuItem = styled(MenuItem)`
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

const StyledLevelTwoMenuItemText = styled(StyledMenuItemText)`
  text-transform: uppercase;
`

const StyledLevelThreeMenuItemText = styled(StyledMenuItemText)`
  font-weight: normal;
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
        <View alignItems="center" justifyContent="space-between">
          <View alignItems="center">
            <Separator width={4} />
            {Logo && <Logo />}
            <Separator width={2} />
            {selectedRegion && (
              <Region
                isMobile
                items={regions}
                selectedItem={selectedRegion}
                onChange={onRegionChange}
              />
            )}
            {/* {phone && <div>{phone}</div>} */}
          </View>
          <View alignItems="center">
            {isLoggedIn ? (
              <Button
                rank={0}
                name="openProfile"
                isDisabled={false}
                onClick={() => console.log('btn')}
              >
                <IconProfile />
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
            <StyledBurgerButton
              rank={0}
              name="openBurgerMenu"
              isDisabled={false}
              onClick={() => {
                toggleBurger(!burgerActive)
                setModalShow(!isModalShow)
              }}
            >
              {burgerActive ? <BurgerClosed /> : <BurgerOpened />}
            </StyledBurgerButton>
          </View>
        </View>
        <StyledScrollerContainer>
          <StyledScroller ref={levelTwoContainerRef}>
            {menu.map(menuItem => (
              <StyledMenuItem
                key={menuItem.name}
                components={components}
                callbacks={callbacks}
                item={menuItem}
                onClick={evt =>
                  scrollHelper(levelTwoContainerRef.current, evt.target)
                }
              >
                <StyledLevelTwoMenuItemText
                  preset="link"
                  isSelected={menuItem.name === selectedLevelOneItem}
                >
                  {menuItem.title}
                </StyledLevelTwoMenuItemText>
              </StyledMenuItem>
            ))}
            <StyledScrollerItemPlaceholder />
          </StyledScroller>
        </StyledScrollerContainer>
        {levelTwoMenuItems.length > 0 && (
          <StyledScrollerContainer>
            <StyledScroller ref={levelThreeContainerRef}>
              {levelTwoMenuItems.map(item => (
                <StyledMenuItem
                  key={item.name}
                  components={components}
                  callbacks={callbacks}
                  item={item}
                  onClick={evt => {
                    scrollHelper(levelThreeContainerRef.current, evt.target)
                  }}
                >
                  <StyledLevelThreeMenuItemText
                    preset="caption"
                    isSelected={item.name === selectedLevelTwoItem}
                  >
                    {item.title}
                  </StyledLevelThreeMenuItemText>
                </StyledMenuItem>
              ))}
              <StyledScrollerItemPlaceholder />
            </StyledScroller>
          </StyledScrollerContainer>
        )}
      </StyledMobileHeader>
    </>
  )
}

MobileHeader.propTypes = headerPropTypes
