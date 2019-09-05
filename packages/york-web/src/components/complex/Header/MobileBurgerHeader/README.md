```js { "props": { "style": {"padding":"20px 0","border":"0","backgroundImage":"linear-gradient(45deg, #f5f5f5 25%, transparent 25%), linear-gradient(\n      -45deg,\n      #f5f5f5 25%,\n      transparent 25%\n    ), linear-gradient(45deg, transparent 75%, #f5f5f5 75%), linear-gradient(-45deg, transparent 75%, #f5f5f5\n        75%)","backgroundSize":"16px 16px","backgroundPosition":"0 0, 0 8px, 8px -8px, -8px 0px"}}}
import { LEVEL_ONE_MENU, LEVEL_TWO_MENU } from '../assets/data'
;<div style={{ fontFamily: '"Museo Sans", sans-serif' }}>
  <MobileBurgerHeader
    levelOneMenu={LEVEL_ONE_MENU}
    levelTwoMenu={LEVEL_TWO_MENU}
  />
</div>
```
