import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Button } from 'york-web/components/simple'
import { View, Text, Separator } from 'york-web/components/primitive'
import { media } from 'york-web/utils'

const StyledContainer = styled(View)`
  height: 100vh;
`

const StyledImage = styled.img`
  max-width: 100%;
`

const StyledButtonContainer = styled.div`
  width: auto;

  ${media.mobile(`
    width: 100%;
  `)}
`

const StyledText = styled(Text)`
  text-align: center;
`

const StyledHeader = styled(View)`
  margin-bottom: auto;
`

const StyledFooter = styled(View)`
  margin-top: auto;
`

const ReloadButton = () => (
  <StyledButtonContainer>
    <Button
      name="Error.reloadButton"
      onClick={() => {
        window.location.reload()
      }}
      isDisabled={false}
    >
      Обновить страницу
    </Button>
  </StyledButtonContainer>
)

const getErrorLayout = statusCode => {
  switch (statusCode) {
    case '404':
      return (
        <>
          <StyledImage src={require('./assets/404.svg')} />
          <Separator height={8} />
          <StyledText preset="header4">Увы, такой страницы нет</StyledText>
          <Separator height={2} />
          <StyledText>
            {'Но\u00a0есть много других, не\u00a0менее интересных'}
          </StyledText>
        </>
      )
    case '500':
      return (
        <>
          <StyledImage src={require('./assets/500.svg')} />
          <Separator height={8} />
          <StyledText preset="header4">Извините, сервер недоступен</StyledText>
          <Separator height={2} />
          <StyledText>
            {'Но\u00a0не\u00a0переживайте, мы уже\u00a0это чиним'}
          </StyledText>
          <Separator height={6} />
          <ReloadButton />
        </>
      )
    default:
      return (
        <>
          <StyledText preset="header4">У нас что-то сломалось</StyledText>
          <Separator height={2} />
          <StyledText>
            Попробуйте перезагрузить страницу — это должно помочь
          </StyledText>
          <Separator height={6} />
          <ReloadButton />
        </>
      )
  }
}

/** Страница ошибок */
const Error = ({ statusCode, header, footer }) => {
  return (
    <StyledContainer
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <StyledHeader>
        <Separator height={6} />
        {header && header}
      </StyledHeader>
      <Separator height={8} />
      {getErrorLayout(statusCode)}
      <Separator height={8} />
      <StyledFooter>
        {footer && footer}
        <Separator height={6} />
      </StyledFooter>
    </StyledContainer>
  )
}

Error.propTypes = {
  /** Код ошибки */
  statusCode: PropTypes.string,
  /** Элемент заголовка */
  header: PropTypes.element,
  /** Элемент подвала */
  footer: PropTypes.element,
}

Error.defaultProps = {
  statusCode: null,
  header: null,
  footer: null,
}

export default Error
