import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Button } from 'york-web/components/simple'
import { View, Text, Separator } from 'york-web/components/primitive'
import { media, sizes } from 'york-web/utils'

import locales from './locales'

const StyledContainer = styled(View)`
  height: 100%;
  padding: 0 ${sizes[4]}px;
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
      {locales.refreshButton}
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
          <StyledText preset="header4">{locales.errors[404].title}</StyledText>
          <Separator height={2} />
          <StyledText>{locales.errors[404].text}</StyledText>
        </>
      )
    case '500':
      return (
        <>
          <StyledImage src={require('./assets/500.svg')} />
          <Separator height={8} />
          <StyledText preset="header4">{locales.errors[500].title}</StyledText>
          <Separator height={2} />
          <StyledText>{locales.errors[500].text}</StyledText>
          <Separator height={6} />
          <ReloadButton />
        </>
      )
    default:
      return (
        <>
          <StyledText preset="header4">
            {locales.errors.default.title}
          </StyledText>
          <Separator height={2} />
          <StyledText>{locales.errors.default.text}</StyledText>
          <Separator height={6} />
          <ReloadButton />
        </>
      )
  }
}

/** Страница ошибок. Занимает высоту родителя. */
const Error = ({ statusCode, header, footer }) => {
  return (
    <StyledContainer
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <StyledHeader flexDirection="column">
        <Separator height={6} />
        {header && header}
      </StyledHeader>
      <Separator height={8} />
      {getErrorLayout(statusCode)}
      <Separator height={8} />
      <StyledFooter flexDirection="column">
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
