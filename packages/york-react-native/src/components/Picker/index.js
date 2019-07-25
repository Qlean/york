import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  View,
  ScrollView,
  Platform,
  Dimensions,
  Keyboard,
} from 'react-native'
import * as R from 'ramda'
import { colors } from '@qlean/york-core'

import Text from 'york-react-native/components/Text'
import Separator from 'york-react-native/components/Separator'

import { uiPoint, sizes } from 'york-react-native/utils/styles'

const pickerPaddingTop = sizes[12]
const pickerPaddingBottom = sizes[16]
const pickerPaddignHorizontal = sizes[6]
const pickerItemHeight = sizes[12]
const pickerContentPaddingVertical = sizes[2]

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

/**
 * Dimensions возвращает полную высоту экрана, поэтому на аднроиде нужно компенсировать высоту
 * статус бара. Она не всегда равна точно 25, но расхождение в пару пунктов крайне незначительно
 * влияет на общие пропорции модального окна.
 * */
const statusBarHeight = Platform.OS === 'android' ? 25 : 0

const maxPickerHeight = screenHeight - pickerPaddingTop - pickerPaddingBottom
const maxPickerWidth = screenWidth - pickerPaddignHorizontal * 2

const styles = StyleSheet.create({
  input: {
    height: uiPoint * 10,
    backgroundColor: colors.white,
    borderColor: colors.silver,
    borderWidth: 1,
    borderRadius: 4,
  },
  inputError: {
    borderColor: colors.red,
  },
  inputDisabled: {
    backgroundColor: colors.smoke,
  },
  inputContent: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: sizes[3],
  },
  modal: {
    flex: 1,
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.black,
    opacity: 0.7,
  },
  pickerWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: pickerPaddingBottom - pickerPaddingTop + statusBarHeight,
    paddingHorizontal: sizes[5],
  },
  picker: {
    backgroundColor: colors.white,
    maxWidth: maxPickerWidth,
    elevation: 5, //////ios?
  },
  pickerContent: {
    paddingVertical: pickerContentPaddingVertical,
  },
  pickerItem: {
    height: pickerItemHeight,
    minWidth: uiPoint * 50,
    paddingHorizontal: sizes[6],
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  pickerItemSelected: {
    backgroundColor: colors.silver,
  },
})

/**
 * Пикер, используется для выбора одной опции из нескольких. Поддерживает пустую строку в качестве
 * неопределенного значения. Если в `options` есть соответствующий пункт, то будет отображать его,
 * если нет, то `placeholder`.
 */
export default function Picker({
  name,
  options,
  value,
  title,
  caption,
  placeholder,
  error,
  isDisabled,
  onChange,
}) {
  const [isModalVisible, setIsModalVisible] = useState(false)

  console.log(value)

  const pickerHeight = Math.min(
    options.length * pickerItemHeight + 2 * pickerContentPaddingVertical,
    maxPickerHeight,
  )
  const valueLabel = (options.find(item => item.value === value) || {}).label
  const withValue = !R.isNil(valueLabel) && value !== ''
  const withTitle = Boolean(title)
  const withCaption = Boolean(caption)
  const withError = Boolean(error)

  const showModal = () => {
    Keyboard.dismiss()
    setIsModalVisible(true)
  }

  const hideModal = () => {
    setIsModalVisible(false)
  }

  const onItemPress = (...args) => () => {
    onChange(...args)
    /**
     * Небольшая задержка перед закрытием позволяет лучше понять что нажатие состоялось и увидеть
     * какой именно пункт был выбран.
     */
    setTimeout(() => hideModal(), 100)
  }

  return (
    <View>
      {withTitle && <Text>{title}</Text>}
      {withCaption && (
        <Text preset="caption" color="grey">
          {caption}
        </Text>
      )}
      {(withTitle || withCaption) && <Separator height={1} />}
      <View
        style={[
          styles.input,
          withError && !isDisabled && styles.inputError,
          isDisabled && styles.inputDisabled,
        ]}
      >
        <TouchableOpacity
          testID={name}
          style={styles.inputContent}
          disabled={isDisabled}
          onPress={showModal}
        >
          <Text
            color={withValue && !isDisabled ? 'coal' : 'grey'}
            numberOfLines={1}
          >
            {withValue ? valueLabel : placeholder}
          </Text>
        </TouchableOpacity>
      </View>
      {withError && (
        <>
          <Separator height={1} />
          <Text preset="caption" color="red">
            {error}
          </Text>
        </>
      )}
      {/* react-native-web не поддерживает Modal */}
      {Platform.OS !== 'web' && (
        <Modal
          animationType="fade"
          transparent
          visible={isModalVisible}
          onRequestClose={hideModal}
        >
          <View style={styles.modalBackground} />
          {/* TouchableWithoutFeedback требует передачи children */}
          <TouchableOpacity
            style={styles.modal}
            activeOpacity={1}
            onPress={hideModal}
          />
          <View style={styles.pickerWrapper} pointerEvents="box-none">
            <View style={[styles.picker, { height: pickerHeight }]}>
              <ScrollView>
                <View style={styles.pickerContent}>
                  {options.map((item, i) => (
                    <TouchableHighlight
                      key={item.value}
                      underlayColor={colors.silver}
                      onPress={onItemPress(item.value, i)}
                    >
                      <View
                        style={[
                          styles.pickerItem,
                          value === item.value && styles.pickerItemSelected,
                        ]}
                      >
                        <Text size="h2" numberOfLines={1}>
                          {item.label}
                        </Text>
                      </View>
                    </TouchableHighlight>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
      )}
    </View>
  )
}

Picker.propTypes = {
  /** Имя для автотестов, прокидывается как testID */
  name: PropTypes.string.isRequired,
  /** Список опций */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]).isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  /** Значение пикера */
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]).isRequired,
  /** Заголовок */
  title: PropTypes.string,
  /** Описание */
  caption: PropTypes.string,
  /** Заглушка, используется при пустом значении */
  placeholder: PropTypes.string,
  /** Текст ошибки */
  error: PropTypes.string,
  /** Активен ли пикер */
  isDisabled: PropTypes.bool.isRequired,
  /** Коллбек, вызываемый при изменении значения с аргументами `value` и `index` */
  onChange: PropTypes.func.isRequired,
}

Picker.defaultProps = {
  title: '',
  caption: '',
  placeholder: '',
  error: '',
}
