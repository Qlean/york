import React, { useState } from 'react'
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
})

const Screen = ({ children, footer, ...rest }) => {
  const [contentHeight, setContentHeight] = useState(0)
  const scrollEnabled = contentHeight > height // - headerHeight ??
  return (
    <View flex={1} {...rest}>
      <ScrollView
        onContentSizeChange={(w, h) => setContentHeight(h)} // https://medium.com/@spencer_carli/enable-scroll-in-a-react-native-scrollview-based-on-the-content-size-87430ccf319b
        scrollEnabled={scrollEnabled}
      >
        {children}
      </ScrollView>
      <View style={styles.footer}>{footer || null}</View>
    </View>
  )
}

export default Screen
