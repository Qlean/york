```js
const ExampleComponent = () => {
  const [value, setValue] = React.useState(null)

  return (
    <RadioItem
      name="expamleRadioGroup"
      isSelected={value}
      onPress={() => setValue(true)}
    />
  )
}

;<ExampleComponent />
```
