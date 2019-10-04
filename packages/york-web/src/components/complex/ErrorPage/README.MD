```js
import styled from 'styled-components'
import { ErrorPage, Text, Link, View } from '@qlean/york-web'

const Header = () => (
  <img src={require('./assets/logo.svg')} alt="Логотип Qlean" />
)

const StyledContainer = styled(View)`
  text-align: center;
`

const Footer = () => (
  <StyledContainer flexDirection="column" alignItems="center">
    <Text>
      Если после перезагрузки вы видите тот же экран, то позвоните нам
    </Text>
    <Text>
      <Link rank={1} href="tel:+74956468259" name="phone">
        +7 495 646-82-59
      </Link>
    </Text>
  </StyledContainer>
)

const statusCodes = [
  {
    value: '',
    label: 'empty',
  },
  {
    value: '404',
    label: '404',
  },
  {
    value: '500',
    label: '500',
  },
]

const ExampleComponent = () => {
  const [withHeader, setWithHeader] = React.useState(true)
  const [withFooter, setWithFooter] = React.useState(true)
  const [statusCode, setStatusCode] = React.useState('')
  return (
    <>
      <Example.InputGroup>
        <Example.Checkbox
          value={withHeader}
          onChange={() => setWithHeader(!withHeader)}
        >
          header
        </Example.Checkbox>
        <Example.Checkbox
          value={withFooter}
          onChange={() => setWithFooter(!withFooter)}
        >
          footer
        </Example.Checkbox>
      </Example.InputGroup>
      <Example.Select
        title="statusCode"
        value={statusCode}
        options={statusCodes}
        onChange={e => setStatusCode(e.target.value)}
      />
      <ErrorPage
        statusCode={Number(statusCode)}
        header={withHeader ? <Header /> : null}
        footer={withFooter ? <Footer /> : null}
      />
    </>
  )
}

;<ExampleComponent />
```
