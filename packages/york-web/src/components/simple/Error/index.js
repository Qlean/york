import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Button } from 'york-web/components/simple'
import { View, Text, Separator } from 'york-web/components/primitive'
import { media, sizes, uiPoint } from 'york-web/utils'

import locales from './locales'

const StyledContainer = styled(View)`
  height: 80vh;
  padding: 0 ${sizes[4]}px;
`

const StyledLayoutContainer = styled(View)`
  text-align: center;
`

const StyledImage = styled.img`
  max-width: 100%;
`

const StyledButtonContainer = styled.div`
  width: ${44 * uiPoint}px;
  ${media.mobile(`
    width: 100%;
  `)}
`

const StyledHeader = styled(View)`
  margin-bottom: auto;
`

const StyledFooter = styled(View)`
  margin-top: auto;
`

const ReloadButton = () => (
  <StyledButtonContainer>
    <Button name="reload" onClick={window.location.reload} isDisabled={false}>
      {locales.reloadButton}
    </Button>
  </StyledButtonContainer>
)

const getErrorLayout = statusCode => {
  switch (statusCode) {
    case 404:
      return (
        <>
          <StyledImage src={require('./assets/404.svg')} />
          <Separator height={8} />
          <Text preset="header4">{locales.errors[404].title}</Text>
          <Separator height={2} />
          <Text>{locales.errors[404].text}</Text>
        </>
      )
    case 500:
      return (
        <>
          <StyledImage src={require('./assets/500.svg')} />
          <Separator height={8} />
          <Text preset="header4">{locales.errors[500].title}</Text>
          <Separator height={2} />
          <Text>{locales.errors[500].text}</Text>
          <Separator height={6} />
          <ReloadButton />
        </>
      )
    default:
      return (
        <>
          <Text preset="header4">{locales.errors.default.title}</Text>
          <Separator height={2} />
          <Text>{locales.errors.default.text}</Text>
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
      <StyledLayoutContainer flexDirection="column" alignItems="center">
        {getErrorLayout(statusCode)}
      </StyledLayoutContainer>
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
  statusCode: PropTypes.number,
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
