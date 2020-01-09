import React, { useContext, useCallback, ReactNode, ReactElement } from 'react'
import PropTypes from 'prop-types'

import { AnalyticsContext, RootAnalyticsContext } from '../../context'

type Props = {
  /** Категория событий этого провайдера */
  category: string
  children: ReactNode
}

const AnalyticsProvider = ({ category, children }: Props): ReactElement => {
  const rootAnalyticsContext = useContext(RootAnalyticsContext)
  if (!rootAnalyticsContext) {
    throw new Error(
      'Error in `AnalyticsProvider`: No `RootAnalyticsContext` found. Please make sure to wrap your app into `RootAnalyticsProvider`',
    )
  }
  const { appId, trackEvent } = rootAnalyticsContext
  const parentContext = useContext(AnalyticsContext)
  const analyticsRoute = parentContext
    ? `${parentContext.analyticsRoute}/${category}`
    : `${category}`

  return (
    <AnalyticsContext.Provider
      value={{
        trackEvent: useCallback(
          event => {
            if (trackEvent)
              trackEvent({
                appId,
                category,
                analyticsRoute,
                ...event,
              })
          },
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
  category: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default AnalyticsProvider
