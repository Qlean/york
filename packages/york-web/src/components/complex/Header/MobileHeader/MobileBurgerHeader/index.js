import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { View, Separator, Text } from 'york-web/components/primitive'
import { Button } from 'york-web/components/simple'
import { uiPoint, transitions, sizes } from 'york-web/utils'

import BurgerOpenedIcon from '../assets/burgerOpened.svg'
import BurgerClosedIcon from '../assets/burgerClosed.svg'
import ProfileIcon from '../../assets/profile.svg'
import LoginIcon from '../../assets/login.svg'
import { headerPropTypes } from '../../utils'
import MenuItem from '../../MenuItem'
import locales from '../../locales'

import ArrowIcon from './assets/arrow.svg'
import SubMenu from './SubMenu'
import Region from './Region'

const StyledMobileBurgerHeader = styled.div`
  min-height: 100%;
  background-color: ${colors.white};
  user-select: none;
`

const StyledArrowIconContainer = styled.div`
  flex-shrink: 0;
  transition: ${transitions.medium};
  ${({ isActive }) => !isActive && 'transform: rotate(-180deg);'}
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
  padding: ${sizes[2]}px;
  text-align: center;
  transition: ${transitions.medium};
  ${({ isSelected }) => isSelected && `box-shadow: 0 1px 0 ${colors.black}`};
  ${({ tabsCount }) => `width ${100 / tabsCount}%;`};
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
  onRequestClose,
  isLoggedIn,
  isProfileAvailable,
  defaultTab,
  selectedRegion,
  callbacks,
  callbacks: { onRegionChange, onLogin },
  components,
  components: { Link, Logo },
  content: { tabs, regions, profile },
}) {
  const [activeItems, setActiveItems] = useState({})
  const setActiveItem = (name, value) =>
    setActiveItems(prevItems => ({ ...prevItems, [name]: value }))
  const isProfileActive = activeItems.profile

  const [selectedTabName, setSelectedTabName] = useState(defaultTab)

  const tab = tabs.find(({ name }) => name === defaultTab)
  const withFooter = isProfileAvailable || selectedRegion
  const { items } = tabs.find(({ name }) => name === selectedTabName)

  return (
    <StyledMobileBurgerHeader flexDirection="column">
      <View alignItems="center" justifyContent="space-between">
        <View alignItems="center">
          <Separator width={4} />
          <Link href={tab.href}>
            <Logo />
          </Link>
        </View>
        <View alignItems="center">
          <StyledBurgerButton
            rank={0}
            name="closeBurgerMenu"
            isDisabled={false}
            onClick={onRequestClose}
          >
            {isOpened ? <BurgerClosedIcon /> : <BurgerOpenedIcon />}
          </StyledBurgerButton>
        </View>
      </View>
      <StyledTabsContainer justifyContent="center">
        {tabs.map(({ name, title }) => {
          const isSelected = selectedTabName === name
          return (
            <StyledTab
              preset="link"
              key={name}
              color={isSelected ? 'coal' : 'grey'}
              tabsCount={tabs.length}
              isSelected={isSelected}
              onClick={() => setSelectedTabName(name)}
            >
              {title}
            </StyledTab>
          )
        })}
      </StyledTabsContainer>
      <Separator height={3} />
      {items.map(item => {
        const withSubMenu = item.items && !!item.items.length
        const { name } = item
        const isActive = activeItems[name]
        return (
          <div key={name}>
            {withSubMenu ? (
              <>
                <StyledMenuItem
                  item={item}
                  onClick={() => setActiveItem(name, !isActive)}
                >
                  <StyledMenuItemText>{item.title}</StyledMenuItemText>
                  <Separator width={2} />
                  <StyledArrowIconContainer isActive={isActive}>
                    <ArrowIcon />
                  </StyledArrowIconContainer>
                </StyledMenuItem>
                {isActive && (
                  <SubMenu
                    components={components}
                    callbacks={callbacks}
                    items={item.items}
                    onRequestClose={onRequestClose}
                  />
                )}
              </>
            ) : (
              <>
                <StyledMenuItem
                  as={MenuItem}
                  components={components}
                  callbacks={callbacks}
                  item={item}
                  onClick={onRequestClose}
                >
                  <StyledMenuItemText>{item.title}</StyledMenuItemText>
                </StyledMenuItem>
              </>
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
                    onClick={() => setActiveItem('profile', !isProfileActive)}
                  >
                    <StyledMenuItemContent>
                      <StyledIcon>
                        <ProfileIcon />
                      </StyledIcon>
                      <Separator width={2} />
                      <StyledMenuItemText>{locales.profile}</StyledMenuItemText>
                    </StyledMenuItemContent>
                    <Separator width={2} />
                    <StyledArrowIconContainer isActive={isProfileActive}>
                      <ArrowIcon />
                    </StyledArrowIconContainer>
                  </StyledMenuItem>
                  {isProfileActive && (
                    <StyledProfileSubmenu>
                      <SubMenu
                        components={components}
                        callbacks={callbacks}
                        items={profile}
                        onRequestClose={onRequestClose}
                      />
                    </StyledProfileSubmenu>
                  )}
                </>
              ) : (
                <StyledMenuItem
                  onClick={() => {
                    onLogin()
                    onRequestClose()
                  }}
                >
                  <StyledMenuItemContent>
                    <StyledIcon>
                      <LoginIcon />
                    </StyledIcon>
                    <Separator width={2} />
                    <StyledMenuItemText>{locales.login}</StyledMenuItemText>
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
  onRequestClose: PropTypes.func.isRequired,
  ...headerPropTypes,
}