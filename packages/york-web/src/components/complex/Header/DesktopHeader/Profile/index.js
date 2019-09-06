import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { Text, View } from 'york-web/components/primitive'

import LoginIcon from '../../assets/login.svg'
import ProfileIcon from '../../assets/profile.svg'
import { menuItemShape, componentsShape, callbacksShape } from '../../utils'

import Dropdown from './Dropdown'
import locales from './locales'

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
  profile,
}) {
  return isLoggedIn ? (
    <Dropdown items={profile} components={components} callbacks={callbacks}>
      <View alignItems="center">
        <ProfileIcon />
        <StyledProfileText preset="caption">
          {locales.profile}
        </StyledProfileText>
      </View>
    </Dropdown>
  ) : (
    <StyledLogin alignItems="center">
      <LoginIcon />
      <Text preset="caption" color="inherit">
        {locales.login}
      </Text>
    </StyledLogin>
  )
}

Profile.propTypes = {
  components: componentsShape.isRequired,
  callbacks: callbacksShape.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isPlusSubscriber: PropTypes.bool.isRequired,
  profile: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
}
