```js
import styled from 'styled-components'
import { Tabs } from '@qlean/york-react-native'

const ExampleComponent = () => {
  const [selectedTab, selectTab] = React.useState('communications')

  const tabs = [
    {
      label: 'Уведомления',
      value: 'communications',
      withDot: false,
    },
    {
      label: 'Новости',
      value: 'news',
      withDot: true,
    },
  ]

  return (
    <Tabs
      onChange={value => selectTab(value)}
      value={selectedTab}
      options={tabs}
    />
  )
}

;<ExampleComponent />
```
