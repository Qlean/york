import React from 'react'
import PropTypes from 'prop-types'

import content from './content'

import DesktopFooterTop from './DesktopFooterTop'
import MobileFooterTop from './MobileFooterTop'
import FooterBottom from './FooterBottom'

const Footer = ({
  legalInfo,
  phones,
  email,
  userAgreementLink,
  socialNetworkLinks,
}) => {
  return (
    <>
      <MobileFooterTop content={content} />
      <DesktopFooterTop content={content} />
      <FooterBottom
        legalInfo={legalInfo}
        phones={phones}
        email={email}
        userAgreementLink={userAgreementLink}
        socialNetworkLinks={socialNetworkLinks}
      />
    </>
  )
}

Footer.defaultProps = {
  phones: [],
  socialNetworkLinks: {},
}

Footer.propTypes = {
  legalInfo: PropTypes.string.isRequired,
  phones: PropTypes.arrayOf(PropTypes.string.isRequired),
  email: PropTypes.string.isRequired,
  userAgreementLink: PropTypes.string.isRequired,
  socialNetworkLinks: PropTypes.objectOf(PropTypes.string.isRequired),
}

export default Footer
