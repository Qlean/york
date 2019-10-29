import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { sizes, uiPoint, transitions, borderRadiuses } from 'york-web/utils'

import { Link } from 'york-web/components/primitive'

import GooglePlay from './components/GooglePlay'
import AppStore from './components/AppStore'

const storeIcons = {
  google: <GooglePlay />,
  apple: <AppStore />,
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  background: ${colors.ash};
  height: ${sizes[8]}px;
  width: ${uiPoint * 24}px;
  border-radius: ${borderRadiuses.small};
  padding: 0 ${sizes[2]}px;

  & > svg > path {
    transition: ${transitions.meduim};
  }

  &:hover > svg > path {
    fill: ${colors.smoke};
  }
`

const AppStoreButton = ({ store, ...rest }) => (
  <StyledLink rank={0} target="_blank" {...rest}>
    {storeIcons[store]}
  </StyledLink>
)

AppStoreButton.propTypes = {
  store: PropTypes.oneOf(['apple', 'google']).isRequired,
}

export default AppStoreButton
