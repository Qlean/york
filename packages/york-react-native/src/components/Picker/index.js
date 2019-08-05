import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Modal,
  View,
  ScrollView,
  Image,
  Platform,
  Dimensions,
  Keyboard,
  StatusBar,
} from 'react-native'
import * as R from 'ramda'
import { colors } from '@qlean/york-core'

import Text from 'york-react-native/components/Text'
import Separator from 'york-react-native/components/Separator'

import { uiPoint, sizes } from 'york-react-native/utils/styles'

const pickerPaddignHorizontal = sizes[6]
const pickerItemHeight = uiPoint * 11
const pickerContentPaddingVertical = sizes[2]

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

/**
 * Dimensions возвращает полную высоту экрана, поэтому на Андроиде нужно компенсировать высоту
 * статус бара.
 * */
const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0

const totalVerticalPadding = uiPoint * 28
const maxPickerHeight = screenHeight - totalVerticalPadding - statusBarHeight
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: sizes[3],
    paddingRight: sizes[2],
  },
  inputText: {
    flex: 1,
  },
  inputIcon: {
    width: sizes[6],
    height: sizes[6],
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
    opacity: 0.4,
  },
  pickerWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    /**
     * Сдвигаем окно пикера немного вверх, чтобы он выглядет симпатичнее и его было легче закрыть
     */
    marginBottom: sizes[6],
  },
  pickerScrollView: {
    maxWidth: maxPickerWidth,
    backgroundColor: colors.white,
    /**
     * На Андроиде скругление не работает как задумано и выглядит инородно из-за прямых скроллбаров
     */
    borderRadius: Platform.OS === 'ios' ? 4 : 0,
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
    backgroundColor: colors.whisper,
  },
})

/**
 * Пикер, используется для выбора одной опции из нескольких. Поддерживает пустую строку в качестве
 * неопределенного значения. Если в `options` есть соответствующий пункт, то будет отображать его,
 * если нет, то `placeholder`.
 *
 * Компонент `Modal` пока не поддерживается в `react-native-web`, поэтому открытый пикер показан
 * на скриншоте.
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

  const pickerHeight = Math.min(
    options.length * pickerItemHeight + pickerContentPaddingVertical * 2,
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
            style={styles.inputText}
            color={withValue && !isDisabled ? 'coal' : 'grey'}
            numberOfLines={1}
          >
            {withValue ? valueLabel : placeholder}
          </Text>
          <Image
            style={styles.inputIcon}
            source={
              isDisabled
                ? require('./assets/chevronDisabled.png')
                : require('./assets/chevron.png')
            }
          />
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
          <TouchableWithoutFeedback onPress={hideModal}>
            <View style={styles.modal} />
          </TouchableWithoutFeedback>
          <View style={styles.pickerWrapper} pointerEvents="box-none">
            <View style={{ height: pickerHeight }}>
              <ScrollView style={styles.pickerScrollView}>
                <View style={styles.pickerContent}>
                  {options.map((item, i) => (
                    <TouchableHighlight
                      key={item.value}
                      underlayColor={colors.coal}
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
