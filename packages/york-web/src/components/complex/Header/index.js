import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { media } from 'york-web/utils'
import { Link } from 'york-web/components/primitive'

import { menuItemShape } from './utils'

import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

const StyledMobileHeader = styled.div`
  ${media.desktop('display:none;')}
`

export default function Header({ components, ...rest }) {
  const props = {
    components: {
      Link,
      ...components,
    },
    ...rest,
  }
  return (
    <>
      <DesktopHeader {...props} />
      <StyledMobileHeader>
        <MobileHeader {...props} />
      </StyledMobileHeader>
    </>
  )
}

Header.defaultProps = {
  selectedLevelOneItem: null,
  selectedLevelTwoItem: null,
  selectedProfileItem: null,
  selectedRegion: null,
  callbacks: {},
  components: {},
}

Header.propTypes = {
  isProfileAvailable: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isPlusSubscriber: PropTypes.bool.isRequired,
  defaultTab: PropTypes.string.isRequired,
  selectedLevelOneItem: PropTypes.string,
  selectedLevelTwoItem: PropTypes.string,
  selectedProfileItem: PropTypes.string,
  selectedRegion: PropTypes.string,
  callbacks: PropTypes.objectOf(PropTypes.func.isRequired),
  components: PropTypes.objectOf(PropTypes.elementType.isRequired),
  content: PropTypes.shape({
    phone: PropTypes.string,
    regions: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
    tabs: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
    profile: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
    menu: PropTypes.arrayOf(menuItemShape.isRequired).isRequired,
  }).isRequired,
}