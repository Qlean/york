import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { AnalyticsProvider, useAnalytics } from '@qlean/york-analytics'

/** Компонет, отвечающий за рендер страницы. `Page` автоматически создает новый контекст для аналитики (см. york-analytics) */
const Page = ({ name, analyticsProps, children }) => {
  const trackPageEvent = useAnalytics(name)
  useEffect(() => {
    trackPageEvent({
      label: name,
      action: 'mount',
    })
  }, [name])
  const { trackEvent, properties } = analyticsProps
  return (
    <AnalyticsProvider
      category={name}
      trackEvent={trackEvent}
      properties={properties}
    >
      {children}
    </AnalyticsProvider>
  )
}

Page.propTypes = {
  /** Имя страницы. Используется для аналитики */
  name: PropTypes.string.isRequired,
  /** Пропсы для AnalyticsProvider */
  analyticsProps: PropTypes.shape({
    /** Функция трекинга */
    trackEvent: PropTypes.func,
    /** Объект с дополниельными данными  для аналитики */
    // eslint-disable-next-line
    properties: PropTypes.object,
  }),
  children: PropTypes.node.isRequired,
}

Page.defaultProps = {
  analyticsProps: {},
}

export default Page
