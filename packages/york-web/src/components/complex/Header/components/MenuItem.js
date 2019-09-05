import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { menuItemShape, componentsShape, callbacksShape } from '../utils'

export default function MenuItem({
  components,
  callbacks,
  item,
  className,
  children,
}) {
  const { name, href, callback, component } = item

  if (component && !components[component]) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn(`Not found component ${component} for menu item "${name}"`)
    }
    return null
  }

  const Wrapper = components[component] || Fragment

  if (href) {
    if (callback && process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn(
        `Menu item "${name}" have href and callback at the same time, only href will be used`,
      )
    }

    return (
      <components.Link name={name} href={href} className={className}>
        <Wrapper>{children}</Wrapper>
      </components.Link>
    )
  }

  if (callback) {
    const onClick = callbacks[callback]

    if (!onClick) {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn(`Not found callback ${callback} for menu item "${name}"`)
      }
      return null
    }

    return (
      <div name={name} onClick={onClick} className={className}>
        <Wrapper>{children}</Wrapper>
      </div>
    )
  }

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(`No href or callback passed for item "${name}"`)
  }
  return null
}

MenuItem.propTypes = {
  components: componentsShape.isRequired,
  callbacks: callbacksShape.isRequired,
  item: menuItemShape.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
