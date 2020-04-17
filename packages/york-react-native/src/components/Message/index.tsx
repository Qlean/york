import React, { useMemo } from 'react'
import { GestureResponderEvent } from 'react-native'
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native'
import { colors } from '@qlean/york-core'

import { Icon, Text } from 'york-react-native/components'
import {
  borderRadiuses,
  sizes,
} from 'york-react-native/utils/styles'

type MessageObject = {
  text: string,
  icon?: 'success' | 'error',
  onPress?: (event: GestureResponderEvent) => void,
}
export type Message = string | Error | MessageObject

const defaultMessageObject: MessageObject = {
  text: '',
  icon: undefined,
  onPress: undefined,
}

type Props = {
  /** Сообщение */
  message: Message,
  /** Индекс сообщения в массиве сообщений */
  index: number,
  /** Общее количество сообщений в массиве */
  count: number,
}

const styles = StyleSheet.create({
  root: {
    marginTop: sizes[2],
    marginHorizontal: sizes[2],
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
    marginRight: sizes[3],
  }
})

const normalizeMessage = (message: Message): MessageObject => {
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
const Message = ({ message, index, count }: Props) => {
  const {
    text,
    icon,
    onPress,
  } = useMemo(() => normalizeMessage(message), [message])
  const isBehind = index < count - 1

  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <View
        style={{
          ...styles.root,
          paddingHorizontal: icon ? sizes[3] : sizes[4],
          opacity: isBehind ? 0.8 : 1,
        }}
      >
        <View>
          <View style={styles.messageView}>
            {icon && <Icon name={icon} style={styles.icon} />}
            <Text style={styles.text} preset="caption">{text}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Message
