import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: "Museo Sans";
    src:  url('../assets/fonts/museo/museosans-500.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Museo Sans";
    src:  url('../assets/fonts/museo/museosans-700.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Museo Sans";
    src:  url('../assets/fonts/museo/museosans-900.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }

  body {
    font-family: "Museo Sans", Helvetica, Arial, sans-serif;
  }
`;