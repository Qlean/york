import React, { useState } from 'react'
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native'
import { colors } from '@qlean/york-core'

import { safeAreaPaddingTop } from 'york-react-native/utils/styles'

const { height: screenHeight } = Dimensions.get('window')

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
})

const Screen = ({ children, header, footer, ...rest }) => {
  const [contentHeight, setContentHeight] = useState(0)
  const [footerHeight, setFooterHeight] = useState(0)
  const scrollEnabled = contentHeight > screenHeight // - headerHeight ??
  return (
    <>
      <StatusBar
        barStyle="dark-content" // ["dark-content", "light-content", "default"]
        backgroundColor={colors.green} // android
        translucent={false} // android
      />
      <SafeAreaView flex={1} {...rest}>
        {header || null}
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior="height" // enum('height', 'position', 'padding')
          enabled
          keyboardVerticalOffset={StatusBar.currentHeight || safeAreaPaddingTop} // don't know why but it works with sticky footer
        >
          <ScrollView
            onContentSizeChange={(w, h) => setContentHeight(h)} // https://medium.com/@spencer_carli/enable-scroll-in-a-react-native-scrollview-based-on-the-content-size-87430ccf319b
            scrollEnabled={scrollEnabled} // works bad with KeyboardAvoidingView
          >
            {children}
            <View
              style={{
                height: footerHeight,
              }}
            />
          </ScrollView>
          <View
            style={styles.footer}
            onLayout={({
              nativeEvent: {
                layout: { height },
              },
            }) => setFooterHeight(height)}
          >
            {footer || null}
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  )
}

export default Screen
