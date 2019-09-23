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
  /** Категория событий этого провайдера */
  category: PropTypes.string.isRequired,
  /** Функция для трекинга событий */
  trackEvent: PropTypes.func,
  /** Дополнительные данные, которые нужно передать вместе с событием */
  // eslint-disable-next-line react/forbid-prop-types
  properties: PropTypes.object,
  children: PropTypes.node.isRequired,
}

AnalyticsProvider.defaultProps = {
  properties: {},
  trackEvent: null,
}

export default AnalyticsProvider
