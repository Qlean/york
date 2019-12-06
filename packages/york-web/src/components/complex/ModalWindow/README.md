```js
import styled from 'styled-components'
import { ModalWindow, Text, Separator } from '@qlean/york-web'

const ExampleComponent = () => {
  const [isSmallModalOpen, setIsSmallModalOpen] = React.useState(false)
  const [isLargeModalOpen, setIsLargeModalOpen] = React.useState(false)
  return (
    <>
      <Example.InputGroup>
        <button onClick={() => setIsSmallModalOpen(true)}>
          Маленькая модалка
        </button>
        <button onClick={() => setIsLargeModalOpen(true)}>
          Большая модалка
        </button>
      </Example.InputGroup>
      <ModalWindow
        name="example"
        title={Example.text.short}
        isOpen={isSmallModalOpen}
        onRequestClose={() => setIsSmallModalOpen(false)}
      >
        <Text>{Example.text.medium}</Text>
      </ModalWindow>
      <ModalWindow
        name="example"
        title={Example.text.short}
        isOpen={isLargeModalOpen}
        onRequestClose={() => setIsLargeModalOpen(false)}
      >
        <Text>{Example.text.long}</Text>
        <Separator height={4} />
        <Text>{Example.text.long}</Text>
      </ModalWindow>
    </>
  )
}

;<ExampleComponent />
```
