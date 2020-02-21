```js
import { StyleSheet, View } from 'react-native'
import { Separator, Text, sizes } from '@qlean/york-react-native'

const styles = StyleSheet.create({
  cardContent: {
    padding: sizes[4]
  }
})

;<>
  <Card shadow="strong">
    <View style={styles.cardContent}>
      <Text preset="header2">Уберём всё</Text>
      <Separator height={2} />
      <Text>Совсем всё, правда-правда</Text>
    </View>
  </Card>
</>
```
