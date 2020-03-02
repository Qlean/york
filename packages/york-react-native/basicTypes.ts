declare type PositionUnit = number
declare type DimensionUnit = number

declare interface PositionTL {
  top: PositionUnit
  left: PositionUnit
}

declare interface Dimension {
  width: DimensionUnit
  height: DimensionUnit
}
