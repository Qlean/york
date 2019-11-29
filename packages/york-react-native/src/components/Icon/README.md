```js
const icons = ['close', 'back', 'arrow']

;<Example.Showcase>
  {icons.map(icon => (
    <Example.ShowcaseItem title={icon} key={icon}>
      <Icon name={icon} />
    </Example.ShowcaseItem>
  ))}
</Example.Showcase>
```
