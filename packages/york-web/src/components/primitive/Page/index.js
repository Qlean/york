import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import {
  AnalyticsProvider,
  eventActionTypes,
  AnalyticsContext,
} from '@qlean/york-analytics'

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

const Page = ({ name, analyticsData, children }) => {
  console.log('render', name, analyticsData)

  const prev = usePrevious(analyticsData)
  const { trackEvent } = useAnalytics()

  useEffect(() => {
    if (!analyticsData) {
      trackEvent({
        label: name,
        action: eventActionTypes.pageView,
      })
    }

    // Мы можем спокойно использовать сравнение строк потому что
    // подразумевается что analyticsData - это объект, формируемый вручную,
    // с плоской структурой, и он все равно конвертируется в JSON перед отправкой.

    const hasDataUpdated =
      prev && JSON.stringify(analyticsData) !== JSON.stringify(prev)

    if (analyticsData && shouldSendEvent(analyticsData) && hasDataUpdated) {
      trackEvent({
        label: name,
        action: 'mount',
        ...analyticsData,
      })
    }
  }, [name, analyticsData, trackEvent, prev])

  return <AnalyticsProvider category={name}>{children}</AnalyticsProvider>
}

export default Page

// import React, { useEffect, useContext } from 'react'
// import PropTypes from 'prop-types'
// import {
//   AnalyticsProvider,
//   eventActionTypes,
//   AnalyticsContext,
// } from '@qlean/york-analytics'

// /** Компонет, отвечающий за рендер страницы. `Page` автоматически создает новый контекст для аналитики (см. york-analytics) */
// const Page = ({ name, analyticsData, children }) => {
//   const analyticsContext = useContext(AnalyticsContext)

//   useEffect(() => {
//     if (analyticsContext) {
//       const { trackEvent, analyticsRoute } = analyticsContext
//       trackEvent({
//         label: name,
//         category: name,
//         action: eventActionTypes.mount,
//         analyticsRoute,
//         ...analyticsData,
//       })
//     }
//   }, [analyticsContext, analyticsData, name])

//   return analyticsContext ? (
//     <AnalyticsProvider category={name}>{children}</AnalyticsProvider>
//   ) : (
//     children
//   )
// }

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

// export default Page
