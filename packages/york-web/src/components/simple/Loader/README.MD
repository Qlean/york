```js
import { Loader, Text, View, sizes } from '@qlean/york-web'
import styled from 'styled-components'

const StyledContainer = styled.div`
  height: ${sizes[24]}px;
`

const StyledContent = styled(View)`
  height: 100%;
  width: 100%;
`

const ExampleComponent = () => {
  const [isLoading, setIsLoading] = React.useState(true)

  return (
    <>
      <Example.InputGroup>
        <Example.Checkbox
          value={isLoading}
          onChange={() => setIsLoading(!isLoading)}
        >
          isLoading
        </Example.Checkbox>
      </Example.InputGroup>
      <StyledContainer>
        <Loader isLoading={isLoading} spinnerProps={{ color: 'red', size: 'l' }}>
          <StyledContent justifyContent="center" alignItems="center">
            <Text>{Example.text.short}</Text>
          </StyledContent>
        </Loader>
      </StyledContainer>
    </>
  )
}

;<ExampleComponent />
```