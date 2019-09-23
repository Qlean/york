import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import {
  AnalyticsContext,
  getAnalyticsName,
  eventActionTypes,
} from '@qlean/york-analytics'

import { menuItemShape, componentsShape, callbacksShape } from './utils'

export default function MenuItem({
  components,
  callbacks,
  item,
  className,
  children,
  onClick,
}) {
  const { name, href, callback, component } = item

  if (component && !components[component]) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn(`Not found component ${component} for menu item "${name}"`)
    }
    return null
  }

  const Container = components[component] || Fragment

  if (href) {
    if (callback && process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn(
        `Menu item "${name}" have href and callback at the same time, only href will be used`,
      )
    }

    return (
      <components.Link
        name={name}
        href={href}
        className={className}
        onClick={onClick}
      >
        <Container>{children}</Container>
      </components.Link>
    )
  }

  const analyticsContext = useContext(AnalyticsContext)
  const itemName = getAnalyticsName(name, analyticsContext)

  if (callback) {
    if (!callbacks[callback]) {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn(`Not found callback ${callback} for menu item "${name}"`)
      }
      return null
    }

    return (
      <div
        name={itemName}
        className={className}
        onClick={e => {
          if (onClick) onClick(e)
          if (analyticsContext) {
            const { trackEvent, category, properties } = analyticsContext
            if (
              typeof category === 'string' &&
              typeof trackEvent === 'function'
            ) {
              trackEvent({
                category,
                label: itemName,
                action: eventActionTypes.click,
                properties,
              })
            }
          }
          callbacks[callback]()
        }}
      >
        <Container>{children}</Container>
      </div>
    )
  }

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(`No href or callback passed for item "${name}"`)
  }
  return null
}

MenuItem.defaultProps = {
  onClick: null,
}

MenuItem.propTypes = {
  components: componentsShape.isRequired,
  callbacks: callbacksShape.isRequired,
  item: menuItemShape.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}
