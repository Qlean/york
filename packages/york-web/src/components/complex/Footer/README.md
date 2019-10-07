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

const StyledPageBody = styled.div`
  height: ${Example.Frame.height / 2}px;
  background: linear-gradient(${colors.whisper}, ${colors.coal});
`

const StyledPageContent = styled.div`
  margin: 0 auto;
`

const StyledBox = styled(Example.Box)`
  width: 100%;
`

const ExampleComponents = () => {
  return (
    <Example.Frame>
      <StyledPageBody>
        <StyledPageContent>
          <GridContainer>
            <GridColumn columns={12}>
              <StyledBox />
            </GridColumn>
          </GridContainer>
        </StyledPageContent>
      </StyledPageBody>
      <Footer
        legalInfo="© 2019, Qlean"
        email="feedback@qlean.ru"
        userAgreementLink=""
        phones={['88005008264', '84953747907']}
        mobileStoreLinks={{
          googlePlay:
            'https://apps.apple.com/ru/app/qlean-%D1%83%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80/id1011771034',
          appStore:
            'https://play.google.com/store/apps/details?id=com.qlean.qlean&hl=ru',
        }}
        socialNetworkLinks={{
          vk: '',
          facebook: '',
          telegram: '',
          viber: '',
        }}
      />
    </Example.Frame>
  )
}

;<ExampleComponents />
```
