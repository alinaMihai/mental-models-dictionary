import { createGlobalStyle } from 'styled-components';
import { primaryFont, typeScale } from './typography';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
  font-size: 16px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  font-family: ${primaryFont};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

main {
  width: 90%;
  margin: 0 auto;
}
#root {
    display: block;
    height: 100%;
    max-height: 100vh;
    overflow: auto;
}
p {
  font-size: ${typeScale.paragraph};
}
`;
