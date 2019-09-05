import { useContext, useCallback } from 'react'

import AnalyticsContext from '../components/AnalyticsContext'

const useAnalytics = category => {
  const { trackEvent, analyticsRoute } = useContext(AnalyticsContext)
  const memoizedTrackEvent = useCallback(
    data =>
      trackEvent({
        ...data,
        category,
        analyticsRoute: `${analyticsRoute}.${category}`,
      }),
    [trackEvent, category, analyticsRoute],
  )
  return memoizedTrackEvent
}

export default useAnalytics
