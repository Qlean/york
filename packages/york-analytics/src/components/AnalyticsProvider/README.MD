`AnalyticsProvider` — Создает новый аналитический контекст c категорией событий равной пропу `category`. Все дочерние элементы получают доступ к этому контексту через React Context API.

```js
import { useState, useEffect } from 'react'
import { AnalyticsProvider } from '@qlean/york-analytics'
import { Button, Page, Separator } from '@qlean/york-web'

const ExampleComponent = ({ children }) => {
  return (
    <AnalyticsProvider category="exampleComponent">
      <Button
        name="doExampleAction"
        /**
         * Помимо основного действия отправляет эвент аналитики:
         * {
         *   category: 'exampleComponent',
         *   label: 'doExampleAction',
         *   action: 'click',
         *   analyticsRoute: 'york/exampleComponent'
         * }
         */
        onClick={() => {}}
        isDisabled={false}
      >
        Root Event
      </Button>
      <Separator height={2} />
      <Page name="nestedPage" analyticsPayload={{ exampleId: 123, count: 1 }}>
        <Button
          name="doExampleAction"
          analyticsPayload={{ exampleId: 123 }}
          /**
           * Помимо основного действия отправляет эвент аналитики:
           * {
           *   category: 'nestedPage',
           *   label: 'doExampleAction',
           *   action: 'click',
           *   analyticsRoute: 'york/exampleComponent/nestedPage',
           *   exampleId: 123
           * }
           */
          onClick={() => {}}
          isDisabled={false}
        >
          Nested Event
        </Button>
      </Page>
    </AnalyticsProvider>
  )
}

;<ExampleComponent />
```
