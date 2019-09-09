import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { View, Separator, Text } from 'york-web/components/primitive'
import { Button } from 'york-web/components/simple'
import { transitions } from 'york-web/utils'

import { headerPropTypes } from '../utils'
import MenuRow from './MenuRow'
import Region from './Region'

import LoginIcon from '../assets/login.svg'
import ProfileIcon from '../assets/profile.svg'

import BurgerOpened from '../assets/burgerOpened.svg'
import BurgerClosed from '../assets/burgerClosed.svg'

import MenuItem from '../MenuItem'

const StyledMobileBurgerHeader = styled(View)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 1px;
  background-color: ${colors.white};
  overflow-y: auto;
`

const StyledIconArrow = styled.span`
  width: 10px;
  height: 10px;
  border-right: 2px solid ${colors.grey};
  border-top: 2px solid ${colors.grey};
  border-radius: 2px;
  transform: rotate(135deg);
`

const StyledIconArrowWrap = styled(View)`
  transition: ${transitions.medium};
  ${({ isSelected }) =>
    isSelected ? 'transform:  translateY(3px) rotate(-180deg);' : ''}
`

const StyledBurgerButton = styled(Button)`
  padding: 8px 20px 7px 10px;
`

const StyledTabsContainer = styled(View)`
  border-bottom: 1px solid ${colors.silver};
`

const StyledTabMenuItem = styled(Text)`
  flex-flow: 1;
  padding: 10px;
  ${({ isSelected }) => isSelected && `box-shadow: 0 1px 0 ${colors.black}`};
  color: ${({ isSelected }) => (isSelected ? colors.coal : colors.grey)};
  transition: ${transitions.medium};
`

const StyledMenuItemText = styled(Text)`
  color: ${({ isSelected }) => (isSelected ? colors.green : colors.coal)};
  text-transform: uppercase;
`

const StyledMenuItemIconWrap = styled(View)`
  margin-left: auto;
`

const StyledFooter = styled.div`
  border-top: 1px solid ${colors.silver};
  margin-top: auto;
`

const StyledMenuItem = styled(MenuItem)`
  flex-grow: 1;
  display: flex;
  align-items: center;
`

export default function MobileBurgerHeader({
  isOpened,
  onCloseHandler,
  isLoggedIn,
  isProfileAvailable,
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
  const [activeTab, setActiveTab] = useState(0)

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
            {isOpened ? <BurgerClosed /> : <BurgerOpened />}
          </StyledBurgerButton>
        </View>
      </View>
      <StyledTabsContainer justifyContent="center">
        {tabs.map(({ name, title }, idx) => (
          <StyledTabMenuItem
            preset="link"
            key={name}
            onClick={() => setActiveTab(idx)}
            isSelected={activeTab === idx}
          >
            {title}
          </StyledTabMenuItem>
        ))}
      </StyledTabsContainer>

      {tabs[activeTab] && (
        <View flexDirection="column">
          {tabs[activeTab].items.map(item => {
            const isSubMenuExist = item.items && !!item.items.length
            const isCurrentActive = item.name === selectedLevelOneItem

            return (
              <View key={item.name} flexDirection="column">
                <View>
                  <StyledMenuItem
                    components={components}
                    callbacks={callbacks}
                    item={item}
                  >
                    <View flexDirection="column">
                      <Separator height={2} />
                      <View>
                        <Separator width={4} />
                        <StyledMenuItemText isSelected={isCurrentActive}>
                          {item.title}
                        </StyledMenuItemText>
                      </View>
                      <Separator height={2} />
                    </View>
                    {isSubMenuExist && (
                      <StyledMenuItemIconWrap>
                        <Separator width={2} />
                        <StyledIconArrowWrap isSelected={isCurrentActive}>
                          <StyledIconArrow />
                        </StyledIconArrowWrap>
                        <Separator width={4} />
                      </StyledMenuItemIconWrap>
                    )}
                  </StyledMenuItem>
                </View>
                <View flexDirection="column">
                  {isSubMenuExist && isCurrentActive && (
                    <MenuRow
                      components={components}
                      callbacks={callbacks}
                      items={item.items}
                      selectedItem={selectedLevelTwoItem}
                    />
                  )}
                </View>
              </View>
            )
          })}
        </View>
      )}
      <StyledFooter>
        {isProfileAvailable && (
          <View flexDirection="column">
            <Separator height={2} />
            {isLoggedIn ? (
              <View flexDirection="column">
                <View
                  onClick={() => setProfileActive(!isProfileActive)}
                  alignItems="center"
                >
                  <View flexDirection="column">
                    <Separator height={2} />
                    <View>
                      <Separator width={4} />
                      <ProfileIcon />
                      <Separator width={2} />
                      <StyledMenuItemText>Профиль</StyledMenuItemText>
                    </View>
                    <Separator height={2} />
                  </View>
                  <StyledMenuItemIconWrap>
                    <Separator width={2} />
                    <StyledIconArrowWrap isSelected={isProfileActive}>
                      <StyledIconArrow />
                    </StyledIconArrowWrap>
                    <Separator width={4} />
                  </StyledMenuItemIconWrap>
                </View>
                {isProfileActive && (
                  <View>
                    <Separator width={3} />
                    <View flexDirection="column">
                      <MenuRow
                        components={components}
                        callbacks={callbacks}
                        items={profile}
                        selectedItem={selectedProfileItem}
                      />
                    </View>
                  </View>
                )}
              </View>
            ) : (
              <View onClick={onLogin}>
                <Separator width={4} />
                <LoginIcon />
                <Separator width={2} />
                <StyledMenuItemText>Войти</StyledMenuItemText>
              </View>
            )}
            <Separator height={2} />
          </View>
        )}
        {selectedRegion && (
          <Region
            regions={regions}
            onRegionChange={onRegionChange}
            selectedRegion={selectedRegion}
          />
        )}
      </StyledFooter>
    </StyledMobileBurgerHeader>
  )
}

MobileBurgerHeader.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  onCloseHandler: PropTypes.func.isRequired,
  ...headerPropTypes,
}
