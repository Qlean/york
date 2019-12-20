import React, { useState } from 'react'
import { View, StyleSheet, TextInput as NativeTextInput } from 'react-native'
import PropTypes from 'prop-types'
import { colors } from '@qlean/york-core'

import Text from 'york-react-native/components/Text'
import Separator from 'york-react-native/components/Separator'
import { uiPoint, sizes, borderRadiuses } from 'york-react-native/utils/styles'

const styles = StyleSheet.create({
  input: {
    height: uiPoint * 10,
    backgroundColor: colors.white,
    color: colors.coal,
    borderColor: colors.silver,
    borderWidth: 1,
    fontSize: 16,
    borderRadius: borderRadiuses.small,
    paddingLeft: sizes[3],
  },
  active: {
    borderColor: colors.grey,
  },
  disabled: {
    backgroundColor: colors.smoke,
    borderColor: colors.silver,
  },
  error: {
    borderColor: colors.red,
  },
})

/**
 * Базовое однострочное поле для ввода текста, аналог `input` без `type`.
 */
function TextInput(props) {
  const { isDisabled, title, caption, error, name, onChange, ...rest } = props
  const [isActive, setIsActive] = useState(false)
  const withError = Boolean(error)

  return (
    <View>
      {title && <Text>{title}</Text>}
      {caption && (
        <Text preset="caption" color="grey">
          {caption}
        </Text>
      )}
      <Separator height={1} />
      <NativeTextInput
        {...rest}
        numberOfLines={1}
        testId={name}
        onChangeText={onChange}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        placeholderTextColor={colors.grey}
        style={[
          styles.input,
          withError && styles.error,
          isActive && styles.active,
          isDisabled && styles.disabled,
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
}

TextInput.propTypes = {
  /** Имя для автотестов, прокидывается как testID  */
  name: PropTypes.string.isRequired,
  /** Значение поля */
  value: PropTypes.string.isRequired,
  /** Коллбек, вызываемый при изменении значения с аргументами `value` и `index` */
  onChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  title: PropTypes.string,
  caption: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
}

export default TextInput
