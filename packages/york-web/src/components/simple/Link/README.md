```js
import { colors } from '@qlean/york-core'
import { View, Separator, Link } from '@qlean/york-web'
import styled from 'styled-components'

const presets = [
  {
    rank: 1,
    backdropColor: 'white',
    title: 'Green link',
  },
  {
    rank: 2,
    backdropColor: 'white',
    title: 'Black link',
  },
  {
    rank: 1,
    backdropColor: 'dark',
    title: 'White link',
  },
  {
    rank: 2,
    backdropColor: 'dark',
    title: 'Grey link',
  },
  {
    rank: 0,
    title: 'Link with rank=0',
  },
  {
    title: 'Default link',
  },
]

const StyledView = styled(View)`
  padding: 10px 0;
  ${({ rank, backdropColor }) => `
    background: ${rank === 1 && backdropColor === 'dark' ? colors.blue : colors.white};
  `}
`

;<View flexDirection="column">
    {presets.map(({ rank, backdropColor, title }) => (
      <StyledView key={title} rank={rank} backdropColor={backdropColor}>
        <Link
          rank={rank}
          backdropColor={backdropColor}
          href='#'
        >
          {title}
        </Link>
        <Separator height={2} />
      </StyledView>
    ))}
  </View>
```
