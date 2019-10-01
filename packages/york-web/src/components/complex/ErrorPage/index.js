import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { View, Text, Separator } from 'york-web/components/primitive'
import { Button } from 'york-web/components/simple'
import { media, sizes, uiPoint } from 'york-web/utils'

import ServerErrorImage from './assets/500.svg'
import NotFoundImage from './assets/404.svg'

import locales from './locales'

const StyledContainer = styled(View)`
  height: 100%;
  padding: 0 ${sizes[4]}px;
`

const StyledLayoutContainer = styled(View)`
  text-align: center;
`

const StyledButtonContainer = styled.div`
  width: ${44 * uiPoint}px;
  ${media.mobile(`
    width: 100%;
  `)}
`

const StyledHeader = styled.div`
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
`

const StyledFooter = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
`

const reload = () => window.location.reload()

const ReloadButton = () => (
  <StyledButtonContainer>
    <Button name="reload" onClick={reload} isDisabled={false}>
      {locales.reloadButton}
    </Button>
  </StyledButtonContainer>
)

const getErrorLayout = statusCode => {
  switch (statusCode) {
    case 404:
      return (
        <>
          <NotFoundImage />
          <Separator height={8} />
          <Text preset="header4">{locales.errors[404].title}</Text>
          <Separator height={2} />
          <Text>{locales.errors[404].text}</Text>
        </>
      )
    case 500:
      return (
        <>
          <ServerErrorImage />
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
const ErrorPage = ({ statusCode, header, footer }) => {
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
      <StyledLayoutContainer flexDirection="column" alignItems="center">
        {getErrorLayout(statusCode)}
      </StyledLayoutContainer>
      <Separator height={8} />
      <StyledFooter>
        {footer && footer}
        <Separator height={6} />
      </StyledFooter>
    </StyledContainer>
  )
}

ErrorPage.propTypes = {
  /** Код ошибки */
  statusCode: PropTypes.number,
  /** Элемент заголовка */
  header: PropTypes.element,
  /** Элемент подвала */
  footer: PropTypes.element,
}

ErrorPage.defaultProps = {
  statusCode: null,
  header: null,
  footer: null,
}

export default ErrorPage
