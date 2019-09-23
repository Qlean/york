```js
import styled from 'styled-components'
import {
  PromoCard,
  GridContainer,
  GridColumn,
  Separator,
} from '@qlean/york-web'

const StyledContainer = styled.div`
  overflow: auto;
`

;<StyledContainer>
  <GridContainer mobileProps={{ flexDirection: 'column' }}>
    <GridColumn columns={6} mobileProps={{ columns: 12 }}>
      <PromoCard
        name="card"
        size="l"
        title="Поддерживающая уборка"
        description="Для регулярного избавления от\u00a0пыли и\u00a0мусора"
        label="от 1490 р."
        caption="Рассчитать стоимость"
        image={require('./assets/cleaner.png')}
        background="linear-gradient(259.36deg, #41CD91 0.45%, #00AA64 98.05%), #C4C4C4"
        textColor="white"
        href="/#/york-web?id=promocard"
      />
      <Separator height={0} mobileProps={{ height: 2 }} />
    </GridColumn>
    <GridColumn columns={3} mobileProps={{ columns: 12 }}>
      <PromoCard
        name="card"
        size="m"
        title="Генеральная уборка"
        description="Если давно не\u00a0убирались или\u00a0устроили вечеринку"
        label="от 3490 р."
        caption="Подробнее"
        image={require('./assets/vacuum.png')}
        background="linear-gradient(260.37deg, #FFE173 0%, #FFDC46 98.06%), #C4C4C4"
        textColor="coal"
        href="/#/york-web?id=promocard"
      />
      <Separator height={0} mobileProps={{ height: 2 }} />
    </GridColumn>
    <GridColumn columns={3} mobileProps={{ columns: 12 }}>
      <PromoCard
        name="card"
        size="s"
        title="После ремонта"
        label="от 4990 р."
        caption="Подробнее"
        background="linear-gradient(54.36deg, #F5D2C3 0%, #FAE6E1 100%), #CFD9DF"
        textColor="coal"
        href="/#/york-web?id=promocard"
      />
      <Separator height={4} mobileProps={{ height: 2 }} />
      <PromoCard
        name="card"
        size="s"
        title="Мытьё окон"
        label="от 1490 р."
        caption="Подробнее"
        background="linear-gradient(98.5deg, #788CBE 0%, #82A0D2 51.04%, #A0D2E6 100%)"
        textColor="white"
        onClick={() => {
          console.log('click')
        }}
      />
    </GridColumn>
  </GridContainer>
</StyledContainer>
```
