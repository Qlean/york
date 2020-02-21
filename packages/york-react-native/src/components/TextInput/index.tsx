import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Platform,
  TextInput as NativeTextInput,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputEndEditingEventData,
} from 'react-native'
import { colors, colorNames } from '@qlean/york-core'

import Text from 'york-react-native/components/Text'
import Separator from 'york-react-native/components/Separator'
import {
  sizes,
  borderRadiuses,
  fontFamily,
} from 'york-react-native/utils/styles'

const styles = StyleSheet.create({
  input: {
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: colors.white,
    color: colors.coal,
    borderColor: colors.silver,
    borderWidth: 1,
    fontSize: 16,
    borderRadius: borderRadiuses.small,
    paddingLeft: sizes[3],
    ...Platform.select({
      ios: { fontFamily },
      android: { fontFamily },
      web: { fontFamily: 'Museo Sans', fontWeight: '500' },
    }),
  },
  active: {
    borderColor: colors.grey,
  },
  disabled: {
    backgroundColor: colors.smoke,
    borderColor: colors.silver,
    color: colors.grey,
  },
  error: {
    borderColor: colors.red,
  },
})

type Props = {
  /** Имя для автотестов, прокидывается как testID  */
  name: string
  /** Значение инпута */
  value: string
  /** Коллбек, вызываемый при изменении значения с аргументом `value` */
  onChange: (text: string) => void
  /** Активен ли инпут */
  isDisabled: boolean
  /** Заголовок */
  title?: string
  /** Описание */
  caption?: string
  /** Текст ошибки */
  error?: string
  /** Заглушка, используется при пустом значении */
  placeholder?: string
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
  onBlur?: (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void
  /** Дополнительные стили */
  style?: string
} & TextInputProps

/**
 * Базовое поле для ввода текста, обёртка над TextInput
 */
const TextInput = ({
  name,
  title = '',
  caption = '',
  error,
  onChange,
  isDisabled,
  style,
  onBlur,
  onFocus,
  ...rest
}: Props) => {
  const [isFocused, setIsFocused] = useState(false)
  const withError = Boolean(error)

  return (
    <View>
      {title ? <Text>{title}</Text> : null}
      {caption ? (
        <Text preset="caption" color={colorNames.grey}>
          {caption}
        </Text>
      ) : null}
      <Separator height={1} />
      <NativeTextInput
        {...rest}
        testID={name}
        onChangeText={onChange}
        onFocus={e => {
          if (onFocus) onFocus(e)
          setIsFocused(true)
        }}
        onEndEditing={e => {
          if (onBlur) onBlur(e)
          setIsFocused(false)
        }}
        placeholderTextColor={colors.grey}
        style={[
          styles.input,
          withError && styles.error,
          isFocused && styles.active,
          isDisabled && styles.disabled,
          style,
        ]}
        editable={!isDisabled}
      />
      {error ? (
        <>
          <Separator height={1} />
          <Text preset="caption" color={colorNames.red}>
            {error}
          </Text>
        </>
      ) : null}
    </View>
  )
}

TextInput.defaultProps = {
  placeholder: '',
}

export default TextInput
