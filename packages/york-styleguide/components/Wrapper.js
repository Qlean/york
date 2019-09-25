import React from 'react'
import PropTypes from 'prop-types'
import { AnalyticsProvider } from '@qlean/york-analytics'
import { Qat } from '@qleanlabs/analytics-client'

const client = new Qat({
  buffer: [],
  options: {
    url: 'https://anlt.cloud.qlean.ru/collect',
    timeout: 0,
    wrapLink: false,
  },
})

const trackEvent = ({ category, label, action, properties }) => {
  console.log({
    eventCategory: category,
    eventLabel: label,
    eventAction: action,
    ...properties,
  })

  client.emit({
    eventCategory: category,
    eventLabel: label,
    eventAction: action,
    ...properties,
  })
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
