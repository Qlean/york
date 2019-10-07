```js
import styled from 'styled-components'
import {
  PromoCard,
  GridContainer,
  GridColumn,
  Separator,
} from '@qlean/york-web'
import { colors } from '@qlean/york-core'

const StyledContainer = styled.div`
  overflow: auto;
`

const GreenPromoCard = styled(PromoCard)`
  background: linear-gradient(251deg, #41cd91 0.45%, #00aa64 98.05%), #c4c4c4;
  color: ${colors.white};
`
const YellowPromoCard = styled(PromoCard)`
  background: linear-gradient(260.37deg, #ffe173 0%, #ffdc46 98.06%), #c4c4c4;
  color: ${colors.coal};
`
const PinkPromoCard = styled(PromoCard)`
  background: linear-gradient(54.36deg, #f5d2c3 0%, #fae6e1 100%), #cfd9df;
  color: ${colors.coal};
`
const BluePromoCard = styled(PromoCard)`
  background: linear-gradient(
    98.5deg,
    #788cbe 0%,
    #82a0d2 51.04%,
    #a0d2e6 100%
  );
  color: ${colors.white};
`

;<StyledContainer>
  <GridContainer mobileProps={{ flexDirection: 'column' }}>
    <GridColumn columns={6} mobileProps={{ columns: 12 }}>
      <GreenPromoCard
        size="l"
        title="Поддерживающая уборка"
        description="Для регулярного избавления от пыли и мусора"
        label="от 1490 р."
        caption="Рассчитать стоимость"
        image={require('./assets/cleaner.png')}
      />
      <Separator height={0} mobileProps={{ height: 2 }} />
    </GridColumn>
    <GridColumn columns={3} mobileProps={{ columns: 12 }}>
      <YellowPromoCard
        size="m"
        title="Генеральная уборка"
        description="Если давно не убирались или устроили вечеринку"
        label="от 3490 р."
        caption="Подробнее"
        image={require('./assets/vacuum.png')}
      />
      <Separator height={0} mobileProps={{ height: 2 }} />
    </GridColumn>
    <GridColumn columns={3} mobileProps={{ columns: 12 }}>
      <PinkPromoCard
        size="s"
        title="После ремонта"
        label="от 4990 р."
        caption="Подробнее"
      />
      <Separator height={4} mobileProps={{ height: 2 }} />
      <BluePromoCard
        size="s"
        title="Мытьё окон"
        label="от 1490 р."
        caption="Подробнее"
      />
    </GridColumn>
  </GridContainer>
</StyledContainer>
```
