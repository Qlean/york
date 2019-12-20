import React, { useState } from 'react'
import { View, StyleSheet, TextInput as NativeTextInput } from 'react-native'
import PropTypes from 'prop-types'
import { colors } from '@qlean/york-core'

import Text from 'york-react-native/components/Text'
import Separator from 'york-react-native/components/Separator'
import { sizes, borderRadiuses } from 'york-react-native/utils/styles'

const styles = StyleSheet.create({
  input: {
    paddingTop: 12,
    paddingBottom: 13,
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
    color: colors.grey,
  },
  error: {
    borderColor: colors.red,
  },
})

/**
 * Базовое поле для ввода текста
 */
function TextInput(props) {
  const {
    isDisabled,
    title,
    caption,
    error,
    name,
    onChange,
    style,
    ...rest
  } = props
  const [isActive, setIsActive] = useState(false)
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
        onChangeText={text => onChange(text)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        placeholderTextColor={colors.grey}
        style={[
          styles.input,
          withError && styles.error,
          isActive && styles.active,
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
  style: PropTypes.string,
}

export default TextInput
