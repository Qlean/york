import React, { useMemo, useState } from 'react'
import { Dimensions, StyleSheet, View, StyleProp, ViewStyle } from 'react-native'
import { Text, Separator} from 'york-react-native/components'
import { sizes} from 'york-react-native/utils/styles'
import { colors, colorNames } from '@qlean/york-core'


const screenMargin = sizes[4]
const { width: screenWidth, height: screenHeight }: Dimension = Dimensions.get('window')

const pinInnerMargin = sizes[2]
const pinSide = sizes[3]
const pinHeight = (pinSide * Math.sqrt(2)) / 2
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    maxWidth: screenWidth - screenMargin * 2,
  },
  pin: {
    position: 'absolute',

    width: pinSide,
    height: pinSide,

    borderRadius: 1,

    backgroundColor: colors.coal,
  },
  pinDownside: {
    top: 0,
    transform: [{ translateX: -pinSide / 2 }, { translateY: pinHeight - pinSide / 2 }, { rotate: '45deg' }],
  },
  pinUpside: {
    bottom: 0,
    transform: [{ translateX: -pinSide / 2 }, { translateY: pinSide / 2 - pinHeight }, { rotate: '45deg' }],
  },
  content: {
    flex: 1,

    paddingHorizontal: sizes[3],
    borderRadius: sizes[1],
    shadowColor: colors.black,
    shadowOffset: { width: sizes[1], height: sizes[2] },
    shadowOpacity: 0.16,

    backgroundColor: colors.coal,
  },
})

enum SIDE {
  UPSIDE,
  DOWNSIDE,
}

function getSide(
  pinPointDownsideTop: PositionUnit,
  pinPointUpsideTop: PositionUnit,
  height: DimensionUnit,
  preferredSide: SIDE = SIDE.DOWNSIDE,
): SIDE {
  if (preferredSide === SIDE.DOWNSIDE && pinPointDownsideTop + height > screenHeight - screenMargin) {
    return SIDE.UPSIDE
  }

  if (preferredSide === SIDE.UPSIDE && pinPointUpsideTop - height < screenMargin) {
    return SIDE.DOWNSIDE
  }

  return preferredSide
}

const getPosition = (
  pinPointDownsidePosition: PositionTL,
  pinPointUpsidePosition: PositionTL,
  { width: resultWidth, height: resultHeight }: Dimension,
  preferredSide?: SIDE,
): [PositionTL, PositionUnit, SIDE] => {
  const side: SIDE = getSide(pinPointDownsidePosition.top, pinPointUpsidePosition.top, resultHeight, preferredSide)

  const pinLeft: PositionUnit = side === SIDE.DOWNSIDE ? pinPointDownsidePosition.left : pinPointUpsidePosition.left
  let left: PositionUnit
  let pinInnerLeft: PositionUnit
  if (pinLeft < resultWidth / 2 + screenMargin) {
    left = screenMargin
    pinInnerLeft = pinLeft - screenMargin
  } else if (pinLeft > screenWidth - screenMargin - resultWidth / 2) {
    left = screenWidth - screenMargin - resultWidth
    pinInnerLeft = pinLeft - left
  } else {
    left = pinLeft - resultWidth / 2
    pinInnerLeft = resultWidth / 2
  }

  if (
    (typeof __DEV__ !== 'undefined' && __DEV__ && pinInnerLeft < pinHeight + pinInnerMargin) ||
    pinInnerLeft + pinHeight > resultWidth - pinInnerMargin
  ) {
    throw new Error(`A pin left position is out of range for a tooltip: ${pinInnerLeft}`)
  }

  return [
    {
      top: side === SIDE.DOWNSIDE ? pinPointDownsidePosition.top : pinPointUpsidePosition.top - resultHeight,
      left,
    },
    pinInnerLeft,
    side,
  ]
}

type ItemProps = {
  text: string
  width: DimensionUnit | undefined
  pinPointDownside: PositionTL
  pinPointUpside: PositionTL
}

const Item: React.FC<ItemProps> = ({ text, width, pinPointDownside, pinPointUpside }) => {
  const [position, setPosition] = useState<PositionTL>({ top: 0, left: 0 })
  const [pinInnerLeft, setPinInnerLeft] = useState<PositionUnit>(0)
  const [side, setSide] = useState<SIDE>(SIDE.DOWNSIDE)

  const style = useMemo((): Record<string, StyleProp<ViewStyle>> => {
    return {
      container: {
        ...styles.container,
        width,
        ...position,
        ...(side === SIDE.DOWNSIDE ? { paddingTop: pinHeight } : { paddingBottom: pinHeight }),
      },
      pin: {
        ...styles.pin,
        ...(side === SIDE.DOWNSIDE ? styles.pinDownside : styles.pinUpside),
        left: pinInnerLeft,
      },
    }
  }, [position.top, position.left, setPinInnerLeft, side, pinInnerLeft])
  

  const onLayout = ({ nativeEvent: { layout } }: { nativeEvent: { layout: Dimension } }) => {
    const [nextPos, nextPinInnerLeft, nextSide] = getPosition(pinPointDownside, pinPointUpside, layout)

    setPosition(nextPos)
    setPinInnerLeft(nextPinInnerLeft)
    setSide(nextSide)
  }

  return (
    <View onLayout={onLayout} style={style.container}>
      <View style={style.pin} />
      <View style={styles.content}>
        <Separator height={2} />
        <Text preset="caption" color={colorNames.white}>
          {text}
        </Text>
        <Separator height={2} />
      </View>
    </View>
  )
}

Item.defaultProps = {
  width: undefined,
}

export default Item
