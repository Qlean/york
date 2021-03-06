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
import ProfilePlusIcon from '../../ProfilePlusIcon'

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

const StyledLoginText = styled(Text)`
  font-weight: 700;
`

const StyledProfileText = styled(Text)`
  font-weight: 700;
  user-select: none;
`

export default function Profile({
  components,
  callbacks,
  isLoggedIn,
  isPlusSubscriber,
  items,
  selectedItem,
}) {
  const analyticsContext = useContext(AnalyticsContext)
  return isLoggedIn ? (
    <Dropdown
      components={components}
      callbacks={callbacks}
      items={items}
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
          const { trackEvent, category } = analyticsContext
          trackEvent({
            category,
            label: 'login',
            action: eventActionTypes.click,
          })
        }
        callbacks.onLogin(e)
      }}
    >
      <LoginIcon />
      <StyledLoginText preset="caption" color="inherit">
        {locales.login}
      </StyledLoginText>
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
  items: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
  selectedItem: PropTypes.string,
}
