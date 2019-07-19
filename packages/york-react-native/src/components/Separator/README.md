```js
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { Text } from '@qlean/york-react-native'
import { View } from '@qlean/york-web'

const StyledSeparator = styled(Separator)`
  width: 100% !important;
  background-color: ${colors.blue};
`

;<div>
  <Text preset="header2" htmlTag="h1">
    Йоркширский терьер
  </Text>
  <StyledSeparator height={1} />
  <Text preset="caption" htmlTag="h2" color="grey">
    Материал из Википедии — свободной энциклопедии
  </Text>
  <StyledSeparator height={2} />
  <Text>
    Йоркширский терьер, или йорк (англ. yorkshire terrier), — декоративная
    порода собак, выведенная в Англии, графстве Йоркшир в конце XIX в, на основе
    таких пород как манчестер-терьер, скайтерьер, мальтезе и др.
  </Text>
  <StyledSeparator height={2} />
  <Text>
    В настоящее время йоркширский терьер — одна из самых популярных
    комнатно-декоративных пород собак.
  </Text>
</div>
```
