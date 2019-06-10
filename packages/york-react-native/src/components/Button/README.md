## Primary
Обозначает ключевое действие. На экране может быть только одна главная кнопка. Главные кнопки используются во всю ширину экрана.

primaryLightBg — основная, может использоваться только на светлом фоне.
```jsx
import { Example } from '@qlean/york-react-native'
;<Example.Grid>
  <Button onPress={() => {}} preset="primaryLightBg">Кнопка</Button>
  <Button preset="primaryLightBg" isDisabled>Кнопка</Button>
</Example.Grid>
```

primaryColoredBg — используется реже, во основном на цветных фонах.
```jsx
import { Example } from '@qlean/york-react-native'
;<Example.Grid backgroundColor="yellow">
  <Button preset="primaryColoredBg">Кнопка</Button>
  <Button preset="primaryColoredBg" isDisabled>Кнопка</Button>
</Example.Grid>
```

## Secondary и Tetriary
Обозначает второстепенное действие. Чаще всего используется в паре с главной кнопкой.

secondary — может использоваться только на белом фоне.
```jsx
import { Example } from '@qlean/york-react-native'
;<Example.Grid>
  <Button preset="secondary">Кнопка</Button>
  <Button preset="secondary" isDisabled>Кнопка</Button>
</Example.Grid>
```

tertiary — может использоваться только на белом фоне, используется как дополнение к secondary.
```jsx
import { Example } from '@qlean/york-react-native'
;<Example.Grid>
  <Button preset="tertiary">Кнопка</Button>
  <Button preset="tertiary" isDisabled>Кнопка</Button>
</Example.Grid>
```

## Quoternary
Текстовая кнопка, имеет такие же размеры, как и остальные кнопки, поэтому может использоваться как дополнение к ним.

quoternaryLightBg — может использоваться только на светлом фоне.
```jsx
import { Example } from '@qlean/york-react-native'
;<Example.Grid>
  <Button preset="quoternaryLightBg">Кнопка</Button>
  <Button preset="quoternaryLightBg" isDisabled>Кнопка</Button>
</Example.Grid>
```

quoternaryDarkBg — может использоваться только на темном фоне.
```jsx
import { Example } from '@qlean/york-react-native'
;<Example.Grid backgroundColor="yellow">
  <Button preset="quoternaryDarkBg">Кнопка</Button>
  <Button preset="quoternaryDarkBg" isDisabled>Кнопка</Button>
</Example.Grid>
```

quoternaryDarkBg2 — может использоваться только на темном фоне, если quoternaryDarkBg не сочетается с ним.
```jsx
import { Example } from '@qlean/york-react-native'
;<Example.Grid backgroundColor="green">
  <Button preset="quoternaryDarkBg2">Кнопка</Button>
  <Button preset="quoternaryDarkBg2" isDisabled>Кнопка</Button>
</Example.Grid>
```
