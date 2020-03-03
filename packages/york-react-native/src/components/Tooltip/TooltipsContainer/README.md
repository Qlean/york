```js
import { Tooltip, TooltipsContainer, Portal } from '@qlean/york-react-native'
import styled from 'styled-components'

const Container = styled(Example.Showcase)`
  position: relative;
  height: 100px;
`

const SomeVisibleContent = styled(Example.ShowcaseItem)`
  background: #eee;
`

const tooltipConfig = {
  pinPointDownside: {
    top: 45,
    left: 100,
  },
  pinPointUpside: {
    top: 5,
    left: 150,
  },
}

const ExampleComponent = () => {
  return (
    <Container>
      <Portal.Provider>
        <TooltipsContainer>
          <SomeVisibleContent>Какой-то контент для юзера, который надо пометить тултипом</SomeVisibleContent>
          <Tooltip text="Какой-то текст для юзера" config={tooltipConfig} />
        </TooltipsContainer>
      </Portal.Provider>
    </Container>
  )
}

;<ExampleComponent />
```
