import React from 'react'
import PropTypes from 'prop-types'
import { AnalyticsProvider } from '@qlean/york-analytics'

const Wrapper = ({ children }) => (
  <AnalyticsProvider
    category="york"
    // eslint-disable-next-line no-console
    trackEvent={console.log}
  >
    {children}
  </AnalyticsProvider>
)

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
