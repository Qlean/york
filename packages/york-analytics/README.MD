`york-analytics` — это набор компонентов и утилит, призванный упростить сбор аналитических данных.

### Как это работает?

Вся система работает через React Context. Ключевым модулем является `AnalyticsProvider`, который передает дочерним элементам аналитический контекст. Провайдеры можно бесконечно вкладывать друг в друга, создавая новые контексты, при этом дочерние элементы будут брать информацию из ближайшего к ним провайдера.

### Как выглядит аналитическое событие?

У любого события есть как минимум 3 свойства: `category`, `label` и `action`. Но к событию можно добавить любое количество других данных.

```js static
{
  category: String, // Категория события, как правило совпадает с названием экрана или страницы
  label: String, // Название элемента, отправляющего событие
  action: String, // Название действия
  ...analyticsData: Object, // Дополнительные данные, которые нужно приложить к событию
}

// Примеры:

{
  category: 'DateTime',
  label: 'nextButton',
  action: 'click',
}

{
  category: 'DateTime',
  label: 'DateTime',
  action: 'mount',
  orderId: '123',
  address: 'Просто улица, д. 1'
}


Стандартные названия действий содержатся в модуле `eventActionTypes`.
```

Событие можно дополнить свойством `analyticsRoute`, которое позволяет понять, где именно в приложении совершилось действие. Оно генерируется автоматически и хранится в контексте. Компоненты `Button`, `Page` и `Header` из `york-web`, а так же `Button` и `Screen` из `york-react-native` автоматически добавляют `analyticsRoute` ко всем событиям, которые они отправляют.
Пример: `york/examplePage`

### Как события отправляются на сервер?

В `AnalyticsProvider` можно передать проп `trackEvent(event: Object): Function` - функцию, которая принимает событие и передает его в транспорт. Транспорт может быть разный у разных приложений. `trackEvent` можно передать в любой провайдер (например если в какой-то части приложения нужно использовать другой трекинг), но необходимо сделать это как минимум в самом первом. После передачи этой функции, все дочерние провайдеры и подключенные компоненты получат к ней доступ через контекст.

### Совместимые компоненты

Ряд компонентов йорка уже включает в себя аналитические модули.

#### york-web

`Page` - автоматически создает аналитический контекст и отправляет событие `mount` при первом рендере. Категория события равна свойству `name`
`Button` - автоматически отправляет событие `click` при нажатии. Категория события берется из ближайшего провайдера.
`Header` - автоматически отправляет события при клике на элементы, вызывающие коллбэки. Категория: topNavigation.

#### york-react-native

`Screen` - автоматически создает аналитический контекст и отправляет событие `mount` при первом рендере. Категория события равна свойству `name`
`Button` - автоматически отправляет событие `click` при нажатии. Категория события берется из ближайшего провайдера.

### Добавление трекинга к кастомным компонентам

```js static
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { eventActionTypes, AnalyticsContext } from '@qlean/york-analytics'

const CustomButton = ({ onClick, analyticsData, ...rest }) => {
  const analyticsContext = useContext(AnalyticsContext)

  const handleClick = e => {
    if (analyticsContext) {
      const { trackEvent, category, analyticsRoute } = analyticsContext
      trackEvent({
        category,
        label: name,
        action: eventActionTypes.click,
        analyticsRoute,
        ...analyticsData,
      })
    }
    onClick(e)
  }

  return <button name={name} onClick={handleClick} {...rest} />
}

CustomButton.defaultProps = {
  analyticsData: {},
}

CustomButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  analyticsData: PropTypes.object,
}

export default CustomButton
```

### Трэкинг ссылок

Ссылки в разных приложениях могут вести себя по разному, поэтому на данный момент в `york-analytics` нет универсального решения для трекинга нажатия на них.

Вот пример реализации для ссылки с трекингом:

```js static
import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link as YorkLink } from '@qlean/york-web'
import { eventActionTypes, AnalyticsContext } from '@qlean/york-analytics'

// Функция, которая преобразует url. В идеале является частью модуля транспорта.
import { getAnalyticsUrl } from 'modules/analytics/utils'

const Link = ({ href, name, analyticsData, ...rest }) => {
  const [url, setUrl] = useState(href)
  const analyticsContext = useContext(AnalyticsContext)

  useEffect(() => {
    if (analyticsContext) {
      const externalPattern = new RegExp('^(?:[a-z]+:)?//', 'i')
      const isExternalLink = externalPattern.test(href)
      const { category, analyticsRoute } = analyticsContext
      setUrl(
        getAnalyticsUrl({
          href: isExternalLink ? href : `${window.location.origin}${href}`,
          category,
          label: name,
          action: eventActionTypes.click,
          redirectUrl: 'https://anlt.cloud.qlean.ru/collect',
          analyticsRoute,
          destination: href,
          ...analyticsData,
        }),
      )
    }
  }, [href, name, analyticsContext, analyticsData])

  return <YorkLink href={url} name={name} {...rest} />
}

Link.defaultProps = {
  analyticsData: {},
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  analyticsData: PropTypes.object,
}

export default Link
```
