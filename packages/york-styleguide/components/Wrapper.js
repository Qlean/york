import React from 'react'
import PropTypes from 'prop-types'
import { AnalyticsProvider } from '@qlean/york-analytics'

const trackEvent = ({ category, label, action, properties }) => {
  console.log(
    `category: ${category}\nlabel: ${label}\naction: ${action}\nproperties: ${JSON.stringify(
      properties,
    )}`,
  )
}

const Wrapper = ({ children }) => (
  <AnalyticsProvider
    category="york"
    trackEvent={trackEvent}
    redirectUrl="https://anlt.cloud.qlean.ru/collect"
  >
    {children}
  </AnalyticsProvider>
)

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
