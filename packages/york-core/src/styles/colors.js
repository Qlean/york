import * as R from 'ramda'

export const hexColors = {
  green: 0x20a052ff,
  jungle: 0x23b059ff,
  red: 0xd13737ff,
  blue: 0x2fafdeff,
  yellow: 0xfae12eff,
  transparent: 0x00000000,
  white: 0xffffffff,
  smoke: 0xf8f8f8ff,
  whisper: 0xecececff,
  silver: 0xd9d9d9ff,
  grey: 0xa6a6a6ff,
  ash: 0x595959ff,
  coal: 0x222222ff,
  black: 0x000000ff,
}

const padWithZeros = stringColor =>
  `${Array(8 - stringColor.length)
    .fill('0')
    .join('')}${stringColor}`

const hexToRgba = hexColor => {
  const [r, g, b, a] = R.pipe(
    padWithZeros,
    R.splitEvery(2),
    R.map(hex => parseInt(hex, 16)),
  )(hexColor.toString(16))
  return { r, g, b, a: a / 255 }
}

export const rgbaColors = R.map(hexToRgba, hexColors)

export const colors = R.map(
  ({ r, g, b, a }) => `rgba(${r}, ${g}, ${b}, ${a})`,
  rgbaColors,
)
