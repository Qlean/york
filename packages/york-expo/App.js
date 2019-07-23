import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import * as Font from 'expo-font'

import { colors } from '@qlean/york-core'
import { Button } from '@qlean/york-react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

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
  return (
    isFontsLoaded && (
      <View style={styles.container}>
        <Button isDisabled={false}>Кнопка!</Button>
      </View>
    )
  )
}
