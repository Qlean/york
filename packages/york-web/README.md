### Респонсивность

В любом компоненте ряд пропсов может быть респонсивными, т.е. поддерживать разные значения для разных разрешений. Это не обязательно должно быть реализовано для каждого пропса. Респонсивные пропсы передаются в компонент через наборы со специальными именами — `mobileProps`, `baseProps` и `wideProps`. Пример:

```jsx static
<Button
  preset="primary"
  mobileProps={{
    preset: 'secondary',
  }}
/>
```

Эта кнопка будет использовать пресет `primary` по умолчанию, но в мобильной версии это будет перекрыто пресетом `secondary`. Это должно работать для всех компонетов и пропсов, где это вообще осмыслено.

### Расширение и композиция

Лучший способ расширить стили компонента, которые не поддерживаются пропсами — создать на его основе другой компонент с помощью `styled`:

```js static
const StyledText = styled(Text)`
  color: tomato;
  text-decoration: underline;
`
```

В некоторых случаях это неудобно. Например, мы хотим чтобы `<Text>` наследовал цвет родителя, тогда спасет `color="inherit"`. Другой кейс — нужно расширить `<Button/>`, но не хочется возиться с переписыванием всех стилей, которые генерируются по умолчанию. Для этого предусмотрен `preset="blank"`.