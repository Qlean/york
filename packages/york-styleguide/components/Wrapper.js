import React from 'react'
import PropTypes from 'prop-types'
import { RootAnalyticsProvider } from '@qlean/york-analytics'

const Wrapper = ({ children }) => (
  <RootAnalyticsProvider
    appId="york"
    // eslint-disable-next-line no-console
    trackEvent={console.log}
  >
    {children}
  </RootAnalyticsProvider>
)

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
