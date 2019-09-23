```js
import styled from 'styled-components'
import {
  PromoCard,
  GridContainer,
  GridColumn,
  Separator
} from '@qlean/york-web'
import { colors } from '@qlean/york-core'

const StyledContainer = styled.div`
  overflow: auto;
`

const GreenPromoCard = styled(PromoCard)`
  background: linear-gradient(251deg, #41CD91 0.45%, #00AA64 98.05%), #C4C4C4;
  color: ${colors.white};
`
const YellowPromoCard = styled(PromoCard)`
  background: linear-gradient(260.37deg, #FFE173 0%, #FFDC46 98.06%), #C4C4C4;
  color: ${colors.coal};
`
const PinkPromoCard = styled(PromoCard)`
  background: linear-gradient(54.36deg, #F5D2C3 0%, #FAE6E1 100%), #CFD9DF;
  color: ${colors.coal};
`
const BluePromoCard = styled(PromoCard)`
  background: linear-gradient(98.5deg, #788CBE 0%, #82A0D2 51.04%, #A0D2E6 100%);
  color: ${colors.white};
`

;<StyledContainer>
  <GridContainer mobileProps={{ flexDirection: 'column' }}>
    <GridColumn columns={6} mobileProps={{ columns: 12 }}>
      <GreenPromoCard
        size="l"
        title="Поддерживающая уборка"
        description="Для регулярного избавления от\u00a0пыли и\u00a0мусора"
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
        description="Если давно не\u00a0убирались или\u00a0устроили вечеринку"
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
