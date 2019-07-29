```js
import { Picker } from '@qlean/york-react-native'
import { Separator } from '@qlean/york-web'

const ExampleComponent = () => {
  const [withValue, setWithValue] = React.useState(true)
  const [withExtraProps, setWithExtraProps] = React.useState(false)
  const [isDisabled, setIsDisabled] = React.useState(false)

  const extraProps = withExtraProps
    ? {
        title: 'Title',
        caption: 'Caption',
        error: 'Error',
        placeholder: 'Placeholder',
      }
    : {}

  return (
    <>
      <Example.InputGroup>
        <Example.Checkbox
          value={withValue}
          onChange={() => setWithValue(!withValue)}
        >
          value
        </Example.Checkbox>
        <Example.Checkbox
          value={withExtraProps}
          onChange={() => setWithExtraProps(!withExtraProps)}
        >
          title, caption, error, placeholder
        </Example.Checkbox>
        <Example.Checkbox
          value={isDisabled}
          onChange={() => setIsDisabled(!isDisabled)}
        >
          isDisabled
        </Example.Checkbox>
      </Example.InputGroup>
      <Picker
        {...extraProps}
        name="example"
        options={Example.options}
        value={withValue ? Example.options[0].value : ''}
        isDisabled={isDisabled}
        onChange={() => {}}
      />
      <Separator height={4} />
      <Example.Image
        title="Открытый пикер на телефоне"
        width={320}
        src={require('./assets/example.png')}
      />
    </>
  )
}

;<ExampleComponent />
```
