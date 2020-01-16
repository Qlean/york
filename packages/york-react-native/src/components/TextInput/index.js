import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Platform,
  TextInput as NativeTextInput,
} from 'react-native'
import PropTypes from 'prop-types'
import { colors } from '@qlean/york-core'

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

/**
 * Базовое поле для ввода текста, обёртка над TextInput
 */
const TextInput = ({
  name,
  title,
  caption,
  error,
  onChange,
  isDisabled,
  style,
  onBlur,
  onFocus,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const withError = Boolean(error)

  return (
    <View>
      {title ? <Text>{title}</Text> : null}
      {caption ? (
        <Text preset="caption" color="grey">
          {caption}
        </Text>
      ) : null}
      <Separator height={1} />
      <NativeTextInput
        {...rest}
        testId={name}
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
          <Text preset="caption" color="red">
            {error}
          </Text>
        </>
      ) : null}
    </View>
  )
}

TextInput.defaultProps = {
  title: '',
  caption: '',
  placeholder: '',
  error: '',
  style: null,
  onFocus: null,
  onBlur: null,
}

TextInput.propTypes = {
  /** Имя для автотестов, прокидывается как testID  */
  name: PropTypes.string.isRequired,
  /** Значение инпута */
  value: PropTypes.string.isRequired,
  /** Коллбек, вызываемый при изменении значения с аргументом `value` */
  onChange: PropTypes.func.isRequired,
  /** Активен ли инпут */
  isDisabled: PropTypes.bool.isRequired,
  /** Заголовок */
  title: PropTypes.string,
  /** Описание */
  caption: PropTypes.string,
  /** Текст ошибки */
  error: PropTypes.string,
  /** Заглушка, используется при пустом значении */
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  /** Дополнительные стили */
  style: PropTypes.string,
}

export default TextInput
