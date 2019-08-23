```js
const icons = ['close', 'back']

;<Example.Showcase>
  {icons.map(icon => (
    <Example.ShowcaseItem title={icon} key={icon}>
      <Icon name={icon}/>
    </Example.ShowcaseItem>
  ))}
</Example.Showcase>
```
