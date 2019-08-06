```js
import styled from 'styled-components'
import { Tabs } from '@qlean/york-react-native'

const ExampleComponent = () => {
  const [selectedTab, selectTab] = React.useState('hounds')

  return (
    <Tabs
      onChange={value => selectTab(value)}
      value={selectedTab}
      options={Example.tabs}
    />
  )
}

;<ExampleComponent />
```
