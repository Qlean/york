import React, { useRef, useEffect, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import { sizes, transitions, borderRadiuses, minScreenWidth } from 'styles'

import Text from '../Text'

const pointerSize = 14
const screenMargin = sizes[4]

const StyledTooltipContainer = styled.div`
  position: absolute;
  top: -${sizes[3]}px;
  left: 50%;
  display: flex;
  justify-content: center;
  transform: translate(-50%, -100%);
  width: ${minScreenWidth - screenMargin * 2}px;
  transition: ${transitions.medium}, left 0s;
  opacity: 0;
  pointer-events: none;
`

const StyledTooltipContent = styled.div`
  padding: ${sizes[4]}px;
  background-color: ${colors.black};
  border-radius: ${borderRadiuses.medium};
`

const StyledTooltipPointer = styled.div`
  position: absolute;
  left: 50%;
  bottom: -${pointerSize / 2}px;
  transform: translateX(-50%) rotate(45deg);
  width: ${pointerSize}px;
  height: ${pointerSize}px;
  background-color: ${colors.black};
`

const StyledTooltip = styled.span`
  position: relative;
  cursor: help;
  &:hover > ${StyledTooltipContainer} {
    opacity: 1;
  }
`

/**
 * Используется для создания подсказок. Умеет менять свое положение так, чтобы не вылезать за края экрана.
 */
export default function Tooltip({ tooltip, children }) {
  const tooltipContainerRef = useRef(null)
  const tooltipContentRef = useRef(null)
  const tooltipPointerRef = useRef(null)
  const positionTooltip = () => {
    const { current: tooltipContainerElement } = tooltipContainerRef
    const { current: tooltipContentElement } = tooltipContentRef
    const { current: tooltipPointerElement } = tooltipPointerRef

    tooltipContainerElement.style.left = '50%'
    tooltipPointerElement.style.left = '50%'

    const { left, width } = tooltipContentElement.getBoundingClientRect()
    const viewportWidth = document.documentElement.clientWidth
    const right = viewportWidth - left - width

    if (left < screenMargin || right < screenMargin) {
      const xOffset =
        left < screenMargin ? screenMargin - left : right - screenMargin
      tooltipContainerElement.style.left = `calc(50% + ${xOffset}px)`
      tooltipPointerElement.style.left = `calc(50% - ${xOffset}px)`
    }
  }

  /*
    It's mandatory to use onMouseOver with useLayoutEffect because when component mounts, fonts
    are stll not loaded, and getBoundingClientRect will return wrong values. There is still no
    cross-browser way to set a callback to "all fonts are loaded" event. Also it works with SSR.

    useLayoutEffect is still needed in case of props changes.
  */

  useLayoutEffect(positionTooltip)

  useEffect(() => {
    window.addEventListener('resize', positionTooltip)
    return () => {
      window.removeEventListener('resize', positionTooltip)
    }
  }, [])

  return (
    <StyledTooltip onMouseOver={positionTooltip}>
      {children}
      <StyledTooltipContainer ref={tooltipContainerRef}>
        <StyledTooltipPointer ref={tooltipPointerRef} />
        <StyledTooltipContent ref={tooltipContentRef}>
          {typeof tooltip === 'string' ? (
            <Text htmTag="div" color="white" preset="caption">
              {tooltip}
            </Text>
          ) : (
            tooltip
          )}
        </StyledTooltipContent>
      </StyledTooltipContainer>
    </StyledTooltip>
  )
}

Tooltip.propTypes = {
  /** Содержимое тултипа. Если это строка, она будет обернута в `<Text>` с параметрами по умолчанию. */
  tooltip: PropTypes.node.isRequired,
  /** Элемент, относительно коротого позиционируется тултип. Может быть как строчным, так и блочным. */
  children: PropTypes.node.isRequired,
}
