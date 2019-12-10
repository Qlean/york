import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

import AnalyticsProvider from '../AnalyticsProvider'
import { RootAnalyticsContext } from '../../context'
import { AppId, TrackEvent } from '../../types'

interface Props {
  /** Идентификатор приложения */
  appId: AppId
  /** Функция для трекинга событий */
  trackEvent: TrackEvent
  children: ReactNode
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
