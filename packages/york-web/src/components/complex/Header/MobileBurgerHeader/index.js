import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { View, Separator, Text } from 'york-web/components/primitive'
import { Button } from 'york-web/components/simple'
import { uiPoint, transitions, sizes } from 'york-web/utils'

import { headerPropTypes } from '../utils'
import SubMenu from './SubMenu'
import Region from './Region'

import LoginIcon from '../assets/login.svg'
import ProfileIcon from '../assets/profile.svg'
import BurgerOpenedIcon from '../assets/burgerOpened.svg'
import BurgerClosedIcon from '../assets/burgerClosed.svg'

import MenuItem from '../MenuItem'

import ArrowIcon from './assets/arrow.svg'

const StyledMobileBurgerHeader = styled.div`
  min-height: 100%;
  background-color: ${colors.white};
  user-select: none;
`

const StyledArrowIconContainer = styled.div`
  flex-shrink: 0;
  transition: ${transitions.medium};
  ${({ isSelected }) => isSelected && 'transform: rotate(-180deg);'}
`

const StyledIcon = styled.div`
  flex-shrink: 0;
`

const StyledBurgerButton = styled(Button)`
  padding: 8px 20px 7px 10px;
`

const StyledTabsContainer = styled(View)`
  border-bottom: 1px solid ${colors.silver};
`

const StyledTab = styled(Text)`
  flex-flow: 1;
  padding: ${sizes[2]}px;
  transition: ${transitions.medium};
  ${({ isSelected }) => isSelected && `box-shadow: 0 1px 0 ${colors.black}`};
`

const StyledMenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${uiPoint * 9}px;
  padding: 0 ${sizes[4]}px;
  box-sizing: border-box;
  overflow: hidden;
`

const StyledMenuItemContent = styled(View)`
  width: 100%;
  overflow: hidden;
`

const StyledMenuItemText = styled(Text)`
  color: ${({ isSelected }) => (isSelected ? colors.green : colors.coal)};
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const StyledFooter = styled.div`
  border-top: 1px solid ${colors.silver};
  margin-top: auto;
`

// Компенсируем ширину икноки (24) минус уже существующий отступ (10)
const StyledProfileSubmenu = styled.div`
  padding-left: 14px;
`

export default function MobileBurgerHeader({
  isOpened,
  onCloseHandler,
  isLoggedIn,
  isProfileAvailable,
  defaultTab,
  selectedRegion,
  selectedLevelOneItem,
  selectedLevelTwoItem,
  selectedProfileItem,
  callbacks,
  callbacks: { onRegionChange, onLogin },
  components,
  components: { Logo },
  content: { tabs, regions, profile },
}) {
  const [isProfileActive, setProfileActive] = useState(false)
  const [activeTabName, setActiveTabName] = useState(defaultTab)

  const withFooter = isProfileAvailable || selectedRegion
  const { items } = tabs.find(({ name }) => name === activeTabName)

  return (
    <StyledMobileBurgerHeader flexDirection="column">
      <View alignItems="center" justifyContent="space-between">
        <View alignItems="center">
          <Separator width={4} />
          {Logo && <Logo />}
        </View>
        <View alignItems="center">
          <StyledBurgerButton
            rank={0}
            name="closeBurgerMenu"
            isDisabled={false}
            onClick={onCloseHandler}
          >
            {isOpened ? <BurgerClosedIcon /> : <BurgerOpenedIcon />}
          </StyledBurgerButton>
        </View>
      </View>
      <StyledTabsContainer justifyContent="center">
        {tabs.map(({ name, title }) => {
          const isSelected = activeTabName === name
          return (
            <StyledTab
              preset="link"
              key={name}
              color={isSelected ? 'coal' : 'grey'}
              onClick={() => setActiveTabName(name)}
              isSelected={isSelected}
            >
              {title}
            </StyledTab>
          )
        })}
      </StyledTabsContainer>
      <Separator height={3} />
      {items.map(item => {
        const withSubMenu = item.items && !!item.items.length
        const isSelected = item.name === selectedLevelOneItem
        return (
          <div key={item.name}>
            <StyledMenuItem
              as={MenuItem}
              components={components}
              callbacks={callbacks}
              item={item}
            >
              <StyledMenuItemText isSelected={isSelected}>
                {item.title}
              </StyledMenuItemText>
              {withSubMenu && (
                <>
                  <Separator width={2} />
                  <StyledArrowIconContainer isSelected={isSelected}>
                    <ArrowIcon />
                  </StyledArrowIconContainer>
                </>
              )}
            </StyledMenuItem>
            {withSubMenu && isSelected && (
              <SubMenu
                components={components}
                callbacks={callbacks}
                items={item.items}
                selectedItem={selectedLevelTwoItem}
              />
            )}
          </div>
        )
      })}
      <Separator height={3} />
      {withFooter && (
        <StyledFooter>
          <Separator height={3} />
          {isProfileAvailable && (
            <>
              {isLoggedIn ? (
                <>
                  <StyledMenuItem
                    onClick={() => setProfileActive(!isProfileActive)}
                  >
                    <StyledMenuItemContent>
                      <StyledIcon>
                        <ProfileIcon />
                      </StyledIcon>
                      <Separator width={2} />
                      <StyledMenuItemText isSelected={isProfileActive}>
                        Профиль
                      </StyledMenuItemText>
                    </StyledMenuItemContent>
                    <Separator width={2} />
                    <StyledArrowIconContainer isSelected={isProfileActive}>
                      <ArrowIcon />
                    </StyledArrowIconContainer>
                  </StyledMenuItem>
                  {isProfileActive && (
                    <StyledProfileSubmenu>
                      <SubMenu
                        components={components}
                        callbacks={callbacks}
                        items={profile}
                        selectedItem={selectedProfileItem}
                      />
                    </StyledProfileSubmenu>
                  )}
                </>
              ) : (
                <StyledMenuItem onClick={onLogin}>
                  <StyledMenuItemContent>
                    <StyledIcon>
                      <LoginIcon />
                    </StyledIcon>
                    <Separator width={2} />
                    <StyledMenuItemText>Войти</StyledMenuItemText>
                  </StyledMenuItemContent>
                </StyledMenuItem>
              )}
            </>
          )}
          {selectedRegion && (
            <Region
              regions={regions}
              onRegionChange={onRegionChange}
              selectedRegion={selectedRegion}
            />
          )}
          <Separator height={3} />
        </StyledFooter>
      )}
    </StyledMobileBurgerHeader>
  )
}

MobileBurgerHeader.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  onCloseHandler: PropTypes.func.isRequired,
  ...headerPropTypes,
}
