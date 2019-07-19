```js
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { Text } from '@qlean/york-react-native'
import { View } from '@qlean/york-web'

const SeparatorColoredWrapper = styled.div`
  background-color: ${colors.blue};
`

;<div>
  <Text preset="header2" htmlTag="h1">
    Йоркширский терьер
  </Text>
  <SeparatorColoredWrapper>
    <Separator height={1} />
  </SeparatorColoredWrapper>
  <Text preset="caption" htmlTag="h2" color="grey">
    Материал из Википедии — свободной энциклопедии
  </Text>
  <SeparatorColoredWrapper>
    <Separator height={2} />
  </SeparatorColoredWrapper>
  <Text>
    Йоркширский терьер, или йорк (англ. yorkshire terrier), — декоративная
    порода собак, выведенная в Англии, графстве Йоркшир в конце XIX в, на основе
    таких пород как манчестер-терьер, скайтерьер, мальтезе и др.
  </Text>
  <SeparatorColoredWrapper>
    <Separator height={2} />
  </SeparatorColoredWrapper>
  <Text>
    В настоящее время йоркширский терьер — одна из самых популярных
    комнатно-декоративных пород собак.
  </Text>
</div>
```
