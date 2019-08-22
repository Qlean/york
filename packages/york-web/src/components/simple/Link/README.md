```js
import { colors } from '@qlean/york-core'
import { View, Separator, Link } from '@qlean/york-web'
import styled from 'styled-components'

const presets = [
  {
    rank: 1,
    backdropColor: 'white',
    href: 'https://qlean.ru/',
    title: 'Green link',
  },
  {
    rank: 2,
    backdropColor: 'white',
    href: 'https://qlean.ru/',
    title: 'Black link',
  },
  {
    rank: 1,
    backdropColor: 'dark',
    href: 'https://qlean.ru/',
    title: 'White link',
  },
  {
    rank: 2,
    backdropColor: 'dark',
    href: 'https://qlean.ru/',
    title: 'Grey link',
  },
  {
    href: 'https://qlean.ru/',
    title: 'Default link',
  },
]

const StyledView = styled(View)`
  padding: 10px 0;
  ${({ rank, backdropColor }) => `
    background: ${rank === 1 && backdropColor === 'dark' ? colors.blue : colors.white};
  `}
`

;<>
  <View flexDirection="column">
    {presets.map(({ rank, backdropColor, href, title }) => (
      <StyledView key={title} rank={rank} backdropColor={backdropColor}>
        <Link
          rank={rank}
          backdropColor={backdropColor}
          href={href}
        >
          {title}
        </Link>
        <Separator height={2} />
      </StyledView>
    ))}
  </View>
</>
```
