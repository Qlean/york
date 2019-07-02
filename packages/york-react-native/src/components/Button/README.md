```js
import styled from 'styled-components'
import { Separator, View, Example, media } from '@qlean/york-web'
import { Button } from '@qlean/york-react-native'

const StyledShowcaseItem = styled(Example.ShowcaseItem)`
  width: 25%;
  ${media.mobile(`width: 100%;`)}
`

const whiteBackdropRanks = [1, 2, 3, 4]
const darkBackdropRanks = [1, 4]
const lightBackdropRanks = [1, 4]

const ExampleComponent = () => {
  const [isDisabled, setIsDisabled] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const buttonProps = {
    isDisabled,
    isSubmitting,
    onClick: () => {},
  }

  return (
    <>
      <View>
        <Example.Checkbox
          value={isDisabled}
          onChange={() => setIsDisabled(!isDisabled)}
        >
          isDisabled
        </Example.Checkbox>
        <Separator width={2} />
        <Example.Checkbox
          value={isSubmitting}
          onChange={() => setIsSubmitting(!isSubmitting)}
        >
          isSubmitting
        </Example.Checkbox>
      </View>
      <Example.Showcase withVerticalPadding>
        {whiteBackdropRanks.map(rank => (
          <StyledShowcaseItem key={rank} title={`Rank ${rank}`}>
            <Button rank={rank} {...buttonProps}>
              White Backdrop
            </Button>
          </StyledShowcaseItem>
        ))}
      </Example.Showcase>
      <Example.Showcase backgroundColor="green" withVerticalPadding>
        {darkBackdropRanks.map(rank => (
          <StyledShowcaseItem
            key={rank}
            title={`Rank ${rank}`}
            titleProps={{ color: 'white' }}
          >
            <Button rank={rank} backdropColor="dark" {...buttonProps}>
              Dark Backdrop
            </Button>
          </StyledShowcaseItem>
        ))}
      </Example.Showcase>
      <Example.Showcase backgroundColor="yellow" withVerticalPadding>
        {lightBackdropRanks.map(rank => (
          <StyledShowcaseItem key={rank} title={`Rank ${rank}`}>
            <Button rank={rank} backdropColor="light" {...buttonProps}>
              Light Backdrop
            </Button>
          </StyledShowcaseItem>
        ))}
      </Example.Showcase>
    </>
  )
}

;<ExampleComponent />
```
