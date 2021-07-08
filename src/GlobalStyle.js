import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  height: 100%;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  height: 100%;
}

#root {
  height: 100%;
  padding: 30px 20px
}
`;

