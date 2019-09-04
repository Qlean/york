import React from 'react'
import styled from 'styled-components'

import { Text, View, Separator } from 'york-web/components/primitive'

import LoginIcon from '../../assets/login.svg'

import Dropdown from './Dropdown'
import locales from './locales'

const StyledLogin = styled(View)`
  user-select: none;
  cursor: pointer;
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
        <LoginIcon />
        <Separator width={1} />
        <StyledProfileText preset="caption">
          {locales.profile}
        </StyledProfileText>
      </View>
    </Dropdown>
  ) : (
    <StyledLogin alignItems="center">
      <LoginIcon />
      <Separator width={1} />
      <Text preset="caption">{locales.login}</Text>
    </StyledLogin>
  )
}
