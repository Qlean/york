import React from 'react'
import PropTypes from 'prop-types'

import AnalyticsProvider from '../AnalyticsProvider'
import { RootAnalyticsContext } from '../../context'
import { AnalyticsEvent } from '../../types'

interface Props {
  appId: string
  trackEvent: (e: AnalyticsEvent) => void
  children: React.ReactNode
}

const RootAnalyticsProvider = ({ appId, trackEvent, children }: Props) => {
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
