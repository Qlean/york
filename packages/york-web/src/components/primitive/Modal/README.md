```js
import styled from 'styled-components'
import { colors } from '@qlean/york-core'
import { Modal, View, Text, Separator, sizes } from '@qlean/york-web'

const StyledBox = styled(Example.Box)`
  text-align: center;
  margin: auto;
`

const ExampleComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  return (
    <>
      <Example.InputGroup>
        <button onClick={() => setIsModalOpen(true)}>Простая модалка</button>
      </Example.InputGroup>
      <Modal
        name="example"
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <StyledBox width={24} height={16}>
          <Text color="white">{Example.text.short}</Text>
        </StyledBox>
      </Modal>
    </>
  )
}

;<ExampleComponent />
```
