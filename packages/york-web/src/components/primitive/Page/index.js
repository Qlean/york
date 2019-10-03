import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import {
  AnalyticsProvider,
  eventActionTypes,
  AnalyticsContext,
} from '@qlean/york-analytics'

/** Компонет, отвечающий за рендер страницы. `Page` автоматически создает новый контекст для аналитики (см. york-analytics) */
const Page = ({ name, analyticsData, children }) => {
  const analyticsContext = useContext(AnalyticsContext)

  useEffect(() => {
    if (analyticsContext) {
      const { trackEvent, analyticsRoute } = analyticsContext
      trackEvent({
        label: name,
        category: name,
        action: eventActionTypes.mount,
        analyticsRoute,
        ...analyticsData,
      })
    }
  }, [analyticsContext, analyticsData, name])

  return <AnalyticsProvider category={name}>{children}</AnalyticsProvider>
}

Page.propTypes = {
  /** Имя страницы. Используется для аналитики */
  name: PropTypes.string.isRequired,
  /** Дополнительные данные для аналитики */
  // eslint-disable-next-line react/forbid-prop-types
  analyticsData: PropTypes.object,
  /** Пропсы для AnalyticsProvider */
  children: PropTypes.node.isRequired,
}

Page.defaultProps = {
  analyticsData: {},
}

export default Page
