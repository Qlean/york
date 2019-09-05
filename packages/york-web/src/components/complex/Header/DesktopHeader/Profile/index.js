import React from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { Text, View } from 'york-web/components/primitive'

import LoginIcon from '../../assets/login.svg'
import ProfileIcon from '../../assets/profile.svg'

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
  isLoggedIn,
  isPlusSubscriber,
  content: { profile },
}) {
  return isLoggedIn ? (
    <Dropdown items={profile}>
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
