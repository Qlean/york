```js
  const buttons = [
      { size: 's', name: 'Текст', width: '140px' },
      { size: 'm', name: 'Текст', width: '140px' },
      { size: 'l', name: 'Текст', width: '140px' },
  ];
  <div>
    <FlexContainer>
      {buttons.map(({ size, name, width }) => (
        <FlexBase key={size}>
          <Button size={size} width={width}>{name}</Button>
          <Separator width={2}/>
        </FlexBase>
      ))}
    </FlexContainer>
    <Separator height={4}/>
    <FlexContainer>
      {buttons.map(({ size, name, width }) => (
        <FlexBase key={size}>
          <Button size={size} width={width} isDisabled>{name}</Button>
          <Separator width={2}/>
        </FlexBase>
      ))}
    </FlexContainer>
  </div>
```
