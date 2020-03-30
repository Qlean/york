import React from 'react'
import { GestureResponderEvent } from 'react-native'
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native'
import { colors } from '@qlean/york-core'

import { Text } from 'york-react-native/components'
import {
  borderRadiuses,
  sizes,
} from 'york-react-native/utils/styles'

const errorImage = require('./assets/error.png')
const successImage = require('./assets/success.png')

type messageObject = {
  text: string,
  icon?: 'success' | 'error',
  onPress?: (event: GestureResponderEvent) => void,
}
type messageType = string | Error | messageObject

const defaultMessageObject: messageObject = {
  text: '',
  icon: undefined,
  onPress: undefined,
}

type Props = {
  /** Сообщение */
  message: messageType,
  index: number,
}

const styles = StyleSheet.create({
  root: {
    marginTop: sizes[1],
    marginHorizontal: sizes[1],
    backgroundColor: colors.coal,
    paddingVertical: sizes[3],
    minHeight: sizes[12],
    justifyContent: 'center',
    borderRadius: borderRadiuses.small,
  },
  messageView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: colors.smoke,
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: sizes[3],
  }
})

const normalizeMessage = (message: messageType): messageObject => {
  if (typeof message === 'string') {
    return {
      ...defaultMessageObject,
      text: message,
    }
  }
  if (message instanceof Error) {
    return {
      ...defaultMessageObject,
      text: message.message,
      icon: 'error',
    }
  }
  if (typeof message === 'object') {
    return {
      ...message,
    }
  }
  return defaultMessageObject
}

/**
 * Уведомление
 */
const Message = ({ message, index }: Props) => {
  const {
    text,
    icon,
    onPress,
  } = normalizeMessage(message)
  const imageSource = icon === 'error' ? errorImage : successImage
  const isBehind = index > 0

  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <View
        style={{
          ...styles.root,
          paddingHorizontal: icon ? sizes[3] : sizes[4],
          opacity: isBehind ? 0.8 : 0.95,
        }}
      >
        <View>
          <View style={styles.messageView}>
            {icon && <Image source={imageSource} style={styles.icon} />}
            <Text style={styles.text} preset="caption">{text}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Message
