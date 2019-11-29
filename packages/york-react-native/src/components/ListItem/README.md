```js
import { FlatList } from 'react-native'
import { Line, Text, Icon } from '@qlean/york-react-native'

const ItemSeparatorComponent = () => <Line />
const keyExtractor = ({ value }) => String(value)

const options = [
  {
    title: 'Оплата за заказ',
    caption: '11 августа в 9:00',
    value: 200,
  },
  {
    title: 'Бонус',
    caption: '10 августа в 9:00',
    value: 100,
  },
]

;<>
  <ListItem
    title="Заголовок"
    caption={<Text color="red">Кастомная подпись</Text>}
    value="1"
    isDisabled
  />
  <Line />
  <ListItem
    title="Заголовок"
    caption={<Text color="red">Кастомная подпись</Text>}
    value={0}
    isDisabled
  />
  <Line />
  <ListItem
    title="Заголовок"
    value={<Text color="jungle">Кастомное значение</Text>}
    onPress={() => {}}
    isDisabled
  />
  <Line />
  <ListItem
    title="Заголовок"
    caption="Подпись"
    value={<Icon name="arrow" />}
    onPress={() => {}}
    isDisabled={false}
  />
  <Line />
  <FlatList
    scrollEnabled={false}
    data={options}
    keyExtractor={keyExtractor}
    ItemSeparatorComponent={ItemSeparatorComponent}
    renderItem={({ item }) => <ListItem isDisabled {...item} />}
  />
</>
```
