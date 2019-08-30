import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { sizes } from '@qlean/york-web'

import { View, Spinner } from 'york-web/components/primitive'

const StyledContainer = styled(View)`
  height: ${({ size }) => (size === 'l' ? '100%' : `${sizes[24]}px`)};
  width: 100%;
`

/** Компонент отображения статуса загрузки. Занимает высоту родителя. */
const Loader = ({ isLoading, children, size, spinnerProps }) => {
  if (isLoading) {
    return (
      <StyledContainer justifyContent="center" alignItems="center" size={size}>
        <Spinner {...spinnerProps} />
      </StyledContainer>
    )
  }

  return children
}

Loader.propTypes = {
  children: PropTypes.node.isRequired,
  /** Статус загрузки */
  isLoading: PropTypes.bool.isRequired,
  /** Размер лоадера */
  size: PropTypes.oneOf(['l', 'm']),
  /** Свойства спиннера */
  spinnerProps: PropTypes.shape(Spinner.propTypes),
}

Loader.defaultProps = {
  size: 'l',
  spinnerProps: {
    color: 'green',
    size: 'l',
  },
}

export default Loader
