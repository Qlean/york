```js
const ExampleComponent = () => {
  const [withCaption, setWithCaption] = React.useState(false)
  const [withError, setWithError] = React.useState(false)
  const [isDisabled, setIsDisabled] = React.useState(false)
  const [value, setValue] = React.useState(false)

  const extraProps = {
    caption: withCaption ? 'Caption' : null,
    error: withError ? 'Error' : null,
  }

  return (
    <>
      <Example.InputGroup>
        <Example.Checkbox
          value={withCaption}
          onChange={() => setWithCaption(!withCaption)}
        >
          caption
        </Example.Checkbox>
        <Example.Checkbox
          value={withError}
          onChange={() => setWithError(!withError)}
        >
          error
        </Example.Checkbox>
        <Example.Checkbox
          value={isDisabled}
          onChange={() => setIsDisabled(!isDisabled)}
        >
          isDisabled
        </Example.Checkbox>
      </Example.InputGroup>
      <Checkbox
        name="expamleCheckbox"
        title="Title"
        value={value}
        onChange={value => setValue(value)}
        isDisabled={isDisabled}
        {...extraProps}
      />
    </>
  )
}

;<ExampleComponent />
```
