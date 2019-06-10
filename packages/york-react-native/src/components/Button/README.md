## Primary
Обозначает ключевое действие. На экране может быть только одна главная кнопка. Главные кнопки используются во всю ширину экрана.

PrimaryLightBg — основная, может использоваться только на белом #FFFFFF или светло-сером #F8F8F8 фоне
```jsx
import { Example } from '@qlean/york-react-native'
;<Example.Grid>
  <Button onPress={() => {}} preset="primaryLightBg">Кнопка</Button>
  <Button preset="primaryLightBg" isDisabled>Кнопка</Button>
</Example.Grid>
```

primaryColoredBg — используется реже, восновном на цветных фонах #FAE12E #20A052
```jsx
import { Example } from '@qlean/york-react-native'
;<Example.Grid>
  <Button preset="primaryColoredBg">Кнопка</Button>
  <Button preset="primaryColoredBg" isDisabled>Кнопка</Button>
</Example.Grid>
```

## Secondary
Обозначает второстеменное действие. Чаще всего используется в паре с главной кнопкой.

Secondary — может использоваться только на белом фоне #FFFFFF
```jsx
import { Example } from '@qlean/york-react-native'
;<Example.Grid>
  <Button preset="secondary">Кнопка</Button>
  <Button preset="secondary" isDisabled>Кнопка</Button>
</Example.Grid>
```

Tertiary — может использоваться только на белом фоне #FFFFFF
```jsx
import { Example } from '@qlean/york-react-native'
;<Example.Grid>
  <Button preset="tertiary">Кнопка</Button>
  <Button preset="tertiary" isDisabled>Кнопка</Button>
</Example.Grid>
```

quoternaryLightBg — может использоваться на белом фоне #FFFFFF, светло-сером #F8F8F8 или желтом фоне #FAE12E
```jsx
import { Example } from '@qlean/york-react-native'
;<Example.Grid>
  <Button preset="quoternaryLightBg">Кнопка</Button>
  <Button preset="quoternaryLightBg" isDisabled>Кнопка</Button>
</Example.Grid>
```

quoternaryDarkBg — используются на карточказ заказа.
```jsx
import { Example } from '@qlean/york-react-native'
;<Example.Grid>
  <Button preset="quoternaryDarkBg">Кнопка</Button>
  <Button preset="quoternaryDarkBg" isDisabled>Кнопка</Button>
</Example.Grid>
```
