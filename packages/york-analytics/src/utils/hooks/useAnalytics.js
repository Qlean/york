import { useCallback, useContext } from 'react'
import { AnalyticsContext } from '../../context'

const useAnalytics = category => {
  const analyticsContext = useContext(AnalyticsContext)
  if (!analyticsContext) {
    throw new Error(
      'Error in `useAnalytics`: no analytics context found. `useAnalytics` should only be used inside `AnalyticsProvider`',
    )
  }

  const { trackEvent, category: contextCategory, ...rest } = analyticsContext

  const finalCategory = category || contextCategory

  if (!trackEvent) {
    throw new Error(
      'Error in `useAnalytics`: no tracking function found in context. `useAnalytics` should only be used inside `AnalyticsProvider`',
    )
  }

  return {
    trackEvent: useCallback(
      data =>
        trackEvent({
          ...data,
          category: finalCategory,
        }),
      [trackEvent, finalCategory],
    ),
    ...rest,
  }
}

export default useAnalytics