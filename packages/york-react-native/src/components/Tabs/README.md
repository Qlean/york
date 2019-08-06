```js
import styled from 'styled-components'
import { Separator, View, media } from '@qlean/york-web'
import { Tabs } from '@qlean/york-react-native'

const ExampleComponent = () => {
  const [selectedTab, selectTab] = React.useState('news')

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
    <div>
    <Tabs
      onChange={value => selectTab(value)}
      value={selectedTab}
      options={tabs}
    />
    </div>
  )
}

;<ExampleComponent />
```
