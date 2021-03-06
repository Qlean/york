import React, { useRef, useEffect, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@qlean/york-core'

import {
  sizes,
  transitionTimings,
  borderRadiuses,
  minScreenWidth,
  zIndexes,
} from 'york-web/utils'

import { Text } from 'york-web/components/primitive'

const pointerSize = 14
const screenMargin = sizes[4]
const contentMargin = sizes[3]
const pointerOffset = pointerSize / 2

const StyledTooltipContainer = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  width: ${minScreenWidth - screenMargin * 2}px;
  transition: opacity ${transitionTimings.short}s ease-in-out;
  transition-delay: 0.1s;
  opacity: 0;
  pointer-events: none;
  z-index: ${zIndexes.dropdown};
`

const StyledTooltipContent = styled.span`
  padding: ${sizes[2]}px ${sizes[3]}px;
  background-color: ${colors.black};
  border-radius: ${borderRadiuses.medium};
`

const StyledTooltipPointer = styled.span`
  position: absolute;
  transform: translateX(-50%) rotate(45deg);
  width: ${pointerSize}px;
  height: ${pointerSize}px;
  background-color: ${colors.black};
`

/**
 * `line-height: 0;` используется для сброса наследование, без него, блок начинает занимать
 * значительно больше места. Более подробное описание этого эффекта, можно прочитать тут:
 * https://stackoverflow.com/questions/11829393/why-is-the-spans-line-height-is-useless
 */
const StyledTooltip = styled.span`
  line-height: 0;
  position: relative;
  cursor: help;
  &:hover > ${StyledTooltipContainer} {
    opacity: 1;
  }
`

/**
 * Используется для создания подсказок. Умеет менять свое положение так, чтобы не вылезать за края
 * экрана. Работает и со строчными элементами, но из-за особенностей реализации, сбрасывает
 * `line-height` обернутого элемента в 0.
 */
export default function Tooltip({ tooltip, children }) {
  const tooltipContainerRef = useRef(null)
  const tooltipContentRef = useRef(null)
  const tooltipPointerRef = useRef(null)
  const positionTooltip = () => {
    const { current: tooltipContainerElement } = tooltipContainerRef
    const { current: tooltipContentElement } = tooltipContentRef
    const { current: tooltipPointerElement } = tooltipPointerRef

    // Сброс стилей на значения по умолчанию
    tooltipContainerElement.style.left = '50%'
    tooltipPointerElement.style.left = '50%'

    tooltipContainerElement.style.top = `-${contentMargin}px`
    tooltipContainerElement.style.transform = 'translate(-50%, -100%)'
    tooltipPointerElement.style.top = null
    tooltipPointerElement.style.bottom = `-${pointerOffset}px`

    const { top, left, width } = tooltipContentElement.getBoundingClientRect()

    // Позиционирование лево-право
    const viewportWidth = document.documentElement.clientWidth
    const right = viewportWidth - left - width

    if (left < screenMargin || right < screenMargin) {
      const xOffset =
        left < screenMargin ? screenMargin - left : right - screenMargin
      tooltipContainerElement.style.left = `calc(50% + ${xOffset}px)`
      tooltipPointerElement.style.left = `calc(50% - ${xOffset}px)`
    }

    // Позиционирование верх-низ
    if (top < screenMargin) {
      tooltipContainerElement.style.top = `calc(100% + ${contentMargin}px)`
      tooltipContainerElement.style.transform = 'translate(-50%, 0)'
      tooltipPointerElement.style.top = `-${pointerOffset}px`
      tooltipPointerElement.style.bottom = null
    }
  }

  /*
    Пересчет размеров тултипа на onMouseOver обязателен, потому что когда компонент монтируется,
    шрифты не еще будут загружены и getBoundingClientRect вернет не вполне верные значения. На
    момент написания компонента не существует хорошего кросс-браузерного способа установить коллбэк
    на событие "все шрифты загружены". Кроме того, этот способ работает с SSR.

    useLayoutEffect все еще нужен на случай изменения пропсов.
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
          {React.isValidElement(tooltip) ? (
            tooltip
          ) : (
            <Text htmTag="div" color="white" preset="caption">
              {tooltip}
            </Text>
          )}
        </StyledTooltipContent>
      </StyledTooltipContainer>
    </StyledTooltip>
  )
}

Tooltip.propTypes = {
  /** Содержимое тултипа. Если это элемент, то оно будет отображено как есть, иначе — обернуто в `<Text>` */
  tooltip: PropTypes.node.isRequired,
  /** Элемент, относительно коротого позиционируется тултип. Может быть как строчным, так и блочным. */
  children: PropTypes.node.isRequired,
}
