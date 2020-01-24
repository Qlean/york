```js
import { TouchableOpacity } from 'react-native'
import { ListItem } from '@qlean/york-react-native'

const ExampleComponent = () => {
  const [value, setValue] = React.useState(false)

  return (
    <TouchableOpacity style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
      <RadioItem
        name="expamleRadioGroup"
        isSelected={value}
        onPress={() => setValue(true)}
      />
      <ListItem title="Example" caption="example"/>
    </TouchableOpacity>
  )
}

;<ExampleComponent />
```
