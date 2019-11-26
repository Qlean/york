import React, { useContext, useCallback } from 'react'
import PropTypes from 'prop-types'

import { AnalyticsContext, RootAnalyticsContext } from '../../context'

const AnalyticsProvider = ({ category, children }) => {
  const rootAnalyticsContext = useContext(RootAnalyticsContext)
  if (!rootAnalyticsContext) {
    throw new Error(
      'Error in `AnalyticsProvider`: No `RootAnalyticsContext` found. Please make sure to wrap your app into `RootAnalyticsProvider`',
    )
  }
  const { appId, trackEvent } = useContext(RootAnalyticsContext)
  const parentContext = useContext(AnalyticsContext)
  const analyticsRoute = parentContext
    ? `${parentContext.analyticsRoute}/${category}`
    : `${category}`

  return (
    <AnalyticsContext.Provider
      value={{
        trackEvent: useCallback(
          event =>
            trackEvent({
              appId,
              category,
              analyticsRoute,
              ...event,
            }),
          [appId, category, analyticsRoute, trackEvent],
        ),
        analyticsRoute,
        category,
        appId,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  )
}

AnalyticsProvider.propTypes = {
  /** Категория событий этого провайдера */
  category: PropTypes.string.isRequired,
  /** Позволяет отключить трекинг для этого провайдера, передается дальше по контексту */
  children: PropTypes.node.isRequired,
}

export default AnalyticsProvider
