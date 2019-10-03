import React from 'react'
import PropTypes from 'prop-types'

import AnalyticsContext from '../../context'

const getAnalyticsRoute = (value, category) => {
  if (value) {
    const { analyticsRoute } = value
    return `${analyticsRoute}/${category}`
  }
  return category
}

/** Передает аналитический контекст дочерним компонентам */
const AnalyticsProvider = ({ trackEvent, category, children }) => {
  return (
    <AnalyticsContext.Consumer>
      {value => {
        const getEventTrackingFunction = () => {
          if (trackEvent) return trackEvent
          if (value && value.trackEvent) return value.trackEvent
          throw new Error(
            'No event tracking function specified for `AnalyticsProvider`',
          )
        }
        const analyticsRoute = getAnalyticsRoute(value, category)
        return (
          <AnalyticsContext.Provider
            value={{
              trackEvent: getEventTrackingFunction(),
              category,
              analyticsRoute,
            }}
          >
            {children}
          </AnalyticsContext.Provider>
        )
      }}
    </AnalyticsContext.Consumer>
  )
}

AnalyticsProvider.propTypes = {
  /** Категория событий этого провайдера */
  category: PropTypes.string.isRequired,
  /** Функция для трекинга событий */
  trackEvent: PropTypes.func,
  /** Позволяет отключить трекинг для этого провайдера, передается дальше по контексту */
  children: PropTypes.node.isRequired,
}

AnalyticsProvider.defaultProps = {
  trackEvent: null,
}

export default AnalyticsProvider
