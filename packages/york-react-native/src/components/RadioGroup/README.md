```js
const options = [
  {
    value: 1,
    title: 'Title',
  },
  {
    value: 2,
    title: 'Title',
    caption: 'Caption',
  },
]

const ExampleComponent = () => {
  const [value, setValue] = React.useState(null)

  return (
    <RadioGroup
      name="expamleRadioGroup"
      options={options}
      value={value}
      onChange={value => setValue(value)}
    />
  )
}

;<ExampleComponent />
```
