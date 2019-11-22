import React from 'react'
import PropTypes from 'prop-types'

import { AnalyticsProvider, useViewTracking } from '@qlean/york-analytics'

const Page = ({ name, analyticsData, children }) => {
  useViewTracking({ name, analyticsData })
  return <AnalyticsProvider category={name}>{children}</AnalyticsProvider>
}

Page.defaultProps = {
  analyticsData: null,
}

Page.propTypes = {
  /** Имя страницы. Используется для аналитики */
  name: PropTypes.string.isRequired,
  /** Дополнительные данные для аналитики */
  // eslint-disable-next-line react/forbid-prop-types
  analyticsData: PropTypes.object,
  /** Пропсы для AnalyticsProvider */
  children: PropTypes.node.isRequired,
}

export default Page
