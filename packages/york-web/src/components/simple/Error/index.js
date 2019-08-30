import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'york-web/components/simple'
import { View, Text, Separator } from 'york-web/components/primitive'

const ReloadButton = () => (
  <Button
    name="Error.reloadButton"
    onClick={() => {
      window.location.reload()
    }}
    isDisabled={false}
  >
    Обновить страницу
  </Button>
)

const getErrorLayout = code => {
  switch (code) {
    case 404:
      return (
        <>
          <img src={require('./assets/404.svg')} />
          <Separator height={8} />
          <Text preset="header4">Увы, такой страницы нет</Text>
          <Separator height={2} />
          <Text>Но есть много других, не менее интересных</Text>
        </>
      )
    case 500:
      return (
        <>
          <img src={require('./assets/500.svg')} />
          <Separator height={8} />
          <Text preset="header4">Извините, сервер недоступен</Text>
          <Separator height={2} />
          <Text>Но не переживайте, мы уже это чиним</Text>
          <Separator height={8} />
          <ReloadButton />
        </>
      )
    default:
      return (
        <>
          <Text preset="header4">У нас что-то сломалось</Text>
          <Separator height={2} />
          <Text>Попробуйте перезагрузить страницу — это должно помочь</Text>
          <Separator height={8} />
          <ReloadButton />
        </>
      )
  }
}

/** Страница ошибок */
const Error = ({ error }) => {
  const { code } = error

  return (
    <View flexDirection="column" justifyContent="center" alignItems="center">
      {getErrorLayout(code)}
    </View>
  )
}

Error.propTypes = {
  error: PropTypes.object,
}

export default Error
