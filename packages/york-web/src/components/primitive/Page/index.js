import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  AnalyticsProvider,
  useAnalytics,
  eventActionTypes,
} from '@qlean/york-analytics'

/** Компонет, отвечающий за рендер страницы. `Page` автоматически создает новый контекст для аналитики (см. york-analytics) */
const Page = ({ name, analyticsProps, children }) => {
  return <AnalyticsProvider category={name}>{children}</AnalyticsProvider>
}

Page.propTypes = {
  /** Имя страницы. Используется для аналитики */
  name: PropTypes.string.isRequired,
  /** Пропсы для AnalyticsProvider */
  analyticsProps: PropTypes.shape({
    /** Функция трекинга */
    trackEvent: PropTypes.func,
    /** Объект с дополниельными данными  для аналитики */
    properties: PropTypes.object,
  }),
  children: PropTypes.node.isRequired,
}

Page.defaultProps = {
  analyticsProps: {},
}

export default Page
