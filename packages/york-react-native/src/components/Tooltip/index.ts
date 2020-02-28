import React from 'react'

export type tooltipText = string

export interface ITooltipConfig {
  width: dimension | undefined
  pinPointDownside: IPositionTL
  pinPointUpside: IPositionTL
}

export type tooltipsStorageType = { [key: string]: ITooltipConfig }
export type hiddenTooltipsStorageType = tooltipText[]

export interface IAddTooltip {
  (text: tooltipText, config: ITooltipConfig): void
}
export interface IHideVisible {
  (): void
}

export interface ITooltipContext {
  tooltipsMap: tooltipsStorageType
  addTooltip: IAddTooltip
  hidden: hiddenTooltipsStorageType
  hideVisible: IHideVisible
}

type portalName = string
export const portalGateName: portalName = 'tooltips'

export const TooltipsContext = React.createContext<ITooltipContext>({
  tooltipsMap: {},
  addTooltip: () => null,
  hidden: [],
  hideVisible: () => null,
})
