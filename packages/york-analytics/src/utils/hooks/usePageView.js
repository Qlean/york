import { useRef, useEffect, useContext } from 'react'
import { AnalyticsContext } from '../../context'
import { eventActionTypes } from '../../constants'

const usePrevious = value => {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

const usePageView = ({ name, payload, isPayloadReady }) => {
  if (!name) {
    throw new Error('Error in `usePageView`: `name` is not specified')
  }
  if (typeof isPayloadReady === 'undefined') {
    // eslint-disable-next-line no-console
    console.warn('`usePageView`: `isPayloadReady` is not defined')
  }
  const prev = usePrevious(payload)
  const analyticsContext = useContext(AnalyticsContext)

  useEffect(() => {
    if (analyticsContext) {
      const action = eventActionTypes.pageView

      const { trackEvent, category } = analyticsContext
      if (!payload) {
        trackEvent({
          action,
          category,
          label: name,
        })
      }

      // Мы можем спокойно использовать сравнение строк потому что
      // подразумевается что payload - это простой объект, формируемый вручную,
      // с плоской структурой, и он все равно конвертируется в JSON перед отправкой.
      const hasDataUpdated =
        prev && JSON.stringify(payload) !== JSON.stringify(prev)

      if (isPayloadReady && (!prev || hasDataUpdated)) {
        trackEvent({
          action,
          category,
          label: name,
          ...payload,
        })
      }
    }
  }, [name, payload, prev, analyticsContext, isPayloadReady])
}

export default usePageView
