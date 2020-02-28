import React, { useState, useContext, useCallback, useEffect, ReactNode} from 'react'
import { Portal } from 'york-react-native/components'

import {portalGateName, TooltipsContext, tooltipText, ITooltipConfig} from '../'

import Item from './Item'


type Props = {
  /** Текст тултипа */
  text: tooltipText
  config: ITooltipConfig
}

/**
 * Отображает 1 тултип. Если ширина не задана, подстраивается под экран и контент.  
 * Точка "крепления" тултипа указывается явно в виде расстояний от левого верхнего угла <B>`TooltipsContainer`</B>.  
 * Тултип сам выбирает положение на экране, предпочитая быть ниже указанной точки, если это возможно.  
 * Необходимо указывать 2 точки крепления: для случаев когда тултип над и под точкой.
 *
 * Одновременно можно отображать неограниченное кол-во тултипов, однако при выборе расположения они не учитывают
 * взаимные перекрытия.
 *
 * !ВНИМАНИЕ!: для работы тултипов требуется компонент `Portal` и `TooltipsContainer`.
 */
export const Tooltip: React.FC<Props> = ({ text, config }) => {
  const { tooltipsMap, addTooltip } = useContext(TooltipsContext)

  useEffect(() => {
    addTooltip(text, config)
  }, [])

  return (
    <Portal.GateEnter targetName={portalGateName}>
      {Object.entries(tooltipsMap).map(([tooltipText, tooltipConfig]) => (
        <Item key={tooltipText} text={tooltipText} {...tooltipConfig} />
      ))}
    </Portal.GateEnter>
  )
}
