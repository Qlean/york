```js
import styled from 'styled-components'
import { Link, media } from '@qlean/york-web'

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
            <Link rank={rank} {...linkProps}>
              White Backdrop
            </Link>
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
            <Link rank={rank} backdropColor="dark" {...linkProps}>
              Dark Backdrop
            </Link>
          </StyledShowcaseItem>
        ))}
      </Example.Showcase>
    </>
  )
}

;<ExampleComponent />
```
