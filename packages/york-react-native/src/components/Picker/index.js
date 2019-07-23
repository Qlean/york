import React from 'react'
import PropTypes from 'prop-types'
import { Picker as NativePicker } from 'react-native'

/**
 * Кнопка, используется для всякого кликабельного. Два параметра, отвечающих за ее внеший вид — `rank` и `backdropColor`.
 * Первый отражает важность кнопки на экране, а второй отвечает за цвет подложки.
 */
const Picker = ({ name, value, options, isDisabled, onChange, ...rest }) => {
  return (
    <NativePicker
      selectedValue={value}
      testID={name}
      enabled={!isDisabled}
      onValueChange={onChange}
      {...rest}
    >
      {options.map(option => (
        <NativePicker.Item key={option.value} {...option} />
      ))}
    </NativePicker>
  )
}

// Намерено продублировано в value, чтобы документация показывала корректно показывала возможные значения
const valuePropType = PropTypes.oneOfType([
  PropTypes.string.isRequired,
  PropTypes.number.isRequired,
])

Picker.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: valuePropType.isRequired,
      value: valuePropType.isRequired,
    }).isRequired,
  ).isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Picker
