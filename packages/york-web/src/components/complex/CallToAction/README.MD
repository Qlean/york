```js
import React, { useState } from 'react'
import styled from 'styled-components'
import { CallToAction, media } from '@qlean/york-web'

const StyledContainer = styled.div`
  overflow: auto;
`

const StyledImage = styled.img`
  width: 300px;
  height: 276px;

  ${media.wide(`
    width: 375;
    height: 345;
  `)}

  ${media.mobile(`
    width: 250px;
    height: 230px;
  `)}
`

const ExampleCallToAction = () => {
  const [ title, setTitle ] = useState(true)
  const [ actionHint, setActionHint ] = useState(true)

  return (
    <>
      <Example.InputGroup>
        <Example.Checkbox
          value={title}
          onChange={() => setTitle(!title)}
        >
          title
        </Example.Checkbox>
        <Example.Checkbox
          value={actionHint}
          onChange={() => setActionHint(!actionHint)}
        >
          actionHint
        </Example.Checkbox>
      </Example.InputGroup>
      <StyledContainer>
        <CallToAction
          buttonProps={{
            name: 'qleanPlus',
            onClick: () => {},
            isDisabled: false,
          }}
          title={title ? "Попробуйте QLEAN ПЛЮС" : ""}
          text="Скидка на\u00a0уборку, стирку, хранение вещей и\u00a0многое другое\u00a0—\u00a0в\u00a0одной подписке "
          actionTitle="Попробовать бесплатно"
          actionHint={actionHint ? "3 месяца бесплатно, потом 249 р. в\u00a0месяц" : "" }
          image={<StyledImage src={require('./assets/qleanplus.png')} alt="Qlean Plus" />}
        />
      </StyledContainer>
    </>
  )
}

;<ExampleCallToAction />
```