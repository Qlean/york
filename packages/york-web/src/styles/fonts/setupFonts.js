import { injectGlobal } from 'styled-components';

import MuseoSansCyrl300 from 'york-core/fonts/MuseoSansCyrl-300.otf';
import MuseoSansCyrl500 from 'york-core/fonts/MuseoSansCyrl-500.otf';
import MuseoSansCyrl700 from 'york-core/fonts/MuseoSansCyrl-700.otf';

/* eslint-disable no-unused-expressions */
injectGlobal`
  @font-face {
    font-family: MuseoSansCyrl;
    src: url('${MuseoSansCyrl300}') format('opentype');
    font-weight: 300;
  }
  @font-face {
    font-family: MuseoSansCyrl;
    src: url('${MuseoSansCyrl500}') format('opentype');
    font-weight: 500;
  }
  @font-face {
    font-family: MuseoSansCyrl;
    src: url('${MuseoSansCyrl700}') format('opentype');
    font-weight: 700;
  }
`;
/* eslint-enable no-unused-expressions */
