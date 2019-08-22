```js
import { colors } from '@qlean/york-core'
import { View, Separator, Link } from '@qlean/york-web'
import styled from 'styled-components'

const presets = [
  {
    preset: 'green',
    href: 'https://qlean.ru/',
    title: 'green link',
  },
  {
    preset: 'black',
    href: 'https://qlean.ru/',
    title: 'black link',
  },
  {
    preset: 'grey',
    href: 'https://qlean.ru/',
    title: 'grey link',
  },
  {
    preset: 'white',
    href: 'https://qlean.ru/',
    title: 'white link',
  },
]

const StyledView = styled(View)`
  padding: 10px 0;
  ${({ preset }) => `
    background: ${preset === 'white' ? colors.blue : colors.white};
  `}
`

;<>
  <View flexDirection="column">
    {presets.map(({ preset, href, title }) => (
      <StyledView key={preset} preset={preset}>
        <Link
          preset={preset}
          href={href}
          target="_blank"
        >
          {title}
        </Link>
        <Separator height={2} />
      </StyledView>
    ))}
  </View>
</>
```
