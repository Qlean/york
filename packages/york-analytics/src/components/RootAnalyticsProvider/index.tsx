import React, { ReactNode, ReactElement } from 'react'
import PropTypes from 'prop-types'

import AnalyticsProvider from '../AnalyticsProvider'
import { RootAnalyticsContext } from '../../context'
import { TrackEvent } from '../../types'

interface Props {
  /** Имя приложения */
  appId: string
  /** Функция для трекинга событий */
  trackEvent: TrackEvent
  children: ReactNode
}

const RootAnalyticsProvider = ({
  appId,
  trackEvent,
  children,
}: Props): ReactElement => {
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
  appId: PropTypes.string.isRequired,
  trackEvent: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default RootAnalyticsProvider
