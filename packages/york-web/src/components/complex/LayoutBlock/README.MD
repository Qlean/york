```js
import styled from 'styled-components'
import { LayoutBlock } from '@qlean/york-web'
import { colors } from '@qlean/york-core'

const StyledFrame = styled(Example.Frame)`
  height: auto;
`

const StyledLayoutBlock = styled(LayoutBlock)`
  background-color: ${colors.silver};
`

const StyledBox = styled(Example.Box)`
  width: 100%;
`

const ExampleComponent = () => {
  const [withVerticalPadding, setWithVerticalPadding] = React.useState(false)
  return (
    <>
      <Example.InputGroup>
        <Example.Checkbox
          value={withVerticalPadding}
          onChange={() => setWithVerticalPadding(!withVerticalPadding)}
        >
          withVerticalPadding
        </Example.Checkbox>
      </Example.InputGroup>
      <StyledFrame>
        <StyledLayoutBlock withVerticalPadding={withVerticalPadding}>
          <StyledBox />
        </StyledLayoutBlock>
      </StyledFrame>
    </>
  )
}

;<ExampleComponent />
```
