```js
import { Message, Separator } from '@qlean/york-web'
;<div>
  <Message message="Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям." />
  <Separator height={2} />
  <Message message="Повседневная практика показывает, что постоянный количественный рос." />
  <Separator height={2} />
  <Message message={{ text: 'Error message', icon:'error' }} />
  <Separator height={2} />
  <Message message={{ text: 'Success message', icon:'success' }} />
  <Separator height={2} />
  <Message message={{ text: 'Test message with onClick', onClick: () => console.log('CLICK') }} />
</div>
```
