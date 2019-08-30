```js
import styled from 'styled-components'
import { Error, Text, Link, View } from '@qlean/york-web'

const Header = () => (
  <img src={require('./assets/logo.svg')} alt="Логотип Qlean"/>
)

const StyledText = styled(Text)`
  text-align: center;
`

const Footer = () => (
  <View flexDirection="column" alignItems="center">
    <StyledText>Если после перезагрузки вы видите тот же экран, то позвоните нам</StyledText>
    <Link href="tel:+74956468259">+7 495 646-82-59</Link>
  </View>
)

const statusCodes = [
  {
    value: null,
    label: 'Не указан'
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
  const [ withHeader, setWithHeader ] = React.useState(true)
  const [ withFooter, setWithFooter ] = React.useState(true)
  const [ statusCode, setStatusCode ] = React.useState(null)


  return (
    <>
      <Example.InputGroup>
        <Example.Checkbox
          value={withHeader}
          onChange={() => setWithHeader(!withHeader)}
        >
          Показывать header
        </Example.Checkbox>
        <Example.Checkbox
          value={withFooter}
          onChange={() => setWithFooter(!withFooter)}
        >
          Показывать footer
        </Example.Checkbox>
      </Example.InputGroup>
      <Example.Select
        title='Код ошибки'
        value={statusCode}
        options={statusCodes}
        onChange={(e) => setStatusCode(e.target.value)}
      />
      <Error
        statusCode={statusCode}
        header={withHeader && <Header />}
        footer={withFooter && <Footer />}
      />
    </>
  )
}

;<ExampleComponent />
```