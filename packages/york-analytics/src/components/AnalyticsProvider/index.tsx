import React, { ReactNode, useContext, useCallback } from 'react'
import * as R from 'ramda'
import PropTypes from 'prop-types'

import { AnalyticsContext, RootAnalyticsContext } from '../../context'

interface Props {
  /** Категория событий этого провайдера */
  category: string
  children: ReactNode
}

const AnalyticsProvider = ({ category, children }: Props) => {
  const rootAnalyticsContext = useContext(RootAnalyticsContext)
  if (!rootAnalyticsContext) {
    throw new Error(
      'Error in `AnalyticsProvider`: No `RootAnalyticsContext` found. Please make sure to wrap your app into `RootAnalyticsProvider`',
    )
  }
  const { appId, trackEvent } = rootAnalyticsContext
  const parentContext = useContext(AnalyticsContext)
  const analyticsRoute = R.isEmpty(parentContext)
    ? `${category}`
    : `${parentContext.analyticsRoute}/${category}`

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
