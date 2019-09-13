```js
import styled from 'styled-components'
import { Link, Text, media } from '@qlean/york-web'

const StyledShowcaseItem = styled(Example.ShowcaseItem)`
  width: 33%;
  ${media.mobile(`width: 100%;`)}
`

const whiteBackdropRanks = [1, 2, 0]
const darkBackdropRanks = [1, 2]

const linkProps = {
  href: '#/york-web?id=link',
}

const ExampleComponent = () => {
  return (
    <>
      <Example.Showcase withVerticalPadding>
        {whiteBackdropRanks.map(rank => (
          <StyledShowcaseItem key={rank} title={`Rank ${rank}`}>
            <Text>
              <Link rank={rank} name="whiteBackdrop" {...linkProps}>
                White Backdrop
              </Link>
            </Text>
          </StyledShowcaseItem>
        ))}
      </Example.Showcase>
      <Example.Showcase backgroundColor="black" withVerticalPadding>
        {darkBackdropRanks.map(rank => (
          <StyledShowcaseItem
            key={rank}
            title={`Rank ${rank}`}
            titleProps={{ color: 'white' }}
          >
            <Text>
              <Link rank={rank} name="darkBackdrop" backdropColor="dark" {...linkProps}>
                Dark Backdrop
              </Link>
            </Text>
          </StyledShowcaseItem>
        ))}
      </Example.Showcase>
    </>
  )
}

;<ExampleComponent />
```
