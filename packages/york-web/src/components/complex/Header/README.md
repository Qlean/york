```js
import { mediaBreakpoints } from '@qlean/york-web'
import { props } from './assets/data'
;<div style={{ overflow: 'auto', height: '60vh' }}>
  <div style={{ width: mediaBreakpoints.base }}>
    <Header {...props} />
    <div
      style={{
        height: '200vh',
        background: 'linear-gradient(to top, black, grey)',
      }}
    />
  </div>
</div>
```
