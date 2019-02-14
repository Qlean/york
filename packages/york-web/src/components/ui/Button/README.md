Кнопка используется как триггер для выполнения определённого действия
### Дефолтная кнопка
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
### Зеленая кнопка
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
          <Button size={size} width={width} preset="green">{name}</Button>
          <Separator width={2}/>
        </FlexBase>
      ))}
    </FlexContainer>
    <Separator height={4}/>
    <FlexContainer>
      {buttons.map(({ size, name, width }) => (
        <FlexBase key={size}>
          <Button size={size} width={width} preset="green" isDisabled>{name}</Button>
          <Separator width={2}/>
        </FlexBase>
      ))}
    </FlexContainer>
  </div>
```
### Серая кнопка
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
          <Button size={size} width={width} preset="grayLinear">{name}</Button>
          <Separator width={2}/>
        </FlexBase>
      ))}
    </FlexContainer>
    <Separator height={4}/>
    <FlexContainer>
      {buttons.map(({ size, name, width }) => (
        <FlexBase key={size}>
          <Button size={size} width={width} preset="grayLinear" isDisabled>{name}</Button>
          <Separator width={2}/>
        </FlexBase>
      ))}
    </FlexContainer>
  </div>
```
### Зеленая полупрозрачная кнопка
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
          <Button size={size} width={width} preset="greenLinear">{name}</Button>
          <Separator width={2}/>
        </FlexBase>
      ))}
    </FlexContainer>
    <Separator height={4}/>
    <FlexContainer>
      {buttons.map(({ size, name, width }) => (
        <FlexBase key={size}>
          <Button size={size} width={width} preset="greenLinear" isDisabled>{name}</Button>
          <Separator width={2}/>
        </FlexBase>
      ))}
    </FlexContainer>
  </div>
```
