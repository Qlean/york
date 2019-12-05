```js
import styled from 'styled-components'
import { Modal, Text } from '@qlean/york-web'

const ExampleComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(true)
  const [isModal, setIsModal] = React.useState(true)

  return (
    <>
      <Example.InputGroup>
        <Example.Checkbox
          value={isModalOpen}
          onChange={() => setIsModalOpen(!isModalOpen)}
        >
          isModalOpen
        </Example.Checkbox>
        <Example.Checkbox value={isModal} onChange={() => setIsModal(!isModal)}>
          isModal
        </Example.Checkbox>
      </Example.InputGroup>
      {isModal && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
        >
          <Modal.Window title={Example.text.short}>
            <Text>{Example.text.long}</Text>
          </Modal.Window>
        </Modal>
      )}
    </>
  )
}

;<ExampleComponent />
```
