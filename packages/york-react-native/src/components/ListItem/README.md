```js
import { FlatList } from 'react-native'
import { Line } from '@qlean/york-react-native'

const ItemSeparatorComponent = () => <Line />
const keyExtractor = ({ value }) => String(value)

const options = [
  {
    title: 'Оплата за заказ',
    caption: "11 августа в 9:00",
    value: 200
  },
  {
    title: 'Бонус',
    caption: "10 августа в 9:00",
    value: 100
  }
]

;<>
  <ListItem title="Настройки" onPress={() => {}} withArrow />
  <Line />
  <ListItem title="Все заказы" onPress={() => {}} withArrow />
  <Line />
  <FlatList
    scrollEnabled={false}
    data={options}
    keyExtractor={keyExtractor}
    ItemSeparatorComponent={ItemSeparatorComponent}
    renderItem={({ item }) => <ListItem {...item} />}
  />
</>
```
