import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { colors, formatPhone, formatPhoneHref } from '@qlean/york-core'
import { View, Separator, Text } from 'york-web/components/primitive'
import { Button } from 'york-web/components/simple'
import {
  uiPoint,
  sizes,
  transitions,
  zIndexes,
  hideScrollBar,
} from 'york-web/utils'

import { headerPropTypes, scrollHelper } from '../utils'
import MenuItem from '../MenuItem'
import Region from '../Region'

import BurgerOpenedIcon from './assets/burgerOpened.svg'
import BurgerClosedIcon from './assets/burgerClosed.svg'
import MobileBurgerHeader from './MobileBurgerHeader'
import Modal from './Modal'

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

  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    pointer-events: none;
  }

  ::before {
    left: 0;
    width: ${sizes[4]}px;
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.85) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  ::after {
    right: 0;
    width: ${sizes[4]}px;
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
  flex-shrink: 0;
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

const StyledPhoneText = styled(Text)`
  font-weight: bold;
  letter-spacing: 0.5px;
`

export default function MobileHeader(props) {
  const {
    selectedRegion,
    phone,
    defaultTab,
    selectedLevelOneItem,
    selectedLevelTwoItem,
    callbacks,
    callbacks: { onRegionChange },
    components,
    components: { Link, Logo },
    content: { tabs, regions },
  } = props

  const [burgerActive, toggleBurger] = useState(false)
  const [isModalShow, setModalShow] = useState(false)

  const levelTwoContainerRef = useRef()
  const levelThreeContainerRef = useRef()

  const tab = tabs.find(({ name }) => name === defaultTab)
  const menu = tab.items
  const levelTwoMenu = selectedLevelOneItem
    ? menu.find(({ name }) => name === selectedLevelOneItem)
    : null
  const levelTwoMenuItems = (levelTwoMenu && levelTwoMenu.items) || []

  return (
    <>
      {isModalShow && (
        <Modal name="mobileHeaderModal">
          <MobileBurgerHeader
            {...props}
            isOpened={isModalShow}
            onRequestClose={() => {
              setModalShow(false)
              toggleBurger(false)
            }}
          />
        </Modal>
      )}
      <StyledMobileHeader name="mobileHeader">
        <StyledTopMenu alignItems="center" justifyContent="space-between">
          <View alignItems="center">
            <Separator width={4} />
            <Link href="/">
              <StyledLogo>
                <Logo />
              </StyledLogo>
            </Link>
            <Separator width={2} />
            {selectedRegion && (
              <Region
                items={regions}
                selectedItem={selectedRegion}
                onChange={onRegionChange}
              />
            )}
            {!selectedRegion && phone && (
              <Link href={formatPhoneHref(phone)}>
                <StyledPhoneText preset="caption">
                  {formatPhone(phone)}
                </StyledPhoneText>
              </Link>
            )}
          </View>
          <View alignItems="center">
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
            <View>
              <StyledMenu>
                {menu.map(menuItem => (
                  <StyledMenuItem
                    key={menuItem.name}
                    components={components}
                    callbacks={callbacks}
                    item={menuItem}
                    onClick={e =>
                      scrollHelper(
                        levelTwoContainerRef.current,
                        e.currentTarget,
                      )
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
              </StyledMenu>
            </View>
          </StyledScroller>
        </StyledLevelOneScrollerContainer>
        {levelTwoMenuItems.length > 0 && (
          <StyledLevelTwoScrollerContainer>
            <StyledScroller ref={levelThreeContainerRef}>
              <View>
                <StyledMenu>
                  {levelTwoMenuItems.map(item => (
                    <StyledMenuItem
                      key={item.name}
                      components={components}
                      callbacks={callbacks}
                      item={item}
                      onClick={e => {
                        scrollHelper(
                          levelThreeContainerRef.current,
                          e.currentTarget,
                        )
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
                </StyledMenu>
              </View>
            </StyledScroller>
          </StyledLevelTwoScrollerContainer>
        )}
      </StyledMobileHeader>
    </>
  )
}

MobileHeader.propTypes = headerPropTypes
