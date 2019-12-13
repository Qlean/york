```js
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import {
  GridContainer,
  GridColumn,
  View,
  Text,
  uiPoint,
  media,
} from '@qlean/york-web'

const href = '#!/Header'

const data = {
  defaultTab: 'home',
  components: {
    CherdakItem: ({ children }) => (
      <View alignItems="center">
        {children}
        {'\u00A0'}📦
      </View>
    ),
  },
  phone: '74951234567',
  content: {
    regions: [
      {
        name: 'msk',
        title: 'Москва',
      },
      {
        name: 'spb',
        title: 'Санкт-Петербург',
      },
      {
        name: 'ppk',
        title: 'Петропавловск-Камчатский',
      },
    ],
    tabs: [
      {
        name: 'home',
        title: 'Для дома',
        href,
        items: [
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
          { name: 'moving', title: 'Переезды', href },
          {
            name: 'cherdak',
            title: 'Хранение',
            href,
            component: 'CherdakItem',
          },
          {
            name: 'plus',
            title: 'Qlean',
            href,
            component: 'QleanPlusItem',
          },
        ],
      },
      {
        name: 'office',
        title: 'Для офиса',
        href,
        items: [
          { name: 'mainPage', title: 'Главная', href },
          { name: 'typesOfCleaning', title: 'Виды уборки', href },
          { name: 'howWeWork', title: 'Как мы работаем', href },
          { name: 'whatsIncluded', title: 'Что входит', href },
          { name: 'howToOrder', title: 'Как заказать', href },
        ],
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
  },
}

const StyledPageBody = styled.div`
  height: ${Example.Frame.height * 2}px;
  background: linear-gradient(${colors.whisper}, ${colors.coal});
`

const StyledPageContent = styled.div`
  margin: 0 auto;
`

const StyledBox = styled(Example.Box)`
  width: 100%;
`

const ExampleComponent = () => {
  const [isNavigationAvailable, setIsNavigationAvailable] = React.useState(true)
  const [isProfileAvailable, setIsProfileAvailable] = React.useState(true)
  const [isLoggedIn, setIsLoggedIn] = React.useState(true)
  const [isPlusSubscriber, setIsPlusSubscriber] = React.useState(true)
  const [items, setItems] = React.useState({})
  const [region, setRegion] = React.useState('ppk')

  return (
    <>
      <Example.InputGroup>
        <Example.Checkbox
          value={isNavigationAvailable}
          onChange={() => setIsNavigationAvailable(!isNavigationAvailable)}
        >
          isNavigationAvailable
        </Example.Checkbox>
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
        <Example.Checkbox
          value={Boolean(region)}
          onChange={() => setRegion(region ? null : 'ppk')}
        >
          region
        </Example.Checkbox>
      </Example.InputGroup>
      <Example.Frame>
        <Header
          isNavigationAvailable={isNavigationAvailable}
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
            onRenovation: () => setItems({ menu: ['cleaning', 'renovation'] }),
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
            onLogout: () => alert('onLogout'),

            onLogin: () => alert('onLogin'),
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
      </Example.Frame>
    </>
  )
}

;<ExampleComponent />
```
