import React from 'react'
import PropTypes from 'prop-types'

import { RootAnalyticsContext } from '../../context'
import AnalyticsProvider from '../AnalyticsProvider'

const RootAnalyticsProvider = ({ appId, trackEvent, children }) => {
  return (
    <RootAnalyticsContext.Provider
      value={{
        appId,
        trackEvent,
      }}
    >
      <AnalyticsProvider category={appId}>{children}</AnalyticsProvider>
    </RootAnalyticsContext.Provider>
  )
}

RootAnalyticsProvider.propTypes = {
  /** Имя приложения */
  appId: PropTypes.string.isRequired,
  /** Функция для трекинга событий */
  trackEvent: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default RootAnalyticsProvider
