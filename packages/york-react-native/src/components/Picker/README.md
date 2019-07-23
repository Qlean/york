```js
import { Picker } from '@qlean/york-react-native'
import { Example } from '@qlean/york-web'

const ExampleComponent = () => {
  const [isDisabled, setIsDisabled] = React.useState(false)
  const [withExtraProps, setWithExtraProps] = React.useState(false)
  const [value, setValue] = React.useState(Example.options[0].value)

  const extraProps = withExtraProps
    ? {
        title: 'Title',
        caption: 'Caption',
        error: 'Error',
        placeholder: 'Placeholder',
      }
    : {}
  const inputProps = {
    name: 'input',
    isDisabled: false,
    ...extraProps,
  }

  return (
    <>
      <Example.InputGroup>
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
        name="dog"
        options={Example.options}
        value={value}
        isDisabled={isDisabled}
        onChange={value => setValue(value)}
      />
    </>
  )
}

;<ExampleComponent />
```
