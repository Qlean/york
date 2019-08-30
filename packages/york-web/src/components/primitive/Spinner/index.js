import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import { sizes } from '@qlean/york-web'
import { colors } from '@qlean/york-core'

const spinnerSizes = {
  s: sizes[4],
  m: sizes[6],
  l: sizes[12],
}

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`

const StyledSpinnerContainer = styled.div`
  color: ${({ color }) => colors[color]};
  svg {
    animation: ${rotate} 0.6s infinite linear;
    transform-origin: center;
    width: ${({ size }) => spinnerSizes[size]}px;
    height: ${({ size }) => spinnerSizes[size]}px;
    display: block;
  }
`

/** Компонент для отображения статуса загрузки. Используется в `Loader` и `Button`. */
const Spinner = ({ color, size }) => {
  // На странице может быть несколько спиннеров разного цвета, нам нужны уникальные id для градиентов.
  const idSuffix = String(Math.random())

  return (
    <StyledSpinnerContainer color={color} size={size}>
      <svg viewBox="0 0 60 60">
        <defs>
          <linearGradient
            id={`spinner-gradient-layer-1-${idSuffix}`}
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
          >
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
            <stop offset="75%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id={`spinner-gradient-layer-2-${idSuffix}`}
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
          >
            <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle
          cx="30"
          cy="30"
          r="27.5"
          transform="rotate(340, 30, 30)"
          stroke={`url(#spinner-gradient-layer-1-${idSuffix})`}
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        <circle
          cx="30"
          cy="30"
          r="27.5"
          transform="rotate(110, 30, 30)"
          stroke={`url(#spinner-gradient-layer-2-${idSuffix})`}
          strokeWidth="5"
          fill="none"
          strokeDasharray="100 1000"
          strokeLinecap="round"
        />
      </svg>
    </StyledSpinnerContainer>
  )
}

Spinner.propTypes = {
  /** Цвет спиннера */
  color: PropTypes.oneOf([...Object.keys(colors), 'inherit']),
  /** Размер спиннера */
  size: PropTypes.oneOf(Object.keys(spinnerSizes)),
}

Spinner.defaultProps = {
  color: 'green',
  size: 'm',
}

export default Spinner
