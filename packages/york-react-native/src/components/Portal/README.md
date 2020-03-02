```js
import { Portal } from '@qlean/york-react-native'

const ExampleComponent = () => {
  return (
    
    <Portal.Provider>
      <>
        <Example.Showcase backgroundColor="grey" withVerticalPadding>
          <Example.ShowcaseItem>
            Launch area: (sending text "foo" to "test0", "bar" to "test1" and "baz" to nonexistent)
            <Portal.GateEnter targetName='test0'>
              foo
            </Portal.GateEnter>
            <Portal.GateEnter targetName='test1'>
              bar
            </Portal.GateEnter>
            <Portal.GateEnter targetName='test nonexistent exit'>
              baz
            </Portal.GateEnter>
          </Example.ShowcaseItem>
        </Example.Showcase>
        <Example.Showcase backgroundColor="green" withVerticalPadding>
          <Example.ShowcaseItem>
            Landing area with named exit "test0":
            <Portal.GateExit name='test0' />
          </Example.ShowcaseItem>
          <Example.ShowcaseItem>
            Landing area with named exit "test1":
            <Portal.GateExit name='test1' />
          </Example.ShowcaseItem>
          <Example.ShowcaseItem>
            Landing area with default exit:
            <Portal.DefaultExit/>
          </Example.ShowcaseItem>
        </Example.Showcase>
      </>
    </Portal.Provider>
  )
}

;<ExampleComponent />
```
