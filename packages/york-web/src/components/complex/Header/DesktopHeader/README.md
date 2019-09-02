```js { "props": { "style": {"width":"100vw","position":"relative","left":"50%","right":"50%","marginLeft":"calc(-50vw - 8px)","marginRight":"calc(-50vw - 8px)","padding":"20px 0","border":"0","backgroundImage":"linear-gradient(45deg, #f5f5f5 25%, transparent 25%), linear-gradient(\n      -45deg,\n      #f5f5f5 25%,\n      transparent 25%\n    ), linear-gradient(45deg, transparent 75%, #f5f5f5 75%), linear-gradient(-45deg, transparent 75%, #f5f5f5\n        75%)","backgroundSize":"16px 16px","backgroundPosition":"0 0, 0 8px, 8px -8px, -8px 0px","height":"150vh"} } }
import { LEVEL_ONE_MENU, LEVEL_TWO_MENU, LOGO } from '../assets/data'
;<div style={{ fontFamily: '"Museo Sans", sans-serif' }}>
  <DesktopHeader
    levelOneMenu={LEVEL_ONE_MENU}
    levelTwoMenu={LEVEL_TWO_MENU}
    logo={LOGO}
  />

  <div
    style={{
      height: '150vh',
      background:
        'linear-gradient(to top, #E4AF9D 20%, #E4E4D8 50%, #A19887 80%)',
    }}
  />
</div>
```
