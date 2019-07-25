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
    name: 'example',
    onPress: () => {},
  }

  return (
    <>
      <Example.InputGroup>
        <Example.Checkbox
          value={isDisabled}
          onChange={() => setIsDisabled(!isDisabled)}
        >
          isDisabled
        </Example.Checkbox>
        <Example.Checkbox
          value={isSubmitting}
          onChange={() => setIsSubmitting(!isSubmitting)}
        >
          isSubmitting
        </Example.Checkbox>
      </Example.InputGroup>
      <Example.Showcase withVerticalPadding>
        {whiteBackdropRanks.map(rank => (
          <StyledShowcaseItem key={rank} title={`Rank ${rank}`}>
            <Button title="White Backdrop" rank={rank} {...buttonProps}/>
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
            <Button title="Dark Backdrop" rank={rank} backdropColor="dark" {...buttonProps}/>
          </StyledShowcaseItem>
        ))}
      </Example.Showcase>
      <Example.Showcase backgroundColor="yellow" withVerticalPadding>
        {lightBackdropRanks.map(rank => (
          <StyledShowcaseItem key={rank} title={`Rank ${rank}`}>
            <Button title="Light Backdrop" rank={rank} backdropColor="light" {...buttonProps}/>
          </StyledShowcaseItem>
        ))}
      </Example.Showcase>
    </>
  )
}

;<ExampleComponent />
```
