import React from 'react'
import PropTypes from 'prop-types'

import { AnalyticsProvider, usePageView } from '@qlean/york-analytics'

const Page = ({ name, analyticsPayload, isPayloadReady, children }) => {
  usePageView({ name, payload: analyticsPayload, isPayloadReady })
  return <AnalyticsProvider category={name}>{children}</AnalyticsProvider>
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
