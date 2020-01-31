import * as R from 'ramda'

export type HexColors = Record<colorNames, number>

export type RgbaColor = {
  r: number
  g: number
  b: number
  a: number
}

export type RgbaColors = Record<colorNames, RgbaColor>

export type Colors = Record<colorNames, string>

export enum colorNames {
  green = 'green',
  jungle = 'jungle',
  red = 'red',
  blue = 'blue',
  yellow = 'yellow',
  transparent = 'transparent',
  white = 'white',
  smoke = 'smoke',
  whisper = 'whisper',
  silver = 'silver',
  grey = 'grey',
  ash = 'ash',
  coal = 'coal',
  black = 'black',
}

const hexColors: HexColors = {
  [colorNames.green]: 0x00aa64ff,
  [colorNames.jungle]: 0x41cd91ff,
  [colorNames.red]: 0xf54146ff,
  [colorNames.blue]: 0x2dbefaff,
  [colorNames.yellow]: 0xffdc46ff,
  [colorNames.transparent]: 0x00000000,
  [colorNames.white]: 0xffffffff,
  [colorNames.smoke]: 0xf8f8f8ff,
  [colorNames.whisper]: 0xecececff,
  [colorNames.silver]: 0xd9d9d9ff,
  [colorNames.grey]: 0xa6a6a6ff,
  [colorNames.ash]: 0x595959ff,
  [colorNames.coal]: 0x222222ff,
  [colorNames.black]: 0x000000ff,
}

const padWithZeros = (stringColor: string): string =>
  `${Array(8 - stringColor.length)
    .fill('0')
    .join('')}${stringColor}`

const hexToRgba = (hexColor: number): RgbaColor => {
  const stringColor = padWithZeros(hexColor.toString(16))
  const [r, g, b, a] = R.splitEvery(2, stringColor).map(hex =>
    parseInt(hex, 16),
  )
  return { r, g, b, a: a / 255 }
}

export const rgbaColors: RgbaColors = R.mapObjIndexed(hexToRgba, hexColors)

export const colors: Colors = R.mapObjIndexed(
  ({ r, g, b, a }) => `rgba(${r}, ${g}, ${b}, ${a})`,
  rgbaColors,
)
