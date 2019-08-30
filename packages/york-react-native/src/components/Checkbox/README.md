```js
const ExampleComponent = () => {
  const [withCaption, setWithCaption] = React.useState(false)
  const [withError, setWithError] = React.useState(false)
  const [isChecked, setIsChecked] = React.useState(false)

  const extraProps = {
    caption: withCaption ? 'И отдаю почку' : null,
    error: withError ? 'Это обязательное поле' : null,
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
      </Example.InputGroup>
      <Checkbox
        name="expamleCheckbox"
        label="Согласен с условиями обработки персональных данных"
        isChecked={isChecked}
        onChange={value => setIsChecked(!value)}
        {...extraProps}
      />
    </>
  )
}

;<ExampleComponent />
```
