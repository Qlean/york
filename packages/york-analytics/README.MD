`york-analytics` — это набор компонентов и утилит, призванный упростить сбор аналитических данных.

### TL / DR

Для минимальной настройки необходимо добавить в корень приложения `RootAnalyticsProvider`. После этого все `Button`, `Screen` и `Page` начнут отправлять события автоматически.

```js static
import React from 'react'
import { RootAnalyticsProvider } from '@qlean/york-analytics'

const App = () => (
  <RootAnalyticsProvider appId="exampleApp" trackEvent={console.log}>
    // Остальной код приложения
  </RootAnalyticsProvider>
)
```

### Как это работает?

Вся система работает через React Context. Ключевым модулем является `AnalyticsProvider`, который передает дочерним элементам аналитический контекст. Провайдеры можно бесконечно вкладывать друг в друга, создавая новые контексты, при этом дочерние элементы будут брать информацию из ближайшего к ним провайдера.

### Как выглядит аналитическое событие?

У любого события есть как минимум 3 свойства: `category`, `label` и `action`. По умолчанию к каждому событию добавляется свойство `analyticsRoute`, с помощью которого можно понять где именнов приложении произошло событие. К событию можно добавить любое количество других данных.

```js static
{
  category: String, // Категория события, как правило совпадает с названием экрана или страницы
  label: String, // Название элемента, отправляющего событие
  action: String, // Название действия
  analyticsRoute: String // Генерируется автоматически из иерархии провайдеров
  ...analyticsPayload: Object, // Дополнительные данные, которые нужно приложить к событию
}

// Примеры:

{
  category: 'ExampleButton',
  label: 'doExampleAction',
  action: 'click',
}

{
  category: 'ExamplePage',
  label: 'ExamplePage',
  action: 'mount',
  orderId: '123',
  address: 'Просто улица, д. 1'
}

Стандартные названия действий содержатся в модуле `eventActionTypes`.
```

### Как события отправляются на сервер?

В `RootAnalyticsProvider` передается проп `trackEvent(event: Object): Function` - функцию, которая принимает событие и передает его в транспорт. Транспорт может быть разный у разных приложений. После передачи этой функции, все дочерние провайдеры и подключенные компоненты получат к ней доступ через контекст.

### Совместимые компоненты

Ряд компонентов йорка уже включает в себя аналитические модули.

#### york-web

`Page` — автоматически создает аналитический контекст и отправляет событие `pageView`. Категория события равна свойству `name`
`Button` — автоматически отправляет событие `click` при нажатии. Категория события берется из ближайшего провайдера.
`Header` — автоматически отправляет события при клике на элементы, вызывающие коллбэки. Категория: `header`.

#### york-react-native

`Screen` — автоматически создает аналитический контекст и отправляет событие `pageView`. Категория события равна свойству `name`
`Button` — автоматически отправляет событие `press` при нажатии. Категория события берется из ближайшего провайдера.

### Добавление трекинга к кастомным компонентам

```js static
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { eventActionTypes, useAnalytics } from '@qlean/york-analytics'

const CustomButton = ({ onClick, analyticsPayload, ...rest }) => {
  const { trackEvent, category } = useAnalytics()

  const handleClick = e => {
    trackEvent({
      category,
      label: name,
      action: eventActionTypes.click,
      ...analyticsPayload,
    })
    onClick(e)
  }

  return <button name={name} onClick={handleClick} {...rest} />
}

CustomButton.defaultProps = {
  analyticsPayload: {},
}

CustomButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  analyticsPayload: PropTypes.object,
}

export default CustomButton
```
