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

const shouldSendEvent = data =>
  Object.values(data).filter(item => Boolean(item)).length ===
  Object.keys(data).length

const useViewTracking = ({ name, analyticsData }) => {
  if (!name) {
    throw new Error('Error in `useViewTracking`: `name` is not specified')
  }
  const prev = usePrevious(analyticsData)
  const analyticsContext = useContext(AnalyticsContext)

  useEffect(() => {
    if (analyticsContext) {
      const action = window
        ? eventActionTypes.pageView
        : eventActionTypes.screenView
      const { trackEvent, category } = analyticsContext
      if (!analyticsData) {
        trackEvent({
          action,
          category,
          label: name,
        })
      }

      // Мы можем спокойно использовать сравнение строк потому что
      // подразумевается что analyticsData - это простой объект, формируемый вручную,
      // с плоской структурой, и он все равно конвертируется в JSON перед отправкой.
      const hasDataUpdated =
        prev && JSON.stringify(analyticsData) !== JSON.stringify(prev)

      if (analyticsData && shouldSendEvent(analyticsData) && hasDataUpdated) {
        trackEvent({
          action,
          category,
          label: name,
        })
      }
    }
  }, [name, analyticsData, prev, analyticsContext])
}

export default useViewTracking
