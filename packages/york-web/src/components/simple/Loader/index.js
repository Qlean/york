import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { sizes } from '@qlean/york-web'
import { colors } from '@qlean/york-core'

import { View, Spinner } from 'york-web/components/primitive'

const spinnerSizes = {
  s: sizes[4],
  m: sizes[8],
  l: sizes[12],
}

const StyledContainer = styled(View)`
  height: 100%;
  width: 100%;
`

/** Компонент отображения статуса загрузки. Занимает высоту родителя. */
const Loader = ({ isLoading, children, size, color }) => {
  if (isLoading) {
    return (
      <StyledContainer justifyContent="center" alignItems="center">
        <Spinner color={color} size={size} />
      </StyledContainer>
    )
  }

  return children
}

Loader.propTypes = {
  children: PropTypes.node.isRequired,
  /** Статус загрузки */
  isLoading: PropTypes.bool.isRequired,
  /** Цвет спиннера */
  color: PropTypes.oneOf([...Object.keys(colors), 'inherit']),
  /** Размер спиннера */
  size: PropTypes.oneOf(Object.keys(spinnerSizes)),
}

Loader.defaultProps = {
  color: 'green',
  size: 'l',
}

export default Loader
