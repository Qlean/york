```js
import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, CallToAction, media } from '@qlean/york-web'

const StyledContainer = styled.div`
  overflow: auto;
`

const StyledRightView = styled.div`
  display: flex;
  justify-content: flex-end;

  ${media.mobile(`
    justify-content: center;
  `)}
`

const StyledImage = styled.img`
  width: 300px;
  height: 276px;

  ${media.wide(`
    width: 375px;
    height: 345px;
  `)}

  ${media.mobile(`
    width: 250px;
    height: 230px;
  `)}
`

const ExampleCallToAction = () => {
  const [caption, setCaption] = useState(true)

  return (
    <>
      <Example.InputGroup>
        <Example.Checkbox value={caption} onChange={() => setCaption(!caption)}>
          caption
        </Example.Checkbox>
      </Example.InputGroup>
      <StyledContainer>
        <CallToAction
          title="Попробуйте QLEAN ПЛЮС"
          description="Скидка на уборку, стирку, хранение вещей и многое другое — в одной подписке"
          action={
            <Button name="example" onClick={() => {}} isDisabled={false}>
              Попробовать бесплатно
            </Button>
          }
          caption={caption ? '3 месяца бесплатно, потом 299 р. в месяц' : ''}
          rightNode={
            <StyledRightView>
              <StyledImage
                src={require('./assets/qleanplus.png')}
                alt="Qlean Plus"
              />
            </StyledRightView>
          }
        />
      </StyledContainer>
    </>
  )
}

;<ExampleCallToAction />
```
