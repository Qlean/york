import React, { useEffect, useState } from 'react'
import { View, Switch, StyleSheet, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import * as Font from 'expo-font'

import { colors } from '@qlean/york-core'
import {
  Picker,
  Separator,
  Text,
  Screen,
  Button,
  Icon,
  uiPoint,
  sizes,
} from '@qlean/york-react-native'

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  labeledSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    height: uiPoint * 10,
    backgroundColor: colors.white,
    borderColor: colors.silver,
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: sizes[3],
  },
})

const options = [
  {
    label: 'Йоркширский терьер',
    value: 'york',
  },
  {
    label: 'Вельш-корги',
    value: 'corgi',
  },
  {
    label: 'Сибирский хаски',
    value: 'husky',
  },
  {
    label: 'Немецкая овчарка',
    value: 'shepherd',
  },
  {
    label: 'Австралийская короткохвостая пастушья собака',
    value: 'heeler',
  },
  {
    label: 'Аляскинский маламут',
    value: 'malamute',
  },
  {
    label: 'Самоедская собака',
    value: 'samoyed',
  },
  {
    label: 'Восточносибирская лайка',
    value: 'laika',
  },
  {
    label: 'Русская псовая борзая',
    value: 'borzoi',
  },
]

const LabeledSwitch = ({ label, ...rest }) => (
  <View style={styles.labeledSwitch}>
    <Switch {...rest} />
    <Separator width={2} />
    <Text>{label}</Text>
  </View>
)

LabeledSwitch.propTypes = {
  label: PropTypes.string.isRequired,
}

export default function App() {
  const [isFontsLoaded, setIsFontsLoaded] = useState(false)
  const loadFonts = async () => {
    await Font.loadAsync({
      'MuseoSansCyrl-500': require('./assets/fonts/MuseoSansCyrl-500.otf'),
      'MuseoSansCyrl-700': require('./assets/fonts/MuseoSansCyrl-700.otf'),
    })
    setIsFontsLoaded(true)
  }
  useEffect(() => {
    loadFonts()
  }, [])

  const [pickerValue, setPickerValue] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)
  const [withError, setWithError] = useState(false)

  return (
    isFontsLoaded && (
      <Screen
        leftView={{
          node: <Icon name="back" />,
          onPress: () => {},
        }}
        rightView={{
          node: <Icon name="close" />,
          onPress: () => {},
          isDisabled: true,
        }}
        footer={
          <Screen.Footer>
            <Button
              isDisabled={false}
              onPress={() => {}}
              name="footer"
              withShadow
              title="Footer"
            />
          </Screen.Footer>
        }
        contentContainerStyle={styles.screen}
        withSafeAreaPaddingTop={false}
      >
        <LabeledSwitch
          label="isDisabled!"
          value={isDisabled}
          onValueChange={setIsDisabled}
        />
        <Separator height={2} />
        <LabeledSwitch
          label="error"
          value={withError}
          onValueChange={setWithError}
        />
        <Separator height={4} />
        <Picker
          title="Собака"
          caption="Разные клевые собаки"
          placeholder="Выберите собаку..."
          error={withError ? 'Что-то пошло не так' : ''}
          name="doggo"
          value={pickerValue}
          options={options}
          isDisabled={isDisabled}
          onChange={v => setPickerValue(v)}
        />
        <Separator height={4} />
        <TextInput style={styles.textInput} placeholder="Напиши что-нибудь" />
      </Screen>
    )
  )
}
