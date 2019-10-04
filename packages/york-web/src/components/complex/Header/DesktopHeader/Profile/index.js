import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { AnalyticsContext, eventActionTypes } from '@qlean/york-analytics'

import { Text, View } from 'york-web/components/primitive'

import { menuItemShape, componentsShape } from '../../utils'

import locales from '../../locales'
import LoginIcon from '../../assets/login.svg'
import ProfileIcon from '../../assets/profile.svg'
import ProfilePlusIcon from '../../assets/profilePlus.svg'

import Dropdown from './Dropdown'

const StyledLogin = styled(View)`
  user-select: none;
  cursor: pointer;
  color: ${colors.coal};
  fill: ${colors.coal};
  :hover {
    color: ${colors.ash};
    fill: ${colors.ash};
  }
`

const StyledProfileText = styled(Text)`
  user-select: none;
`

export default function Profile({
  components,
  callbacks,
  isLoggedIn,
  isPlusSubscriber,
  isProfileAvailable,
  items,
  selectedItem,
}) {
  const analyticsContext = useContext(AnalyticsContext)
  return isLoggedIn ? (
    <Dropdown
      components={components}
      callbacks={callbacks}
      items={
        isProfileAvailable
          ? items
          : items.filter(({ name }) => name === 'logout')
      }
      selectedItem={selectedItem}
    >
      <View alignItems="center">
        {isPlusSubscriber ? <ProfilePlusIcon /> : <ProfileIcon />}
        <StyledProfileText preset="caption">
          {locales.profile}
        </StyledProfileText>
      </View>
    </Dropdown>
  ) : (
    <StyledLogin
      alignItems="center"
      onClick={e => {
        if (analyticsContext) {
          const { trackEvent, category, analyticsRoute } = analyticsContext
          trackEvent({
            category,
            label: 'loginButton',
            action: eventActionTypes.click,
            analyticsRoute,
          })
        }
        callbacks.onLogin(e)
      }}
    >
      <LoginIcon />
      <Text preset="caption" color="inherit">
        {locales.login}
      </Text>
    </StyledLogin>
  )
}

Profile.defaultProps = {
  selectedItem: null,
}

Profile.propTypes = {
  components: componentsShape.isRequired,
  callbacks: PropTypes.shape({
    onLogin: PropTypes.func.isRequired,
  }).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isPlusSubscriber: PropTypes.bool.isRequired,
  isProfileAvailable: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
  selectedItem: PropTypes.string,
}
