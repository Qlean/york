import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Card, sizes } from '@qlean/york-react-native'

const styles = StyleSheet.create({
  content: {
    padding: sizes[4],
  },
})

const ExampleCard = () => (
  <Card shadow="light">
    <View style={styles.content}>
      <Text preset="header2">Заголовок</Text>
      <Text>Текст</Text>
    </View>
  </Card>
)

export default ExampleCard
