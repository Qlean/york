import React from 'react'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { transitions } from '@qlean/york-web'

import IconProfile from './assets/IconProfile'

const Root = styled.header`
  background-color: ${colors.white};
`
const Inner = styled.div`
  display: flex;
  padding-left: 20px;
`

const LeftSlot = styled.div`
  display: flex;
  margin-right: auto;
`

const RightSlot = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.img`
  display: block;
`

const ProfileIcon = styled(IconProfile)`
  display: block;
`

const ProfileWrap = styled.div`
  margin-right: 10px;
`

const BurgerButton = styled.button`
  padding: 8px 20px 7px 10px;
  border: 0;
  background-color: transparent;
`

const Burger = styled.div`
  width: 30px;
  height: 30px;
  background-color: tomato;
`

export default function MobileHeader(props) {
  const { logo } = props
  return (
    <Root>
      <Inner>
        <LeftSlot>
          <Logo src={logo.url} alt={logo.alt} />
        </LeftSlot>
        <RightSlot>
          <ProfileWrap>
            <ProfileIcon />
          </ProfileWrap>
          <BurgerButton type="button" onClick={() => console.log('btn')}>
            <Burger />
          </BurgerButton>
        </RightSlot>
      </Inner>
    </Root>
  )
}
