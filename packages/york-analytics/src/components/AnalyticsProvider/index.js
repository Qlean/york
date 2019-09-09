import React from 'react'
import PropTypes from 'prop-types'

import AnalyticsContext from '../../context'

const getAnalyticsRoute = (value, category) => {
  if (value) {
    const { analyticsRoute } = value.properties
    return `${analyticsRoute}.${category}`
  }
  return category
}

/** Передает аналитический контекст дочерним компонентам */
const AnalyticsProvider = ({ trackEvent, category, properties, children }) => {
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

        return (
          <AnalyticsContext.Provider
            value={{
              trackEvent: getEventTrackingFunction(),
              category,
              properties: {
                analyticsRoute: getAnalyticsRoute(value, category),
                ...properties,
              },
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
  /** Функция для трекинга событий */
  // eslint-disable-next-line
  trackEvent: PropTypes.func,
  /** Категория событий этого провайдера */
  category: PropTypes.string.isRequired,
  /** Дополнительные данные, которые нужно передать вместе с событием */
  // eslint-disable-next-line
  properties: PropTypes.object,
  children: PropTypes.node.isRequired,
}

export default AnalyticsProvider
