## Primary
Обозначает ключевое действие. На экране может быть только одна главная кнопка. Главные кнопки используются во всю ширину экрана.

PrimaryLightBg — основная, может использоваться только на белом #FFFFFF или светло-сером #F8F8F8 фоне
```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 160px)', gridColumnGap: '15px' }}>
  <Button onPress={() => {}} preset="primaryLightBg">Кнопка</Button>
  <Button preset="primaryLightBg" isDisabled>Кнопка</Button>
</div>
```

primaryColoredBg — используется реже, восновном на цветных фонах #FAE12E #20A052
```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 160px)', gridColumnGap: '15px' }}>
  <Button preset="primaryColoredBg">Кнопка</Button>
  <Button preset="primaryColoredBg" isDisabled>Кнопка</Button>
</div>
```

## Secondary
Обозначает второстеменное действие. Чаще всего используется в паре с главной кнопкой.

Secondary — может использоваться только на белом фоне #FFFFFF
```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 160px)', gridColumnGap: '15px' }}>
  <Button preset="secondary">Кнопка</Button>
  <Button preset="secondary" isDisabled>Кнопка</Button>
</div>
```

Tertiary — может использоваться только на белом фоне #FFFFFF
```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 160px)', gridColumnGap: '15px' }}>
  <Button preset="tertiary">Кнопка</Button>
  <Button preset="tertiary" isDisabled>Кнопка</Button>
</div>
```

quoternaryLightBg — может использоваться на белом фоне #FFFFFF, светло-сером #F8F8F8 или желтом фоне #FAE12E
```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 160px)', gridColumnGap: '15px' }}>
  <Button preset="quoternaryLightBg">Кнопка</Button>
  <Button preset="quoternaryLightBg" isDisabled>Кнопка</Button>
</div>
```

quoternaryDarkBg — используются на карточказ заказа.
```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 120px)', gridColumnGap: '5px', gridRowGap: '10px' }}>
  <Button preset="quoternaryDarkBg">Кнопка</Button>
  <Button preset="quoternaryDarkBg" isDisabled>Кнопка</Button>
</div>
```
