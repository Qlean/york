```js
import React, { useState } from 'react'
import styled from 'styled-components'
import { CallToAction, media } from '@qlean/york-web'

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
  const [title, setTitle] = useState(true)
  const [caption, setCaption] = useState(true)

  return (
    <>
      <Example.InputGroup>
        <Example.Checkbox value={title} onChange={() => setTitle(!title)}>
          title
        </Example.Checkbox>
        <Example.Checkbox value={caption} onChange={() => setCaption(!caption)}>
          caption
        </Example.Checkbox>
      </Example.InputGroup>
      <StyledContainer>
        <CallToAction
          buttonProps={{
            children: 'Попробовать бесплатно',
            name: 'qleanPlus',
            onClick: () => {},
            isDisabled: false,
          }}
          title={title ? 'Попробуйте QLEAN ПЛЮС' : ''}
          description="Скидка на\u00a0уборку, стирку, хранение вещей и\u00a0многое другое\u00a0—\u00a0в\u00a0одной подписке "
          caption={
            caption ? '3 месяца бесплатно, потом 249 р. в\u00a0месяц' : ''
          }
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
