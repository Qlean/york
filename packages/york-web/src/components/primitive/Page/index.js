import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import {
  AnalyticsContext,
  AnalyticsProvider,
  usePageView,
} from '@qlean/york-analytics'
/**
 * Компонент страницы. Автоматичесуки отправляет событие о просмотре страницы с помощью `york-analytics`
 */
const Page = ({ name, analyticsPayload, isPayloadReady, children }) => {
  usePageView({ name, payload: analyticsPayload, isPayloadReady })
  const analyticsContext = useContext(AnalyticsContext)
  return analyticsContext ? (
    <AnalyticsProvider category={name}>{children}</AnalyticsProvider>
  ) : (
    children
  )
}

Page.defaultProps = {
  analyticsPayload: null,
  isPayloadReady: true,
}

Page.propTypes = {
  /** Имя страницы. Используется для аналитики */
  name: PropTypes.string.isRequired,
  /** Дополнительные данные для аналитики */
  // eslint-disable-next-line react/forbid-prop-types
  analyticsPayload: PropTypes.object,
  /** Пропсы для AnalyticsProvider */
  children: PropTypes.node.isRequired,
  isPayloadReady: PropTypes.bool,
}

export default Page
