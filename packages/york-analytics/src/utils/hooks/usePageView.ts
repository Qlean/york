import { useRef, useEffect, useContext } from 'react'
import { AnalyticsContext } from '../../context'
import { eventActionTypes } from '../../constants'

const usePrevious = (value: any) => {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

const usePageView = ({ name, payload, isPayloadReady }: any) => {
  if (!name) {
    throw new Error('Error in `usePageView`: `name` is not specified')
  }
  if (payload && typeof isPayloadReady === 'undefined') {
    // eslint-disable-next-line no-console
    console.warn(
      'Warning in `usePageView`: `isPayloadReady` is not defined, event will never fire',
    )
  }

  const wasPayloadReady = usePrevious(isPayloadReady)
  const analyticsContext = useContext(AnalyticsContext)

  useEffect(() => {
    if (analyticsContext && !payload) {
      const { trackEvent, category } = analyticsContext
      if (!payload) {
        trackEvent({
          // @ts-ignore
          action: eventActionTypes.pageView,
          category,
          label: name,
        })
      }
    }
  }, [name, analyticsContext, payload])

  useEffect(() => {
    if (analyticsContext && payload) {
      const action = eventActionTypes.pageView
      const { trackEvent, category } = analyticsContext

      if (!wasPayloadReady && isPayloadReady) {
        trackEvent({
          action,
          category,
          label: name,
          ...payload,
        })
      }
    }
  }, [name, payload, analyticsContext, isPayloadReady, wasPayloadReady])
}

export default usePageView
