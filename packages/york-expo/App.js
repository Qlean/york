import React, { useEffect, useState } from 'react'
import { View, Switch, StyleSheet, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import * as Font from 'expo-font'

import {
  Header,
  Picker,
  Separator,
  Text,
  Screen,
  Button,
} from '@qlean/york-react-native'

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  labeledSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
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
          view: <Header.BackIcon />,
          onPress: () => console.log('aaa'),
        }}
        rightView={{
          view: <Header.CloseIcon />,
          onPress: () => {},
          isDisabled: true,
        }}
        footer={
          <Button
            isDisabled={false}
            onPress={() => {}}
            name="footer"
            withShadow
            title="Footer"
          />
        }
        // header={
        //   <Header
        //     title="Аляскинский маламут"
        //     caption="Аляскинский маламут — достаточно крупная собака аборигенного типа"
        //     leftView={{
        //       view: <Header.BackIcon />,
        //       onPress: () => {},
        //     }}
        //     rightView={{
        //       view: <Header.CloseIcon />,
        //       onPress: () => {},
        //       isDisabled: true,
        //     }}
        //   />
        // }
        contentContainerStyle={{ padding: 20 }}
        footerContainerStyle={{ padding: 10 }}
      >
        {/* <View style={styles.screen}> */}
        <TextInput
          style={{
            borderColor: 'green',
            borderWidth: 1,
            padding: 10,
            marginBottom: 10,
          }}
        />
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
        {/* drop it */}
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
        {/* drop it */}
        {/* </View> */}
      </Screen>
    )
  )
}
