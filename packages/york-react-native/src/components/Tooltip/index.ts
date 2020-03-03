import React from 'react'

export type TooltipText = string

export interface TooltipConfig {
  width?: DimensionUnit
  pinPointDownside: PositionTL
  pinPointUpside: PositionTL
}

export type TooltipsStorageType = Record<TooltipText, TooltipConfig> 
export type HiddenTooltipsStorageType = TooltipText[]
export type AddTooltip = (text: TooltipText, config: TooltipConfig) => void 
export type HideVisible = () => void 

export interface TooltipContext {
  tooltipsMap: TooltipsStorageType
  addTooltip: AddTooltip
  hidden: HiddenTooltipsStorageType
  hideVisible: HideVisible
}

export const portalGateName = 'tooltips'

export const tooltipsContext = React.createContext<TooltipContext>({
  tooltipsMap: {},
  addTooltip: () => null,
  hidden: [],
  hideVisible: () => null,
})
