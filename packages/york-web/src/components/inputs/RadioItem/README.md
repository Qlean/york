```js
import { RadioItem } from '@qlean/york-web'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
`

const ExampleComponent = () => {
  return (
    <StyledDiv>
      <RadioItem
        name="example"
        value="example"
        id="example"
        label="Example"
      />
      <RadioItem
        name="example"
        value="example1"
        id="example1"
        label="Example 1"
      />
    </StyledDiv>
  )
}

;<ExampleComponent />
```
