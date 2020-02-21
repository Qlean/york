import React from 'react'
import { View, StyleSheet, ViewProps } from 'react-native'

import { sizes } from 'york-react-native/utils/styles'

type FooterProps = ViewProps

const styles = StyleSheet.create({
  footer: {
    padding: sizes[2],
    paddingTop: 0,
  },
})

const ScreenFooter = ({ style, ...rest }: FooterProps) => (
  <View {...rest} style={[styles.footer, style]} />
)

export default ScreenFooter
