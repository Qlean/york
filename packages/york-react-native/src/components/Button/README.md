## Primary
Обозначает ключевое действие. На экране может быть только одна главная кнопка. Главные кнопки используются во всю ширину экрана.

Green — основная, может использоваться только на белом #FFFFFF или светло-сером #F8F8F8 фоне
```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 160px)', gridColumnGap: '15px' }}>
  <Button preset="green">Кнопка</Button>
  <Button preset="green" isDisabled>Кнопка</Button>
</div>
```

Black — используется реже, восновном на цветных фонах #FAE12E #20A052
```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 160px)', gridColumnGap: '15px' }}>
  <Button preset="black">Кнопка</Button>
  <Button preset="black" isDisabled>Кнопка</Button>
</div>
```

## Secondary
Обозначает второстеменное действие. Чаще всего используется в паре с главной кнопкой.

Grey — может использоваться только на белом фоне #FFFFFF
```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 160px)', gridColumnGap: '15px' }}>
  <Button preset="grey">Кнопка</Button>
  <Button preset="grey" isDisabled>Кнопка</Button>
</div>
```

GreenLinear — может использоваться только на белом фоне #FFFFFF
```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 160px)', gridColumnGap: '15px' }}>
  <Button preset="greenLinear">Кнопка</Button>
  <Button preset="greenLinear" isDisabled>Кнопка</Button>
</div>
```

GrayLinear — может использоваться на белом фоне #FFFFFF, светло-сером #F8F8F8 или желтом фоне #FAE12E
```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 160px)', gridColumnGap: '15px' }}>
  <Button preset="greyLinear">Кнопка</Button>
  <Button preset="greyLinear" isDisabled>Кнопка</Button>
</div>
```

Green / Black — используются на карточказ заказа.
```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 120px)', gridColumnGap: '5px', gridRowGap: '10px' }}>
  <Button preset="green" size="s">Кнопка</Button>
  <Button preset="green" size="s" isDisabled>Кнопка</Button>
  <Button preset="black" size="s">Кнопка</Button>
  <Button preset="black" size="s" isDisabled>Кнопка</Button>
</div>
```
