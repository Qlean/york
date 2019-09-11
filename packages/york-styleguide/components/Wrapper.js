import React from 'react'
import PropTypes from 'prop-types'
import { AnalyticsProvider } from '@qlean/york-analytics'

const trackEvent = ({ category, label, action, properties }) => {
  // eslint-disable-next-line
  console.log(
    `category: ${category}\nlabel: ${label}\naction: ${action}\nproperties: ${JSON.stringify(
      properties,
    )}`,
  )
}

const Wrapper = ({ children }) => (
  <AnalyticsProvider category="york" trackEvent={trackEvent}>
    {children}
  </AnalyticsProvider>
)

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
