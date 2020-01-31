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
  const [size, setSize] = React.useState('m')

  return (
    <>
      <Example.InputGroup>
        <Example.Select
          title="size"
          value={size}
          options={['s', 'm', 'l'].map(value => ({ value, label: value }))}
          onChange={e => setSize(e.target.value)}
        />
        <Example.Checkbox
          value={isLoading}
          onChange={() => setIsLoading(!isLoading)}
        >
          isLoading
        </Example.Checkbox>
      </Example.InputGroup>
      <Loader isLoading={isLoading} size={size}>
        <StyledContent justifyContent="center" alignItems="center">
          <Text>{Example.text.short}</Text>
        </StyledContent>
      </Loader>
    </>
  )
}

;<ExampleComponent />
```
