Кнопка используется как триггер для выполнения определённого действия
### Дефолтная кнопка
```js
  const buttons = [
      { size: 's', name: 'Текст', width: '140px' },
      { size: 'm', name: 'Текст', width: '140px' },
      { size: 'l', name: 'Текст', width: '140px' },
  ];
  <div>
    <div>
      {buttons.map(({ size, name, width }) => (
        <div key={size}>
          <Button size={size} width={width}>{name}</Button>
          <Separator height={2}/>
        </div>
      ))}
    </div>
    <Separator height={4}/>
    <div>
      {buttons.map(({ size, name, width }) => (
        <div key={size}>
          <Button size={size} width={width} isDisabled>{name}</Button>
          <Separator height={2}/>
        </div>
      ))}
    </div>
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
    <div>
      {buttons.map(({ size, name, width }) => (
        <div key={size}>
          <Button size={size} width={width} preset="green">{name}</Button>
          <Separator height={2}/>
        </div>
      ))}
    </div>
    <Separator height={4}/>
    <div>
      {buttons.map(({ size, name, width }) => (
        <div key={size}>
          <Button size={size} width={width} preset="green" isDisabled>{name}</Button>
          <Separator height={2}/>
        </div>
      ))}
    </div>
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
    <div>
      {buttons.map(({ size, name, width }) => (
        <div key={size}>
          <Button size={size} width={width} preset="grayLinear">{name}</Button>
          <Separator height={2}/>
        </div>
      ))}
    </div>
    <Separator height={4}/>
    <div>
      {buttons.map(({ size, name, width }) => (
        <div key={size}>
          <Button size={size} width={width} preset="grayLinear" isDisabled>{name}</Button>
          <Separator height={2}/>
        </div>
      ))}
    </div>
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
    <div>
      {buttons.map(({ size, name, width }) => (
        <div key={size}>
          <Button size={size} width={width} preset="greenLinear">{name}</Button>
          <Separator height={2}/>
        </div>
      ))}
    </div>
    <Separator height={4}/>
    <div>
      {buttons.map(({ size, name, width }) => (
        <div key={size}>
          <Button size={size} width={width} preset="greenLinear" isDisabled>{name}</Button>
          <Separator height={2}/>
        </div>
      ))}
    </div>
  </div>
```
