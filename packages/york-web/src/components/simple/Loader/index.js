import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { sizes } from '@qlean/york-web'

import { View, Spinner } from 'york-web/components/primitive'

const StyledContainer = styled(View)`
  ${({ size }) => {
    if (size === 's') return `padding: ${sizes[1]}px 0;`
    if (size === 'm') return `padding: ${sizes[12]}px 0;`
    return 'height: 100%;'
  }}
  width: 100%;
`

/**
 * Компонент отображения статуса загрузки. В зависимости от параметра `isLoading` рендерит
 * или спиннер или свое содержимое. Размер спиннера соответствует размеру лоадера.
 */
const Loader = ({ isLoading, children, size, spinnerProps, ...rest }) => {
  if (isLoading) {
    return (
      <StyledContainer
        justifyContent="center"
        alignItems="center"
        size={size}
        {...rest}
      >
        <Spinner {...{ size, ...spinnerProps }} />
      </StyledContainer>
    )
  }

  return children
}

Loader.propTypes = {
  children: PropTypes.node.isRequired,
  /** Статус загрузки */
  isLoading: PropTypes.bool.isRequired,
  /** Размер лоадера: `s` — минимально возможный, `m` — небольшие отступы, `l` — 100% родителя */
  size: PropTypes.oneOf(['s', 'm', 'l']),
  /** Свойства спиннера */
  // eslint-disable-next-line react/forbid-prop-types
  spinnerProps: PropTypes.object,
}

Loader.defaultProps = {
  size: 'm',
  spinnerProps: {
    color: 'green',
  },
}

export default Loader
