import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { View, Separator, Text } from 'york-web/components/primitive'
import { Button } from 'york-web/components/simple'
import { uiPoint, sizes, transitions } from 'york-web/utils'

import { headerPropTypes, scrollHelper } from './utils'

import MobileBurgerHeader from './MobileBurgerHeader'
import MenuItem from './MenuItem'
import Region from './Region'
import Modal from './Modal'

import LoginIcon from './assets/login.svg'
import IconBurger from './assets/IconBurger'
import IconProfile from './assets/IconProfile'

const StyledMobileHeader = styled.header`
  background-color: ${colors.white};
`

const StyledLogo = styled.div`
  flex-shrink: 0;
`

const StyledProfileIcon = styled(IconProfile)`
  display: block;
`

const StyledBurgerButton = styled(Button)`
  padding: 0 ${sizes[4]}px 0px ${sizes[2]}px;
`

const StyledBurgerIcon = styled(IconBurger)`
  display: block;
  transition: ${transitions.medium};
  ${({ isOpen }) => (isOpen ? 'transform: rotate(-270deg);' : '')}
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
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
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
              />
            )}
            {/* {phone && <div>{phone}</div>} */}
          </View>
          <View alignItems="center">
            {!isLoggedIn ? (
              <Button
                rank={0}
                name="openProfile"
                isDisabled={false}
                onClick={() => console.log('btn')}
              >
                <StyledProfileIcon />
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
              <StyledBurgerIcon isOpen={burgerActive} />
            </StyledBurgerButton>
          </View>
        </View>
        <StyledScrollerContainer>
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
                  <StyledLevelTwoMenuItemText
                    preset="link"
                    isSelected={menuItem.name === selectedLevelOneItem}
                  >
                    {menuItem.title}
                  </StyledLevelTwoMenuItemText>
                </StyledMenuItem>
              ))}
              <StyledScrollerItemPlaceholder />
            </StyledMenu>
          </StyledScroller>
        </StyledScrollerContainer>
        {levelTwoMenuItems.length > 0 && (
          <StyledScrollerContainer>
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
                    <StyledLevelThreeMenuItemText
                      preset="caption"
                      isSelected={item.name === selectedLevelTwoItem}
                    >
                      {item.title}
                    </StyledLevelThreeMenuItemText>
                  </StyledMenuItem>
                ))}
                <StyledScrollerItemPlaceholder />
              </StyledMenu>
            </StyledScroller>
          </StyledScrollerContainer>
        )}
      </StyledMobileHeader>
    </>
  )
}

MobileHeader.propTypes = headerPropTypes
