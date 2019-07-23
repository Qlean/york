```js
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { Text } from '@qlean/york-react-native'

// const StyledSeparator = styled(Separator)`
//   width: 100% !important;
//   background-color: ${colors.blue};
// `

const style = {
  width: 'auto',
  backgroundColor: colors.blue,
}

;<div>
  <Text preset="header2">Йоркширский терьер</Text>
  <Separator height={1} style={style} />
  <Text preset="caption" color="grey">
    Материал из Википедии — свободной энциклопедии
  </Text>
  <Separator height={2} style={style} />
  <Text>
    Йоркширский терьер, или йорк (англ. yorkshire terrier), — декоративная
    порода собак, выведенная в Англии, графстве Йоркшир в конце XIX в, на основе
    таких пород как манчестер-терьер, скайтерьер, мальтезе и др.
  </Text>
  <Separator height={2} style={style} />
  <Text>
    В настоящее время йоркширский терьер — одна из самых популярных
    комнатно-декоративных пород собак.
  </Text>
</div>
```
