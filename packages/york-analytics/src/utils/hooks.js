import { useContext, useCallback } from 'react'

import AnalyticsContext from '../context'

export const useAnalytics = category => {
  const analyticsContext = useContext(AnalyticsContext)
  if (!analyticsContext) {
    throw new Error(
      'Error in `useAnalytics`: no analytics context found. `useAnalytics` should only be used inside `AnalyticsProvider`',
    )
  }

  if (!category || typeof category !== 'string') {
    throw new Error('Error in `useAnalytics`: `category` must be a string')
  }

  const {
    trackEvent,
    properties: { analyticsRoute },
  } = useContext(AnalyticsContext)
  if (!trackEvent) {
    throw new Error(
      'Error in `useAnalytics`: no tracking function found in context. `useAnalytics` should only be used inside `AnalyticsProvider`',
    )
  }

  return useCallback(
    data =>
      trackEvent({
        ...data,
        category,
        properties: {
          analyticsRoute: `${analyticsRoute}.${category}`,
          ...data.properties,
        },
      }),
    [trackEvent, category, analyticsRoute],
  )
}
