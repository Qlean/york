```js
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import {
  GridContainer,
  GridColumn,
  Text,
  uiPoint,
  media,
} from '@qlean/york-web'

const data = {
  defaultTab: 'home',
  components: {
    Logo: () => <Text preset="textLarge">Q L E A N</Text>,
    QleanPlusItem: ({ children }) => (
      <>
        {children}
        <Text preset="link" color="blue">
          {'\u00A0'}ПЛЮС
        </Text>
      </>
    ),
  },
  content: {
    phone: '74951234567',
    regions: [
      {
        name: 'msk',
        title: 'Москва',
      },
      {
        name: 'spb',
        title: 'Санкт-Петербург',
      },
    ],
    tabs: [
      {
        name: 'home',
        title: 'Для дома',
        href: '/home',
      },
      {
        name: 'office',
        title: 'Для офиса',
        href: '/office',
      },
    ],
    profile: [
      {
        name: 'profile',
        title: 'Профиль',
        callback: 'onProfile',
      },
      {
        name: 'orders',
        title: 'Мои уборки',
        callback: 'onOrders',
      },
      {
        name: 'billing',
        title: 'Оплата',
        callback: 'onBilling',
      },
      {
        name: 'logout',
        title: 'Выйти',
        callback: 'onLogout',
      },
    ],
    menu: [
      {
        name: 'cleaning',
        title: 'Уборка',
        callback: 'onCleaning',
        items: [
          { name: 'basic', title: 'Поддерживающая', callback: 'onBasic' },
          { name: 'general', title: 'Генеральная', callback: 'onGeneral' },
          {
            name: 'renovation',
            title: 'После ремонта',
            callback: 'onRenovation',
          },
          { name: 'house', title: 'Загородные дома', callback: 'onHouse' },
          { name: 'windows', title: 'Мытьё окон', callback: 'onWindows' },
          {
            name: 'furniture',
            title: 'Химчистка мебели',
            callback: 'onFurniture',
          },
        ],
      },
      {
        name: 'laundry',
        title: 'Стирка и химчистка',
        callback: 'onLaundry',
        items: [
          { name: 'shirts', title: 'Рубашки', callback: 'onShirts' },
          { name: 'linen', title: 'Постельное белье', callback: 'onLinen' },
          { name: 'sneakers', title: 'Кроссовки', callback: 'onSneakers' },
          { name: 'socks', title: 'Носки', callback: 'onSocks' },
        ],
      },
      { name: 'moving', title: 'Переезды', href: '#!/Header' },
      { name: 'cherdak', title: 'Хранение', href: '#!/Header' },
      {
        name: 'plus',
        title: 'Qlean',
        href: '#!/Header',
        component: 'QleanPlusItem',
      },
    ],
  },
}

const viewportHeight = uiPoint * 100

const StyledViewport = styled.div`
  overflow: auto;
  height: ${viewportHeight}px;
`

const StyledPage = styled.div`
  ${media.wide(`width: ${GridContainer.maxWidths.wide + 80}px;`)}
  ${media.base(`width: ${GridContainer.maxWidths.base + 60}px;`)}
  ${media.mobile(`width: ${GridContainer.maxWidths.mobile + 40}px;`)}
`

const StyledPageBody = styled.div`
  height: ${viewportHeight * 2}px;
  background: linear-gradient(${colors.whisper}, ${colors.coal});
`

const StyledPageContent = styled.div`
  margin: 0 auto;
`

const StyledBox = styled(Example.Box)`
  width: 100%;
`

const ExampleComponents = () => {
  const [isProfileAvailable, setIsProfileAvailable] = React.useState(true)
  const [isLoggedIn, setIsLoggedIn] = React.useState(true)
  const [isPlusSubscriber, setIsPlusSubscriber] = React.useState(true)
  const [items, setItems] = React.useState({})
  const [region, setRegion] = React.useState('msk')

  return (
    <>
      <Example.InputGroup>
        <Example.Checkbox
          value={isProfileAvailable}
          onChange={() => setIsProfileAvailable(!isProfileAvailable)}
        >
          isProfileAvailable
        </Example.Checkbox>
        <Example.Checkbox
          value={isLoggedIn}
          onChange={() => setIsLoggedIn(!isLoggedIn)}
        >
          isLoggedIn
        </Example.Checkbox>
        <Example.Checkbox
          value={isPlusSubscriber}
          onChange={() => setIsPlusSubscriber(!isPlusSubscriber)}
        >
          isPlusSubscriber
        </Example.Checkbox>
      </Example.InputGroup>
      <StyledViewport>
        <StyledPage>
          <Header
            isProfileAvailable={isProfileAvailable}
            isLoggedIn={isLoggedIn}
            isPlusSubscriber={isPlusSubscriber}
            selectedRegion={region}
            selectedProfileItem={items.profile}
            selectedLevelOneItem={(items.menu || [])[0]}
            selectedLevelTwoItem={(items.menu || [])[1]}
            callbacks={{
              onCleaning: () => setItems({ menu: ['cleaning'] }),
              onBasic: () => setItems({ menu: ['cleaning', 'basic'] }),
              onGeneral: () => setItems({ menu: ['cleaning', 'general'] }),
              onRenovation: () =>
                setItems({ menu: ['cleaning', 'renovation'] }),
              onHouse: () => setItems({ menu: ['cleaning', 'house'] }),
              onWindows: () => setItems({ menu: ['cleaning', 'windows'] }),
              onFurniture: () => setItems({ menu: ['cleaning', 'furniture'] }),

              onLaundry: () => setItems({ menu: ['laundry'] }),
              onShirts: () => setItems({ menu: ['laundry', 'shirts'] }),
              onLinen: () => setItems({ menu: ['laundry', 'linen'] }),
              onSneakers: () => setItems({ menu: ['laundry', 'sneakers'] }),
              onSocks: () => setItems({ menu: ['laundry', 'socks'] }),

              onProfile: () => setItems({ profile: 'profile' }),
              onOrders: () => setItems({ profile: 'orders' }),
              onBilling: () => setItems({ profile: 'billing' }),
              onLogout: () => alert('Вышли!'),

              onRegionChange: setRegion,
            }}
            {...data}
          />
          <StyledPageBody>
            <StyledPageContent>
              <GridContainer>
                <GridColumn columns={12}>
                  <StyledBox />
                </GridColumn>
              </GridContainer>
            </StyledPageContent>
          </StyledPageBody>
        </StyledPage>
      </StyledViewport>
    </>
  )
}

;<ExampleComponents />
```