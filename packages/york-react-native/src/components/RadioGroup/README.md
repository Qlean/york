```js
const options = [
  {
    value: 1,
    label: 'Вариант без подзаголовка',
  },
  {
    value: 2,
    label: 'Вариант с подзаголовком',
    caption: 'Подзаголовок',
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
