```js
import { TextInput } from '@qlean/york-web'

const ExampleComponent = () => {
  const [isDisabled, setIsDisabled] = React.useState(false)
  const [withExtraProps, setWithExtraProps] = React.useState(false)
  const [value, setValue] = React.useState('')

  const extraProps = withExtraProps
    ? {
        title: 'Title',
        caption: 'Caption',
        error: 'Error',
        placeholder: 'Placeholder',
        rightView: {
          node: <img src={require('./assets/question.svg')} />,
          width: 16,
        },
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
          title, caption, error, placeholder, rightView
        </Example.Checkbox>
        <Example.Checkbox
          value={isDisabled}
          onChange={() => setIsDisabled(!isDisabled)}
        >
          isDisabled
        </Example.Checkbox>
      </Example.InputGroup>
      <TextInput
        {...inputProps}
        value={value}
        isDisabled={isDisabled}
        onChange={e => setValue(e.target.value)}
      />
    </>
  )
}

;<ExampleComponent />
```
