```js
import styled from 'styled-components'
import { Button, Separator, View, Example } from '@qlean/york-web'

import { sizes, media } from 'styles'

const StyledPaletteItem = styled(Example.PaletteItem)`
  width: 25%;
  ${media.mobile(`width: 100%;`)}
`

const ExampleComponent = () => {
  const [isDisabled, setIsDisabled] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

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
      <Separator height={4} />
      <Example.Palette>
        {Object.keys(Button.presets).map(preset => (
          <StyledPaletteItem key={preset}>
            <Button
              preset={preset}
              name="example"
              isDisabled={isDisabled}
              isSubmitting={isSubmitting}
              onClick={() => {}}
            >
              {preset}
            </Button>
          </StyledPaletteItem>
        ))}
      </Example.Palette>
    </>
  )
}

;<ExampleComponent />
```
