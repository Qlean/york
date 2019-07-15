```js
import { colors } from '@qlean/york-core'
import { View, Text, Tooltip, Separator } from '@qlean/york-web'
;<>
  <Tooltip tooltip="Йоркширский терьер">
    <Text>Короткий тултип</Text>
  </Tooltip>
  <Separator height={2} />
  <View justifyContent="center">
    <Tooltip tooltip="В настоящее время йоркширский терьер — одна из самых популярных комнатно-декоративных пород собак.">
      <Text>Длинный тултип</Text>
    </Tooltip>
  </View>
  <Separator height={2} />
  <View justifyContent="flex-end">
    <Tooltip
      tooltip={
        <Text color="yellow">
          Родиной йоркширского терьера являются графства Йоркшир и Ланкашир в
          северной Англии. Его возможным предком называют уотерсайдского
          терьера.
        </Text>
      }
    >
      <Text>Кастомный тултип</Text>
    </Tooltip>
  </View>
</>
```
