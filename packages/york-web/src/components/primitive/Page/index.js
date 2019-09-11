import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { AnalyticsProvider, useAnalytics } from '@qlean/york-analytics'

/** Компонет, отвечающий за рендер страницы, категорию и дополнительные данные аналитики этой страницы */
const Page = ({ name, analyticsProperties, children }) => {
  const trackEvent = useAnalytics(name)
  useEffect(() => {
    trackEvent({
      label: name,
      action: 'mount',
    })
  }, [name])
  return (
    <AnalyticsProvider category={name} properties={analyticsProperties}>
      {children}
    </AnalyticsProvider>
  )
}

Page.propTypes = {
  /** Имя страницы. Используется для аналитики */
  name: PropTypes.string.isRequired,
  /** Объект с дополниельными данными  для аналитики */
  // eslint-disable-next-line
  analyticsProperties: PropTypes.object,
  children: PropTypes.node.isRequired,
}

export default Page
